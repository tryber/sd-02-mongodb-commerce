use commerce;

db.produtos.updateMany(
  { "tags": { $exists: true } },
  {
    $push: {
      "tags": {
        $each: [
          "combo",
          "tasty"
        ],
        $sort: { "tags": 1 }
      }
    }
  }
);
