use commerce;
db.produtos.update(
  { nome: "Big Mac" },
  { $unset: { valorUnitario: "" } }
);
