db.produtos.find({ nome: { $ne: 'McChicken'}}, {_id: 0, nome: 1});
db.produtos.find({ nome: { $ne: 'McChicken'}}, {_id: 0, nome: 1, ingredientes: 1});
db.produtos.find({ nome: { $in: ['Big Mac', 'Quarteirão com Queijo']}}, {_id: 0, nome: 1, ingredientes: 1});
db.produtos.find({ nome: { $eq: 'Quarteirão com Queijo'}}, {_id: 0, nome: 1, ingredientes: 1});
