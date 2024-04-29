const express = require('express');
const Qoute = require('../models/quotesModel');
const _ = require('lodash');
const app = express();

// Create quote
app.post('/', async (req, res, next) => {
  const qoute = await Qoute.create(req.body);
  console.log(qoute);
  res.send(qoute);
});

// get random lyrics
app.get('/', async (req, res) => {
  const qoute = await Qoute.aggregate().sample(1);
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

//generate quiz questions 
app.get('/quiz/question', async (req, res) => {
  try {
    const randomQuote = await Qoute.aggregate([{ $sample: { size: 1 } }]);

    if (randomQuote.length === 0) {
      return res.status(404).send({ error: 'No quotes found' });
    }

    const correctAnswer = randomQuote[0].song; 
    const question = {
      question: `${randomQuote[0].quote}`,
      answers: [
        correctAnswer, 
      ...(await getThreeRandomSongs(correctAnswer)), 
      ],
    };

    res.send(question);
  } catch (error) {
    console.error('Error generating quiz question:', error.message, error.stack);
    res.status(500).send({ error: 'Failed to generate quiz question' });
  }
});

async function getThreeRandomSongs(excludeSong) {
  const songs = await Qoute.distinct('song', { song: { $ne: excludeSong } });
  return _.sampleSize(songs, 3); 
}

module.exports = app;
