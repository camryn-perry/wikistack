const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
//how do we use this in the future?
app.use(express.static(__dirname));
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
  res.send("Hello World!");
})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})
