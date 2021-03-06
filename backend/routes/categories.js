const express = require('express')

const router = express.Router();

const Category = require('../models/Category');

router.post("/categorie" , async (req, res) => {
    try {
        const categorie = new Category(req.body);
        
    } catch (error) {
        res.status(500).send(error.message)
    }
})