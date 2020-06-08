use commerce;

db.produtos.updateMany(
  {
    tags: {
      $all: ["pão", "bovino"]
    }
  },
  {
    $inc: {
      "vendasPorDia.6": 120
    }
  }
);
