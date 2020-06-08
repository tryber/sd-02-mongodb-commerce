use commerce;
db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio", percentual: { $gte: 40 }
      }
    }
  },
  {
    $push: {
      tags: {
        $each: ["muito sodio"]
      }
    }
  }
);
