use commerce;
db.produtos.updateMany({}, { $set:{ valorUnitario: NumberDecimal("0.00") } });
db.produtos.find();
