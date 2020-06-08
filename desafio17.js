use commerce;
db.produtos.updateMany(
  {
    'valoresNutricionais': {
      $elemMatch: { 'tipo': 'sódio', 'percentual': { $gte: 40 } }
    }
  },
  {
    $addToSet: {
      'tags': 'muito sódio'
    }
  }
);
