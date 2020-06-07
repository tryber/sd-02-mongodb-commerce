use commerce;

db.produtos.updateOne(
  {
    nome: "Big Mac"
  },
  {
    $push: {
      vendasPorDia: {
        $each: [60],
        $position: 3
      }
    }
  }
);
