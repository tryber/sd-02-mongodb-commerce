db.produtos.updateMany(
  { "nome": "Big Mac" },
  {
    $currentDate: {
      "ultimaModificacao": true
    },
    $set: {
      "valorUnitario": NumberDecimal("16.90")
    }
  }
);
