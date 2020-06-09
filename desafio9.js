db.produtos.updateMany({}, { $pull: { ingrediente: "cebola" } });
