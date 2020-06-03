use commerce;

db.produtos.find({ nome: { $regex: /Mc/i } }).count();

// outra forma
db.produtos.find({ nome: /Mc/i }).count();
