const express = require('express');
const cors = require('cors');
const { postgraphile } = require('postgraphile');
require('dotenv').config()

const app = express();

app.use(
    postgraphile(
      process.env.DB_CONNECTION_STRING,
      process.env.DB_DATABASE,
      { 
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        enableCors: true,
      }
    )
);

app.use(cors());

module.exports = app;