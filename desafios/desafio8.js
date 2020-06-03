use commerce;

db.produtos.updateMany(
  {
    $or: [
      { nome: "Big Mac" },
      { nome: "Quarteirão com Queijo" }
    ]
  },
  {
    $push: { ingredientes: "bacon" }
  }
);
