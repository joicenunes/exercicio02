const express = require("express");
const app = express();

const cfg = require("./knexfile");
const knex = require("knex")(
  cfg.development
);

var listapessoas = function() {
  return knex("pessoa").select();
}

app.get("/listar", (req,res) => {
  listapessoas().then((ret) => res.send(ret))
});

var inserepessoa = function(q) {
  return knex("pessoa").insert(q,'idpessoa');
}

app.get("/salvar", (req,res) => {
  inserepessoa(req.query).then((ret) => res.send(ret))
});

app.listen(9090);
