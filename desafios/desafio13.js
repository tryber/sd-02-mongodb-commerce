use commerce;

db.produtos.updateOne(
  {
    nome: "Big Mac"
  },
  {
    $set: { "vendasPorDia.3": 60 }
  }
);
