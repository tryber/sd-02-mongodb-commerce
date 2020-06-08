db.produtos.updateOne({ nome: "Quarteirão com Queijo" }, { $pop: { ingrediente: -1 } });
