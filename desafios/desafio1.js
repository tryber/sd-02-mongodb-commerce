use commerce;

db.produtos.updateMany(
  {},
  {
    $set: { criadoPor: "Richard" }
  }
);
