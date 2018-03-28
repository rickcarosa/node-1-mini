const express = require('express')
const bodyParser = require('body-parser')
const bc = require('./controllers/books_controllers')

const app  = express();

app.use(bodyParser.json());  // top level middleware

app.get('/api/books', bc.read)

app.post('/api/books', bc.create)

app.put('/api/books/:id', bc.update)

app.delete('/api/books/:id', bc.delete)

app.listen(3000, () => {console.log("listening")}) // must change package.json from index.js to server/index.js


