use commerce;

db.produtos.updateMany(
  { nome: { $not: /McChicken/i } },
  {
    $addToSet: { ingredientes: "ketchup" }
  }
);
