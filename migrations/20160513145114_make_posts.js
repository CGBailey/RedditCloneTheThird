exports.up = function(knex, Promise) {
return  knex.schema.createTable('posts', table=> {
          table.increments();
          table.string('title').notNullable();
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.string('image_url');
          table.string('description');
          table.integer('date');
          table.integer('votes');
          table.boolean('commentsVis').defaultTo(false);
          table.boolean('commentFormVis').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
