db.produtos.find({ nome: { $ne: 'McChicken' } }, { _id: 0, nome: 1 });
db.produtos.find({ nome: { $ne: 'McChicken' } }, { _id: 0, nome: 1, ingredientes: 1 });
db.produtos.find({ nome: { $in: ['Big Mac', 'Quarteirão com Queijo'] } }, { _id: 0, nome: 1, ingredientes: 1 });
db.produtos.find({ nome: { $eq: 'Quarteirão com Queijo' } }, { _id: 0, nome: 1, ingredientes: 1 });
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
db.produtos.find({ nome: 'Big Mac' }, { _id: 0, nome: 1, ingredientes: 1, vendasPorDia: 1 });
db.produtos.find({ tags: { $all: ["bovino", "pão"] } }, { _id: 0, nome: 1, tags: 1, vendasPorDia: 1 });
db.produtos.find({ 'valoresNutricionais.$.tipo.': 'sódio' }, { _id: 0, nome: 1, tags: 1 });
db.produtos.find(
  {
    valoresNutricionais:
    {
      $elemMatch: { $and: [{ tipo: "sódio" }, { quantidade: { gte: 40 } }] }
    }
  }, { _id: 0, nome: 1, tags: 1 });

db.produtos.find(
  {
    valoresNutricionais:
    {
      $elemMatch: { tipo: "sódio", quantidade: { $gt: 40 } }
    }
  }, { _id: 0, nome: 1, tags: 1 });