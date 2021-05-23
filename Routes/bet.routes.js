const router = require('express').Router();
const { response } = require('express');
const joi = require('joi');

const BetController = require('../Controller/bet.controller');
const betController = new BetController();

router.get('/', async (req, res) => {
    betController.getBets().then((response) => {
        res.status(200).json(response);
    })
})

router.post('/', async (req, res) => {
    const bet = req.body;
    const b = bet.betType;

    const schema = joi.object(
        {
            amount: joi.number().required(),
            betType: joi.string().min(1).required()
        }
    )

    const validation = schema.validate(bet);

    if (validation?.error) {
        return res.status(400).send({ message: validation.error.details[0].message });
    }


    // validate bet type Bet Type can be exact number, 1-18, 19-36, 1st 12, 2nd 12 or 3rd 12
    const betToNumber = Number(bet.betType)

    if (!isNaN(betToNumber)) {

        if (betToNumber < 1 || betToNumber > 36) {
            return res.status(400).send({ message: "Number should be between 1 and 36" });
        }
    } else {

        if (b !== "1-18" && b !== "19-36" && b !== "1st-12" && b !== "2nd-12" && b !== "3rd-12") {

            return res.status(400).send({ message: "Invalid bet type" })
        }

    }

    betController.postBet(bet).then((response) => {
        res.status(200).json(response);
    })
})


module.exports = router;