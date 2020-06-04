use commerce;
db.produtos.updateMany({tags: "bovino"}, { $inc: { avaliacao: 5 } });
db.produtos.find();
