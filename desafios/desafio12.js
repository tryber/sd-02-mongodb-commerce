use commerce;
db.produtos.updateMany(
  {},
  {$push:
    { "vendasPorDia":
      { $each: [0, 0, 0, 0, 0, 0, 0] } 
    } 
  } 
);
