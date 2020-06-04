use commerce;
db.produtos.updateOne(
  { "nome": { $eq: "Big Mac" } },
  { $set: { "vendasPorDia.3": 60 } }
);
