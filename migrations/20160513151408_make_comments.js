exports.up = function(knex, Promise) {
return  knex.schema.createTable('comments', table=> {
          table.increments();
          table.string('title').notNullable();
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.integer('post_id').unsigned().references('id').inTable('posts');
          table.string('description');
          table.integer('date');
          table.integer('votes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
