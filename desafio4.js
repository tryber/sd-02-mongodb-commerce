db.produtos.updateMany(
  {
    tags: "bovino"
  },
  {
    $inc: {
      "avaliacao": 5
  } 
});
