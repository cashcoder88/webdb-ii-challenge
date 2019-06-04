// const knex = require('knex');

// const knexConfig = {
//   client: 'sqlite3',
//   connection: {
//     filename: './data/rolex.db3',
//   },
//   useNullAsDefault: true, // required only for sqlite3
//   // debug: true,
// };

// const db = knex(knexConfig);


const knex = require('knex')


const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.db3'
    },
    useNullAsDefault: true
}

const db = knex(knexConfig);

module.exports = {
    find,
    findById,
    add,
    update,
    delete
}

function find() {
    return db('roles');
}

function findById(id) {
    return db('roles')
        .where( {id} )
        .first();
}

function add(role) {
    return null;
  }
  
  function update(id, changes) {
    return null;
  }
  
  function remove(id) {
    return null;
  }