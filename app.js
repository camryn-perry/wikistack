const express = require('express');
const morgan = require('morgan');
const views = require('./views');
const {Page, User} = require('./models');
const app = express();

app.use(morgan('dev'));
//how do we use this in the future?
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
  res.send(views.main());
})

const PORT = 1337;
const init = async () => {
  await User.sync();
  await Page.sync();
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();

