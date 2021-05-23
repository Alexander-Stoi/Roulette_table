const router = require('express').Router();
const { response } = require('express');

const BetController = require('../Controller/bet.controller');
const betController = new BetController();

router.get('/', async (req, res) => {
    betController.getBets().then((response) => {
        res.status(200).json(response);
    })
})

router.post('/', async (req, res) => {
    const bet = req.body;
    betController.postBet(bet).then((response) => {
        res.status(200).json(response);
    })
})

module.exports = router;