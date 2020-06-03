db.produtos.updateMany(
  {
    "tags":  { 
      $all: ["bovino", "pão"]
    }
  },
  {
    $push: {
      "vendasPorDia": {
          $each: [120],
          $position: 6
      }
    }
  }
);
