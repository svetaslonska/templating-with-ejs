const express = require('express');
const app = express();
const port = 3000;

//EJS
app.set("view engine","ejs");

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  let title = "Home";
  res.render("pages/index",{"title":title});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/about', (req, res) => {
  let title = "About";
  res.render("pages/about",{"title":title});
});

app.get('/projects', (req, res) => {
  let title = "Projects";
  res.render("pages/projects",{"title":title});
});

app.get('/contact', (req, res) => {
  let title = "Contact";
  res.render("pages/contact",{"title":title});
});

app.get('/facts', (req, res) => {
  let title = "Facts about me";
  res.render("pages/facts",{"title":title});
});