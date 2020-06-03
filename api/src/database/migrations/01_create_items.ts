import Knex from 'knex';

//main function, to execute commands
export async function up(knex: Knex){
   return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title', 150).notNullable();
    });
}

//Rollback function
export async function down(knex: Knex){
   return knex.schema.dropTable('items');
}