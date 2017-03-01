'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('landmarks', table => {
    table.increments();
    table.integer('neighborhood_id').references('id').inTable('neighborhoods');
    table.text('name');
    table.text('address');
    table.text('image_url');
    table.text('description');
    table.decimal('longitude');
    table.decimal('latitude');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('landmarks');
};
