const express = require('express');
//add body parser
const bodyParser = require('body-parser');
const morgan = require('morgan');
const views = require('./views');
const {Page, User} = require('./models');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
//implement body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.send(views.main());
})

const PORT = 3000;
const init = async () => {
  await User.sync();
  await Page.sync();
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();

