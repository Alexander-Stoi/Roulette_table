const GameModel = require('../model/game.model');
const gameModel = new GameModel();

class GameController {
    getWinners(num) {
        return gameModel.game(num);
    }
}

module.exports = GameController;