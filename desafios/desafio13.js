use commerce;
db.produtos.updateOne(
  { "nome": { $eq: "Big Mac" } },
  { $inc: { "vendasPorDia.3": 60 } }
);
