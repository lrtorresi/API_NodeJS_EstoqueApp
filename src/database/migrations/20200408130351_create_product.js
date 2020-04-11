
exports.up = function (knex) {
    return knex.schema.createTable('Product', function (table) {
        table.string('Id').primary();
        table.string('Name', 150).notNullable();
        table.date('DateDue').notNullable();
        table.date('AlertDateDue').notNullable();

        table.string('UserId').notNullable();
        table.foreign('UserId').references('Id').inTable('User');

    });
};

exports.down = function (knex) {
    knex.schema.dropTable('Product');
};
