const BetModel = require('../model/bet.model');
const betModel = new BetModel();

class BetController {
    getBets() {
        return betModel.getBets();
    }

    postBet(bet) {
        return betModel.postBet(bet);
    }
}


module.exports = BetController;