use commerce;
db.produtos.updateMany(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } }
);