const mongoose = require('mongoose');
const { Schema } = mongoose;
const TickerSchema = require('./Ticker');

const userSchema = new Schema({
    googleId: String,
    tickers: [TickerSchema]
});

mongoose.model('users', userSchema);