
const isWinner = (betType, num) => {
    const parsedBetType = Number(betType);

    if (!isNaN(parsedBetType)) {
        if (parsedBetType === num) {
            return true;
        }
    }

    switch (betType) {
        case "1-18":
            if (num <= 18) {
                return true;
            } else {
                return false;
            };

        case "19-36":
            if (num >= 19) {
                return true;
            } else {
                return false;
            };

        case "1st-12":
            if (num <= 12) {
                return true;
            } else {
                return false;
            };
        case "2nd-12":
            if (num > 12 && num <= 24) {
                return true;
            } else {
                return false;
            };

        case "3rd-12":
            if (num > 24 && num <= 36) {
                return true;
            } else {
                return false;
            };
        default:
            return false;
    }

}

const winnerCheck = {
    winner: isWinner
};

module.exports = winnerCheck;


