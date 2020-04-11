
exports.up = function (knex) {
    return knex.schema.createTable('User', function (table) {
        table.string('Id').primary();
        table.string('Name', 100).notNullable();
        table.integer('CNPJ', 20).notNullable();
        table.string('NameStore', 150);
        table.integer('Cep', 20);
        table.string('Address', 150);
        table.string('Email', 100).notNullable();
        table.string('Password').notNullable();
        table.string('SegmentStore');
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('User');
};
