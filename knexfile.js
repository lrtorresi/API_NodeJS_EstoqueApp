// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'apiestoque.cq6kmgwubsnt.us-east-1.rds.amazonaws.com',
      user : 'admin',
      password : '1q2w3e$%',
      database : 'apiestoque'
    },
    migrations:{
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
