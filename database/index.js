const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '87654321',
        database: 'library' 
    }
});

module.exports = knex;