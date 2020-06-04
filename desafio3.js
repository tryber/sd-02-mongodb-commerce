use commerce;
db.produtos.updateMany({}, { $set:{ avaliacao: NumberInt("0") } });
db.produtos.find();
