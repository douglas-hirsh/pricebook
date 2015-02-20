Items = new Mongo.Collection('items');

Items.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId && doc.owner === userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.owner === userId;
  },
  fetch: ['owner']
});

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
    label: "Weight",
    decimal: true,
    min: 0  
  },
  weightType: {
    type: String,
    label: "Weight Type",
    max: 200
  },
  qty: {
    type: Number,
    label: "Quantity",
    decimal: true
  },
  qtyType: {
    type: String,
    label: "Quantity Type",
    max: 200
  },
  price: {
    type: Number,
    label: "Price",
    decimal: true
  }
}));
