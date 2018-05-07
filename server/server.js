'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.json());

app.listen(config.port, err => {
	console.log(`Listening at http://localhost:${config.port}`);
});

console.log('Server started.');


/*****************************************************************************
 * Votes
 ****************************************************************************/

var votes1 = 0;		// Keep track of votes for choice 1
var votes2 = 0;		// Keep track of votes for choice 2

app.get('/api/votes', (req,res) => {
	res.json({
		votes1: votes1,
		votes2: votes2
	});
});

// Cast a vote for votes1
app.post('/api/vote1', (req,res) => {
	votes1++;
	res.json({
		votes1: votes1,
		votes2: votes2
	});
});

// Cast a vote for votes2
app.post('/api/vote2', (req,res) => {
	votes2++;
	res.json({
		votes1: votes1,
		votes2: votes2
	});
});


/*****************************************************************************
 * List
 ****************************************************************************/

var items = ['Server Item 1', 'Milk', 'Eggs'];

app.get('/api/items', (req,res) => {
	console.log('GET /api/items: ', items);
	res.json(items);
});

app.post('/api/item', (req,res) => {		// {newItem}
	console.log('POST /api/item: ', req.body);
	items.push(req.body.newItem);
	res.json(items);
});


/*****************************************************************************
 * Examples
 ****************************************************************************/

app.get('/api/add/:num1/:num2/:num3', (req,res) => {
	var num1 = +req.params.num1;
	var num2 = +req.params.num2;
	var num3 = +req.params.num3;
	res.json(num1+num2+num3);
});

app.post('/api/add', (req,res) => {			// POST body: {num1, num2}
	console.log('POST /api/add: %j', req.body);
	var sum = req.body.num1 + req.body.num2;
	res.json(sum);
});


app.post('/api/post', (req,res) => {
	res.json(req.body);
});

/**************************************************************************************************
 * Example routes
 *************************************************************************************************/

// GET route to the current server time
app.get('/api/example/time', (req,res) => {
	res.json({
		time: Date.now(),				// Number of milliseconds since Jan 1 1970 (the Unix Epoch)
		text: Date().toString()			// Date as a string
	});
});

// GET route to return the number of seconds the server (this node program) as been up.
app.get('/api/example/uptime', (req,res) => {
	res.json({uptime:process.uptime()});
});

// A simple counter that increases each time the route is triggered
var count = 0;
app.get('/api/example/count', (req,res) => {
	count++;			// Increase the count by 1
	res.json({
		count: count	// Return the new count
	});
});

// POST request that echoes back the text sent
app.post('/api/example/echo', (req,res) => {
	var text = req.body.text;					// req.body is the object POSTed to the route
	res.json({
		original: text,
		caps: text.toUpperCase()
	});
});
