const mongoose = require('mongoose');
const { Schema } = mongoose;

const purchaseSchema = new Schema({
    qty: Number,
    date: Date,
    price: Number
});

module.exports = purchaseSchema;