db.produtos.updateMany(
  {},
  {
    $set: {
      "valoresNutricionais": {
        $sort: { "percentual": -1 }
      }
    }
  }
);
