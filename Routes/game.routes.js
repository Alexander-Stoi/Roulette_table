const router = require('express').Router();
const { response } = require('express');

const GameController = require('../Controller/game.controller');
const gameController = new GameController();


router.post('/', (req, res) => {

    const winningNum = req.body.num;

    gameController.getWinners(winningNum).then((response) => {
        res.status(200).json(response);
    })

})


module.exports = router;

