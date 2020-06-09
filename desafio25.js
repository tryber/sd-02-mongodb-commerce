db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { valorUnitario: "" }});
