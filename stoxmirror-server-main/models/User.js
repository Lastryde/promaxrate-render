const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  copytrading: {
    type: String,
    
  },
  zip: {
    type: String,
    
  },
  address: {
    type: String,
    
  },
  phone: {
    type: String,
    
  },
  state: {
    type: String,
    
  },
  city: {
    type: String,
    
  },
  mobile: {
    type: String,
    
  },
  trader: {
    type: String,
    
  },
  condition: {
    type: String,
    
  },
  kyc: {
    type: String,
    
  },


  email: {
    type: String,
    required: true,
    unique: true,
  },
  referralCode:{
    type:String,
  },
  referredUsers:{
    type:Array,
  },
  planHistory:{
    type:Array,
  },
  referredBy:{
    type:String,
  },
  plan:{
    type:String,
  },
 
  country: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  amountDeposited: {
    type: String,
  },
  profit: {
    type: String,
  },
  balance: {
    type: String,
  },
  referalBonus: {
    type: String,
  },
  transactions: {
    type: Array,
  },
  accounts: {
    type: Object,
  },
  withdrawals: {
    type: Array,
  },
  verified: {
    type: Boolean,
  },
  isDisabled: {
    type: Boolean,
  },
});

module.exports = mongoose.model("users", UsersSchema);
