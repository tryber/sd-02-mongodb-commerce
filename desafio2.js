db.produtos.updateMany(
  {
    "valorUnitario": {
      $exists: false
    }
  },
  {
    $set: {
      "valorUnitario": NumberDecimal("2.00")
  } 
});
