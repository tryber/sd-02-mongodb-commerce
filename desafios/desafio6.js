use commerce;
db.produtos.updateOne(
  { _id: ObjectId("5ed7f90665840cac30e6c201") },
  { 
    $set:
      { "valorUnitario": 16.90 },
      $currentDate:
        { "ultimaModificacao": true }
  }
);
