db.produtos.updateMany({ tags: { $in: ["bovino", "pão"] } }, { $inc: { "vendasPorDias.6": 120 } });
