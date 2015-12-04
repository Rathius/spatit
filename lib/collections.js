// Categories collection
Categories = new Mongo.Collection('categories');

// Products collection
Products = new Mongo.Collection('products');

// Product Images Collection
ProductsImages = new FS.Collection("ProductsImages", {
  stores: [new FS.Store.GridFS("ProductsImages")]
});