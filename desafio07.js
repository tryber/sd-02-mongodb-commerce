use commerce;
db.produtos.updateMany(
  {
    $nor: [
      { nome: "McChicken" },
      { ingredientes: { $all: ["ketchup"] } }
    ]
  },
  {
    $push: { "ingredientes": "ketchup" }
  });
