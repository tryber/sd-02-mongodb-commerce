db.produtos.updateMany(
  {},
  {
    $pull: {
      "ingredientes": "cebola"
    }
  }
);
