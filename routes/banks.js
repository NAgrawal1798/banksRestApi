const express = require('express');
const router = express.Router();
const Bank = require('../models/banks');

//POST: CREATE A NEW BANK
router.post('/', (req,res) => {
    bank =new Bank({
        ifsc:req.body.ifsc,
        bank_id:req.body.bank_id,
        branch:req.body.branch,
        address:req.body.address,
        city:req.body.city,
        district:req.body.district,
        state:req.body.state,
        bank_name:req.body.bank_name
    });

    bank.save().then(bank => {
        res.send(bank);
    }).catch(error => {
        res.status(500).send("Bank was not created in db");
    })
});

module.exports = router;