use commerce;
db.produtos.updateMany({ nome: { $eq: 'Quarteirão com Queijo' } }, { $pop: { ingredientes: -1 } });
