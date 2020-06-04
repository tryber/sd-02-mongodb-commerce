use commerce;
db.produtos.updateMany({}, { $set: { criadoPor: "Kevin" } });
db.produtos.find();
