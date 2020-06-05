use commerce;

db.produtos.updateMany(
  { "valoresNutricionais.percentual": { $gte: 40 } },
  {
    $push: {
      "tags": {
        $each: ["muito sódio"]
      }
    }
  }
);
