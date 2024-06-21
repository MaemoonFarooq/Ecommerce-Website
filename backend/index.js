const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
require("dotenv/config");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);

const dbOpttions={useNewUrlParser:true,useUnifiedTopology:true}
mongoose.connect(process.env.uri,{})
  .then(() => {
    console.log('Connected to MongoDB!');
    
    // Start your Express app after successful MongoDB connection
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
