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
// app.get('/:song', async (req, res, next) => {
//   const qoutes = await Qoute.find({ song: new RegExp(req.params.song, 'i') });
//   res.send(qoutes);
// });

// get all Quotes
app.get('/allson', async (req, res) => {
  try {
    const quotes = await Qoute.find(); // This fetches all documents in the Qoute collection
    res.status(200).send(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error.message);
    res.status(500).send({ error: 'Failed to fetch quotes' });
  }
});

//generate quiz questions 
app.get('/quiz/question', async (req, res) => {
  try {
    const randomQuotes = await Qoute.aggregate([{ $sample: { size: 10 } }]);

    if (randomQuotes.length === 0) {
      return res.status(404).send({ error: 'No quotes found' });
    }

    const questions = await Promise.all(
      randomQuotes.map(async (randomQuote) => {
        const correctAnswer = randomQuote.song;
        const incorrectAnswers = await getThreeRandomSongs(correctAnswer);

        return {
          question: randomQuote.quote,
          answers: [correctAnswer, ...incorrectAnswers], 
        };
      })
    );

    res.send(questions);
  } catch (error) {
    console.error('Error generating quiz questions:', error);
    res.status(500).send({ error: 'Failed to generate quiz questions' });
  }
});

async function getThreeRandomSongs(excludeSong) {
  try {
    const allSongs = await Qoute.distinct('song', { song: { $ne: excludeSong } });
    return _.sampleSize(allSongs, 3);
  } catch (error) {
    console.error('Error fetching distinct songs:', error);
    throw error;
  }
}

app.get('/rsong', async (req, res) => {
  const randomSong = await Qoute.aggregate([
    { $group: { _id: "$song", }  },
    { $sample: { size: 1 } }
  ]);
  res.send(randomSong);
});

module.exports = app;
