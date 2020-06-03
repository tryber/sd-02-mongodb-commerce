use commerce;

db.produtos.find({ nome: { $regex: /Mc/i } }).count();

// outra forma
db.produtos.find({ nome: /Mc/i }).count();

// outra forma
db.produtos.count({ nome: { $regex: /Mc/i } });
db.produtos.count({ nome: /Mc/i });
