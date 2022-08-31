const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
  res.render('generic', {
    title: "Testing mail",
    fullName: "Fadhlurahman",
    description: "Description"
  });
});

app.get('/revamp', (req, res) => {
  res.render('revamp', {
    title: "Revamp",
    fullName: "Fadhlurahman",
    description: "Description"
  });
})


app.listen(8080);
console.log('Server is listening on port 8080');