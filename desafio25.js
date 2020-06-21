db.produtos.updateMany(
  {
    "nome": "Big Mac"
  },
  {
    $unset: {
      "valorUnitario": 1
  }
});
