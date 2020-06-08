use commerce;
db.produtos.updateOne(
  { "nome": { $eq: "Quarteirão com Queijo" } },
  { $pop: { "ingredientes": -1 } }
);
