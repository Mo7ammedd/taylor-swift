// express app
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 5000;

// .env access
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

// Database connection
const dbConnection = require('./config/db');
dbConnection();

// JSON parse
app.use(express.json());
app.use(express.static('views'));

// Enable other domains to  access the app
app.use(cors());
app.options('*', cors());

// Routes
const quotesRouter = require('./routes/quotes');

// Mount Routes

app.use('/api/v1/quote', quotesRouter);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.all('*', (req, res, next) => {
  res.status(404).json(`Can't find ${req.originalUrl} on this server!`);
});

// Server
app.listen(process.env.PORT || port, function () {
  console.log(
    `Express server listening on port ${this.address().port} in ${
      app.settings.env
    } mode`
  );
});
