use commerce;
db.produtos.updateMany(
  { $nor: [ { "nome": "McChicken" } ] },
  { $addToSet: { "ingredientes": "ketchup" } }
);
