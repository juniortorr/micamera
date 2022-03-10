require('dotenv').config()
const express = require('express');
const res = require('express/lib/response');


const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');

//MiddleWares//

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//End of Middleware

//Begin Routes

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
}); 

app.get('/contact', (req, res) => {
  res.render('contact');
});


app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.get('/services', (req, res) => {
  res.render('services');
});

//End Routes

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
