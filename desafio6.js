use commerce;
db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $set: { valorUnitario: 16.90 },
    $currentDate: { ultimaModificacao: true }
  }
);
db.produtos.find();
