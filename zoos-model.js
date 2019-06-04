

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
    remove
}

function find() {
    return db('zoos');
}

function findById(id) {
    return db('zoos')
        .where( {id} )
        .first();
}

function add(body) {
    return db('zoos')
    .insert(body, 'id')
}
  
  function update(id, changes) {
    return null;
  }
  
  function remove(id) {
    return db('zoos')
    .where({ id})
    .del()
  }