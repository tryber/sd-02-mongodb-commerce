use commerce;
db.produtos.updateOne(
  { 'nome': 'Big Mac' },
  {
    $currentDate: { 'ultimaModificacao': true },
    $set: {
      'valorUnitario': 16.90,
    }
  }
);
