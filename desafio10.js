use commerce;

db.produtos.updateMany(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } }
);
