Items = new Mongo.Collection('items');

Items.attachSchema(new SimpleSchema({
  store: {
    type: String,
    label: "Store Name",
    max: 200
  },
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  weight: {
    type: Number,
    label: "weight",
    decimal: true,
    min: 0  
  },
  weightType: {
    type: String,
    label: "weightType",
    max: 200
  },
  qty: {
    type: Number,
    label: "qty",
    decimal: true
  },
  qtyType: {
    type: String,
    label: "qtyType",
    max: 200
  },
  price: {
    type: Number,
    label: "price",
    decimal: true
  }
}));
