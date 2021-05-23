const router = require('express').Router();
const { response } = require('express');

const GameController = require('../Controller/game.controller');
const gameController = new GameController();


router.post('/', (req, res) => {

    const winningNum = req.body.num;
    const num = Number(winningNum);

    if (num !== NaN && num > 0 && num <= 36) {
        gameController.getWinners(num).then((response) => {
            res.status(200).json(response);
        })
    } else {
        res.status(400).send({ message: `Wrong winning input` });
    }
})


module.exports = router;

