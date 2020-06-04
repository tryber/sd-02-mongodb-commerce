use commerce;
db.produtos.updateMany({tags: "ave"}, { $inc: { avaliacao: 3 } });
db.produtos.find();
