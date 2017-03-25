
exports.up = function(knex, Promise) {
  return knex.schema.createTable("pessoa", function(table){
    table.increments("idpessoa");
    table.string("nomepessoa").notNullable();
    table.string("enderecopessoa");
    table.string("telefonepessoa");
    table.string("cpfpessoa").unique().notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("pessoa");
};
