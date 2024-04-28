const express = require('express');
const path = require('path');
const Qoute = require('../models/quotesModel');
const app = express();

// index
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname + './index.html'));
});

// Create quote
app.post('/', async (req, res, next) => {
  const qoute = await Qoute.create(req.body);
  console.log(qoute);
  res.send(qoute);
});

// get random lyrics
app.get('/', async (req, res) => {
  const qoute = await Qoute.sample(1);
  res.send(qoute);
});

// get all lyrics of specific song
app.get('/:song', async (req, res, next) => {
  const qoutes = await Qoute.find({ song: new RegExp(req.params.song, 'i') });
  res.send(qoutes);
});

// get all Quotes
app.get('/all', async (req, res) => {
  const qoute = await Qoute.find();
  res.send(qoute);
});

module.exports = app;
