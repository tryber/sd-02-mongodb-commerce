use commerce;
db.produtos.find(
  {
    $text:
    {
      $search: "\"feito com\""
    }
  }
).count();