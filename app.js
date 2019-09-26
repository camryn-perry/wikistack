const express = require('express');
const morgan = require('morgan');
const views = require('./views');
const { db } = require('./models');
const app = express();

app.use(morgan('dev'));
//how do we use this in the future?
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : false}));

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get('/', (req, res) => {
  res.send(views.main());
})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})
