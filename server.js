const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

//app.use((req, res, next) => {
//   res.render('maintenance.hbs');
//});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/project', (req, res) => {
  res.render('project.hbs', {
    pageTitle: 'Project Page',
    projectDescription: 'Node app'
  });
});

app.listen(port);
