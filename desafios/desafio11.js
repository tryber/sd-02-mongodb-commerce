use commerce;
db.produtos.updateOne(
  { "nome": { $eq: "Cheddar McMelt" } },
  { $pop: { "ingredientes": 1 } }
);
