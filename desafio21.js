db.produtos.createIndex(
  {
    $text: {
      $search: "descricao",
      $language: "portuguese"
    }
  }
);
