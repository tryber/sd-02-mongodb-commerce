use commerce;
db.produtos.updateMany({ tags: ["bovino", "pão"] }, { $inc: { "vendasPorDia.6": 120 } });
db.produtos.find();
