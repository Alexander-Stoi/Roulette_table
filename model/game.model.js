const textService = require('../text-service');
const helpers = require('../Helpers/helpers.winner');
const { json } = require('express');

class GameModel {
    game(num) {
        return new Promise((resolve, reject) => {
            const winnings = [];
            const dbData = textService.readDataFromDb('db.json');
            const parsedDbData = JSON.parse(dbData);
            const numToInt = parseInt(num);

            parsedDbData.bets.forEach(bet => {
                if (bet.status === 'active') {

                    const checkWinner = helpers.winner(bet.betType, numToInt)
                    if (checkWinner) {
                        const winAmount = parseInt(bet.amount) * 2;
                        const win = {
                            id: bet.id,
                            betType: bet.betType,
                            amountWon: parseFloat(winAmount)
                        }
                        winnings.push(win);
                    }
                    // set the status to completed
                    bet.status = 'completed';
                }
            })
            console.log(parsedDbData.bets);
            textService.writeDataToDb('db.json', JSON.stringify(parsedDbData))
            resolve(winnings);
        })
    }
}

module.exports = GameModel;