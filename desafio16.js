use commerce;
db.produtos.updateMany(
  {},
  { $push: {
      valoresNutricionais: {
        $each: [], $sort: { percentual: -1 }
      }
    }
  }
);
db.produtos.find();
