const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String },
  description: { type: String }
});


const contact_us = new Schema({
name:{type:String},
email:{type:String},
message:{type:String}

});


const itemsSchema = new Schema({
  id: { type: String },
  item_name: { type: String },
  item_price: { type: Number },
  item_quantity: { type: Number }
});

  
const Users = mongoose.model("Users", userSchema, 'test');
const contact = mongoose.model("Contact",contact_us,'user_info');
const Item = mongoose.model('Item', itemsSchema);
const mySchemas = { 'Users': Users, 'Contact': contact, 'Item': Item };


module.exports = mySchemas;
