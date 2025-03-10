function gameObject() {
  return {
      home: {
          teamName: "Brooklyn Nets",
          colors: "Black, White",
          players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
           "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
           number: 31,
           shoe: 15,
           points: 19,
           rebounds: 2,
           assists: 2,
           steals: 4,
           blocks: 11,
          slamDunks: 1,
        }
      }
    },
    away: {
      teamName:"Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
         "Bismak Bisyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
         "DeSgna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
         "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
         "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      }
    }
  }
}

console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());

function numPointsSored(payerName) {
  let game =gameObject();
  for (let team in game) {
    if (game[team].players[payerName]) {
        return game[team].players[payerName].points;
    }
}
return "Player not found";
}


function shoeSize(playerName) {
  let game = gameObject();
  for (let team in game) {
      if (game[team].players[playerName]) {
          return game[team].players[playerName].shoe;
      }
  }
  return "Player not found";
}

function teamColors(teamName) {
  let game = gameObject();
  for (let team in game) {
      if (game[team].teamName === teamName) {
          return game[team].colors;
      }
  }
  return "Team not found";
}

function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  let game = gameObject();
  for (let team in game) {
      if (game[team].teamName === teamName) {
          return Object.values(game[team].players).map(player => player.number);
      }
  }
  return "Team not found";
}

function playerStats(playerName) {
  let game = gameObject();
  for (let team in game) {
      if (game[team].players[playerName]) {
          return game[team].players[playerName];
      }
  }
  return "Player not found";
}

console.log(numPointsSored("Ben Gordon")); 
console.log(shoeSize("Brook Lopez")); 
console.log(teamColors("Charlotte Hornets"));
console.log(teamNames()); 
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerStats("Mason Plumlee")); 



function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = 0;
  let rebounds = 0;

  for (let team in game) {
      for (let player in game[team].players) {
          let playerData = game[team].players[player];

          if (playerData.shoe > largestShoeSize) {
              largestShoeSize = playerData.shoe;
              rebounds = playerData.rebounds;
          }
      }
  }

  return rebounds;
}

console.log(bigShoeRebounds());


function mostPointsScored() {
  let game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let team in game) {
      for (let player in game[team].players) {
          let points = game[team].players[player].points;
          if (points > maxPoints) {
              maxPoints = points;
              topPlayer = player;
          }
      }
  }

  return topPlayer;
}

function winningTeam() {
  let game = gameObject();
  let teamScores = {};

  for (let team in game) {
      let totalPoints = 0;

      for (let player in game[team].players) {
          totalPoints += game[team].players[player].points;
      }

      teamScores[game[team].teamName] = totalPoints;
  }

  return teamScores["Brooklyn Nets"] > teamScores["Charlotte Hornets"]
      ? "Brooklyn Nets"
      : "Charlotte Hornets";
}

function playerWithLongestName() {
  let game = gameObject();
  let longestName = "";
  
  for (let team in game) {
      for (let player in game[team].players) {
          if (player.length > longestName.length) {
              longestName = player;
          }
      }
  }

  return longestName;
}

console.log("Player with most points:", mostPointsScored());
console.log("Winning team:", winningTeam());
console.log("Player with longest name:", playerWithLongestName());


function doesLongNameStealATon() {
  let game = gameObject();
  let longestName = "";
  let maxSteals = 0;
  let topStealer = "";

  for (let team in game) {
      for (let player in game[team].players) {
          if (player.length > longestName.length) {
              longestName = player;
          }
      }
  }

  for (let team in game) {
      for (let player in game[team].players) {
          let steals = game[team].players[player].steals;
          if (steals > maxSteals) {
              maxSteals = steals;
              topStealer = player;
          }
      }
  }

  return longestName === topStealer;
}

console.log(doesLongNameStealATon());
