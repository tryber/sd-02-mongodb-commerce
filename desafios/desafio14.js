use commerce;

db.produtos.updateMany(
  {
    tags: {
      $all: ["pão", "bovino"]
    }
  },
  {
    $set: {
      "vendasPorDia.6": 120
    }
  }
);
