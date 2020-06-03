import Knex from 'knex';

//main function, to execute commands
export async function up(knex: Knex){
   return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name', 150).notNullable();
        table.string('email', 150).notNullable();
        table.string('whatsapp').notNullable();
        table.string('city', 100).notNullable();
        table.string('uf', 2).notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
    });
}

//Rollback function
export async function down(knex: Knex){
   return knex.schema.dropTable('points');
}