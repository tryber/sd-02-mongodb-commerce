use commerce;
db.produtos.updateMany({ nome: { $eq: 'Cheddar McMelt' } }, { $pop: { ingredientes: 1 } });
