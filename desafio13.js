db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDias.3": 60 } });
