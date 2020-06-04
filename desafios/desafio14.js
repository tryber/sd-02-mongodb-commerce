use commerce;
db.produtos.updateMany(
  { "tags": { $all: ["bovino", "pão"] } },
  { $set: { "vendasPorDia.6": 120 } }
);
