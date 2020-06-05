use commerce;

db.produtos.updateMany(
  {},  
  {
    $push: {
      "valoresNutricionais": {
        $each: [], 
        $sort: { "valoresNutricionais.percentual": -1 }
      }
    }
  }
);
