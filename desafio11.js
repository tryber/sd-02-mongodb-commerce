db.produtos.updateOne({ nome: "Cheddar McMelt" }, { $pop: { ingrediente: 1 } });
