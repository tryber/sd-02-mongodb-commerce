db.produtos.updateMany(
  {
    "nome": { $ne: "McChicken" }
  },
  {
    $push: {
      "ingredientes": "ketchup"
    }
  }
);
