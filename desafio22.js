use commerce;
db.produtos.find(
  {
    $text:
    {
      $search: "frango hamburguer"
    }
  }
).count();