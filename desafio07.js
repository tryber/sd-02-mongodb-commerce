use commerce;
db.produtos.updateOne(
  { nome: { $ne: "McChicken" } },
  {
    $addToSet: { ingredientes: "ketchup" }
  }
);