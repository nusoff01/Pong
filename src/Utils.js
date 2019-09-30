const KFACTOR = 50;

export function createPlayers (playerNames, matches) {

    let playerDict = {};
    playerNames.forEach((playerName) => {
        playerDict[playerName] = {
            matches: [],
            ELO: 1500,
            wins: 0,
            losses: 0
        }
    });


    let ELOCalc = (aELO, bELO, didAWin, k) => {
        let adjustedRatingA = Math.pow(10, aELO/400);
        let adjustedRatingB = Math.pow(10, bELO/400);

        let expectedScoreA =  adjustedRatingA / (adjustedRatingA + adjustedRatingB);
        let expectedScoreB =  adjustedRatingB / (adjustedRatingA + adjustedRatingB);

        let outcomeA = didAWin ? 1 : 0;
        let outcomeB = didAWin ? 0 : 1;

        return {
            aELO: aELO + k * (outcomeA - expectedScoreA),
            bELO: bELO + k * (outcomeB - expectedScoreB)
        }
    }

    let transFormMatchForPlater = (match, playerName) => {
        return {
            date: match.Date,
            won: match.Winner === playerName,
            location: match.Location,
            opponent: match.Winner === playerName ? match.Loser : match.Winner
        }
    }

    if (matches) {
        matches.forEach((match) => {
            if (match.Winner in playerDict && match.Loser in playerDict) {
                playerDict[match.Winner].wins += 1;
                playerDict[match.Winner].matches.push(transFormMatchForPlater(match, match.Winner));
                playerDict[match.Loser].losses += 1;
                playerDict[match.Loser].matches.push(transFormMatchForPlater(match, match.Loser));


                let adjustedELOS = ELOCalc(playerDict[match.Winner].ELO, playerDict[match.Loser].ELO, true, KFACTOR);
                playerDict[match.Winner].ELO = adjustedELOS.aELO;
                playerDict[match.Loser].ELO = adjustedELOS.bELO;

            }
        });
    }

    return Object.keys(playerDict).map((playerName) => {
        return {...playerDict[playerName], name: playerName};
    }).sort((a, b) => {
        if (a.ELO < b.ELO) {
            return 1;
        }
        if (a.ELO > b.ELO) {
            return -1;
        }
        return 0;
    });
}

