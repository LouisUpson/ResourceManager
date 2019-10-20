const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/user.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use(router);

app.use(express.static('./public'));

// switch morgan to 'combined'
app.use(morgan('short'));

app.get('/', (req, res) => {
  console.log('responding to root route');
  res.send('Hello from root');
});

app.listen(3000, () => {
  console.log('Server is up and listening on 3000');
});