const { json } = require('express');
const textService = require('../text-service');
const { v4: uuidv4 } = require('uuid');

class Bet {
    constructor(id, amount, betType, status) {
        this.id = id;
        this.amount = amount;
        this.betType = betType;
        this.status = status;
    }
}

class BetModel {

    getBets() {
        return new Promise((resolve, reject) => {
            const dbData = textService.readDataFromDb('db.json');
            const parsedDbData = JSON.parse(dbData);
            const dbBets = parsedDbData.bets;
            resolve(dbBets);

        });

    }

    postBet(bet) {
        return new Promise((resolve, reject) => {

            bet.status = 'active';

            const newBet = new Bet(
                bet.id = uuidv4(),
                parseFloat(bet.amount),
                bet.betType,
                bet.status
            )

            const dbData = textService.readDataFromDb('db.json');
            const parsedDbData = JSON.parse(dbData);
            parsedDbData.bets.push(newBet);

            const stringifiedDbData = JSON.stringify(parsedDbData);

            textService.writeDataToDb('db.json', stringifiedDbData);

            resolve({ message: 'Bet successfully added!' });

        })
    }

}

module.exports = BetModel;