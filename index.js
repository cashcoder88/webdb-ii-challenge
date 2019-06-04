const express = require('express');
const helmet = require('helmet');
const zoos = require('./zoos-model.js')
const server = express();


// const knex = require('knex')


// const knexConfig = {
//     client: 'sqlite3',
//     connection: {
//         filename: './data/lambda.db3'
//     },
//     useNullAsDefault: true
// }

// const db = knex(knexConfig);

server.use(express.json());
server.use(helmet());


// endpoints here

server.get('/api/zoos', (req, res) => {
  zoos.find()
  .then(zoos => {
    res.status(200).json(zoos)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

server.post('/api/zoos', (req, res) => {
  console.log(req.body)
  zoos.add(req.body)
  .then(animal => {
    res.status(201).json(animal)
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
