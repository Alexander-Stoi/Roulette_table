const router = require('express').Router();

const bet = require('./Routes/bet.routes');
const game = require('./Routes/game.routes');

router.use('/bets', bet);
router.use('/game', game);


module.exports = router;