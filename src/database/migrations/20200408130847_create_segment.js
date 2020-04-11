
exports.up = function (knex) {
    return knex.schema.createTable('Segment', function (table) {
        table.string('Id').primary();
        table.string('Segment', 150).notNullable();
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('Segment');
};
