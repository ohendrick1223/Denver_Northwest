'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('neighborhoods', table => {
    table.increments();
    table.text('name').notNullable();
    table.text('description').notNullable();
    table.text('photo_url').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('neighborhoods');
};
