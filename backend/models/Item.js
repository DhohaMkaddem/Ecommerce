const mongoose = require("mongoose");


const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true,
        enum: ["kids", "women", "men", "home", "accessories", "newItem"]
    },
    imageUrl: {
        type:String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

const Item = mongoose.model('items', ItemSchema);

module.exports = Item;

