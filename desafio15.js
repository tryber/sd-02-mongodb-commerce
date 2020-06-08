> db.produtos.updateMany({}, { $push: { tags: { $each: ["combo", "tasty"] } } }, { $sort: { nome: 1 } } );
