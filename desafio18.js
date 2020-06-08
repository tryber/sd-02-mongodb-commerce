use commerce;
db.produtos.updateMany(
  {
    'valoresNutricionais': {
      $elemMatch: { 'tipo': 'sódio', 'percentual': { $gt: 20, $lt: 40 } }
    }
  },
  {
    $addToSet: {
      'tags': 'contém sódio'
    }
  }
);
