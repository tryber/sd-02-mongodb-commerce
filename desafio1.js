use commerce;
db.produtos.updateMany(
  {},
  {
    $set: { 'criadoPor': 'Julio Cézar' }
  }
);
