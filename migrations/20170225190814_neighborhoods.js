'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('neighborhoods', table => {
    table.increments();
    table.text('name');
    table.text('description');
    table.text('photo_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('neighborhoods');
};
