const express = require('express');
const helmet = require('helmet');
const zoos = require('./zoos-model.js')
const bears = require('./bears-model.js')
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

server.get('/api/zoos/:id', (req, res) => {
  zoos.findById(req.params.id)
  .then(animal => {
    if (!animal) {
      res.status(404).json({
        errorMessage: 'animal not found!'
      })
    }
    else {
      res.status(200).json(animal)
    }
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

server.delete('/api/zoos/:id', (req, res) => {
  zoos.remove(req.params.id)
  .then(deleted => {
    if (deleted > 0) {
      res.status(200).json({message: `${deleted} record(s) deleted`})
    } else {
      res.status(404).json({
        message: 'could not find animal with specified id'
      })
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
});


server.put('/api/zoos/:id', (req, res) => {
  const id = req.params.id
  const changes = req.body
  zoos.update(id, changes)
    .then(count => {
      if (count > 0) {
        res.status(200).json({message: `${count} record(s) changed`})
      } else {
        res.status(404).json( {message: 'animal not found'})
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

//BEARS 
//--------------------------------------------
server.get('/api/bears', (req, res) => {
  bears.find()
  .then(bears => {
    res.status(200).json(bears)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

server.get('/api/bears/:id', (req, res) => {
  bears.findById(req.params.id)
  .then(animal => {
    if (!animal) {
      res.status(404).json({
        errorMessage: 'bear not found!'
      })
    }
    else {
      res.status(200).json(animal)
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

server.post('/api/bears', (req, res) => {
  console.log(req.body)
  bears.add(req.body)
  .then(animal => {
    res.status(201).json(animal)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

server.delete('/api/bears/:id', (req, res) => {
  bears.remove(req.params.id)
  .then(deleted => {
    if (deleted > 0) {
      res.status(200).json({message: `${deleted} record(s) deleted`})
    } else {
      res.status(404).json({
        message: 'could not find bear with specified id'
      })
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
});


server.put('/api/bears/:id', (req, res) => {
  const id = req.params.id
  const changes = req.body
  bears.update(id, changes)
    .then(count => {
      if (count > 0) {
        res.status(200).json({message: `${count} record(s) changed`})
      } else {
        res.status(404).json( {message: 'bear not found'})
      }
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
