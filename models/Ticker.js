const mongoose = require('mongoose');
const { Schema } = mongoose;
const PurchaseSchema = require('./Purchase');

const tickerSchema = new Schema({
    symbol: String,
    purchases: [PurchaseSchema]
});