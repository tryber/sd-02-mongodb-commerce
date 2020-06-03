use commerce;
db.produtos.updateMany(
  {
    valoresNutricionais:
    {
      $elemMatch: { tipo: "sódio", percentual: { $gt: 40 } }
    }
  },
  {
    $push: { tags: 'muito sodio' }
  }
);
