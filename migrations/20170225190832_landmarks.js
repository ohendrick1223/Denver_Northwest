'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('landmarks', table => {
    table.increments();
    table.text('name').notNullable();
    table.text('description').notNullable();
    table.text('photo_url_recent').notNullable();
    table.text('photo_url_2').notNullable();
    table.text('address').notNullable();
    table.decimal('longitude').notNullable();
    table.decimal('latitude').notNullable();
    table.text('neighborhood').notNullable();
    // table.integer('neighborhood_id').references('id').inTable('neighborhoods').notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('landmarks');
};
