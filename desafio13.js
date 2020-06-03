db.produtos.updateMany(
  {
      "nome": "Big Mac"
  },
  {
    $push: {
      "vendasPorDia": {
          $each: [60],
          $position: 3
      }
    }
  }
);
  