const textService = require('../text-service');

class GameModel {
    game(num) {
        return new Promise((resolve, reject) => {
            const winnings = [];
            const dbData = textService.readDataFromDb('db.json');
            const parsedDbData = JSON.parse(dbData);
            const numToInt = parseInt(num);

            parsedDbData.bets.forEach(bet => {
                if (bet.status === 'active') {

                    const dbBetType = bet.betType;

                    if ((num === 'first' || num === 'second' || num === 'third') && dbBetType === num) {
                        const winAmount = parseInt(bet.amount) * 2;
                        const win = {
                            id: bet.id,
                            amountWon: parseFloat(winAmount)

                        }
                        // bet.status = 'inactive';
                        // console.log(`Prv iF`);
                        winnings.push(win);
                    }

                    if (numToInt !== NaN && parseInt(dbBetType) !== NaN && numToInt <= 36 && numToInt === parseInt(dbBetType)) {
                        const winAmount = parseInt(bet.amount) * 2;
                        const win = {
                            id: bet.id,
                            amountWon: parseFloat(winAmount)
                        }
                        // bet.status = 'inactive';
                        // console.log(`Vtor iF`);
                        winnings.push(win);
                    }
                }

            })
            resolve(winnings);
        })
    }
}

module.exports = GameModel;