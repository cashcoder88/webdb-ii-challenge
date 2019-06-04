const express = require('express');
const helmet = require('helmet');
const db = require('./zoos-model.js')
const server = express();

server.use(express.json());
server.use(helmet());



// endpoints here

server.get('/api/zoos', (req, res) => {
  db.find()
  .then(roles => {
    res.status(200).json(roles)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});


//------------------------------------------------
const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
