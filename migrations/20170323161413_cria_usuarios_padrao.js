const lista = [
{
  nomepessoa: "huguinho",
  cpfpessoa: "982536"
},
{
  nomepessoa: "zezinho",
  cpfpessoa: "328749"
},
{
  nomepessoa: "luizinho",
  cpfpessoa:  "340232"
},
{
  nomepessoa: "patinhas",
  cpfpessoa: "0384032"
}
];

exports.up = function(knex, Promise) {
  return knex("pessoa").insert(lista);
};

exports.down = function(knex, Promise) {
  return knex("pessoa").del().whereIn("cpfpessoa",lista.map(e => e.cpfpessoa));
};
