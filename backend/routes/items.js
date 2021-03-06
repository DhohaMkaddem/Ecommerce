const express = require("express");
const auth = require('../middleware/auth')
const router = express.Router();

const Item = require("../models/Item");

// add an item
router.post("/item", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    const payload = {
      id: item._id,
      name: item.name,
      imageUrl: item.imageUrl,
      price: item.price,
      categorie: item.categorie,
    };
    res.json({ payload });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// get all items (get an array of items)
router.get("/", async (req, res) => {
    try {
        const items = await Item.find()
        res.send(items)
    } catch (error) {
        res.status(500).send(error.message)
    }

});
// get item by categorie
router.get("/:categorie", async (req, res) => {
    try {
        const items = await Item.find({categorie: req.params.categorie})
        res.send(items)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// get item by id
router.get("/:id",auth, async (req,res) => {
    try {
        const item = await Item.findById({_id: req.params.id})
        res.send(item)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
// delete an item 
router.delete("/:id",auth, async (req,res) => {
   try {
       await Item.findByIdAndRemove({_id:req.params.id });
       res.send('item deleted');

   } catch (error) {
       error.status(500).send(error.message)
   } 
})
module.exports = router;
