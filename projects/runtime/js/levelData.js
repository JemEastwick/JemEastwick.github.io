var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY - 20 },
          { type: "sawblade", x: 900, y: groundY - 25 },
          { type: "enemy", x: 500, y: groundY - 20},
          { type: "enemy", x: 700, y: groundY - 30},
          { type: "reward", x: 2000, y: groundY - 60},
          { type: "marker", x: 3000, y: groundY},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 800, y: groundY },
          { type: "sawblade", x: 400, y: groundY - 30 },
          { type: "sawblade", x: 450, y: groundY - 40 },
          { type: "sawblade", x: 250, y: groundY - 50 },
          { type: "sawblade", x: 600, y: groundY - 25 },
          { type: "sawblade", x: 500, y: groundY - 35 },
          { type: "enemy", x: 600, y: groundY - 20},
          { type: "enemy", x: 700, y: groundY - 30},
          { type: "enemy", x: 800, y: groundY - 20},
          { type: "enemy", x: 300, y: groundY - 40},
          { type: "reward", x: 2000, y: groundY - 60},
          { type: "reward", x: 1000, y: groundY - 30},
          { type: "reward", x: 200, y: groundY - 50},
          { type: "reward", x: 700, y: groundY - 40},
          { type: "marker", x: 3000, y: groundY},
        ],
      },
      {
        name: "Robot Ramp",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 700, y: groundY },
          { type: "sawblade", x: 200, y: groundY - 20 },
          { type: "sawblade", x: 400, y: groundY - 60 },
          { type: "sawblade", x: 250, y: groundY - 50 },
          { type: "sawblade", x: 450, y: groundY - 25 },
          { type: "sawblade", x: 500, y: groundY - 35 },
          { type: "sawblade", x: 250, y: groundY },
          { type: "sawblade", x: 400, y: groundY - 25 },
          { type: "sawblade", x: 800, y: groundY - 35 },
          { type: "sawblade", x: 1000, y: groundY },
          { type: "sawblade", x: 700, y: groundY - 25 },
          { type: "sawblade", x: 400, y: groundY - 35 },
          { type: "enemy", x: 600, y: groundY - 20},
          { type: "enemy", x: 400, y: groundY - 30},
          { type: "enemy", x: 900, y: groundY - 25},
          { type: "enemy", x: 300, y: groundY - 45},
          { type: "enemy", x: 800, y: groundY - 50},
          { type: "enemy", x: 600, y: groundY - 55},
          { type: "reward", x: 1000, y: groundY - 60},
          { type: "reward", x: 2000, y: groundY },
          { type: "reward", x: 400, y: groundY - 30},
          { type: "reward", x: 200, y: groundY - 50},
          { type: "reward", x: 700, y: groundY - 40},
          { type: "marker", x: 3000, y: groundY},
        ],
      },
      {
        name: "Robot Root",
        number: 4,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY },
          { type: "sawblade", x: 200, y: groundY - 20},
          { type: "sawblade", x: 900, y: groundY },
          { type: "sawblade", x: 250, y: groundY - 50 },
          { type: "sawblade", x: 600, y: groundY - 55 },
          { type: "sawblade", x: 500, y: groundY },
          { type: "sawblade", x: 300, y: groundY - 30 },
          { type: "sawblade", x: 400, y: groundY - 25 },
          { type: "sawblade", x: 700, y: groundY },
          { type: "sawblade", x: 550, y: groundY - 35 },
          { type: "sawblade", x: 800, y: groundY - 25 },
          { type: "sawblade", x: 300, y: groundY - 45 },
          { type: "sawblade", x: 650, y: groundY - 50 },
          { type: "sawblade", x: 900, y: groundY - 40 },
          { type: "sawblade", x: 400, y: groundY - 30 },
          { type: "enemy", x: 700, y: groundY - 20},
          { type: "enemy", x: 300, y: groundY - 30},
          { type: "enemy", x: 600, y: groundY },
          { type: "enemy", x: 400, y: groundY - 35},
          { type: "enemy", x: 900, y: groundY - 25},
          { type: "enemy", x: 300, y: groundY - 45},
          { type: "enemy", x: 800, y: groundY - 50},
          { type: "enemy", x: 600, y: groundY - 55},
          { type: "reward", x: 900, y: groundY - 55},
          { type: "reward", x: 1000, y: groundY - 60},
          { type: "reward", x: 2000, y: groundY },
          { type: "reward", x: 400, y: groundY - 30},
          { type: "reward", x: 200, y: groundY - 50},
          { type: "reward", x: 700, y: groundY - 40},
          { type: "marker", x: 3000, y: groundY},
        ],
      },
      {
        name: "Robot Night",
        number: 5,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 300, y: groundY },
          { type: "sawblade", x: 600, y: groundY - 30},
          { type: "sawblade", x: 400, y: groundY - 45},
          { type: "sawblade", x: 700, y: groundY },
          { type: "sawblade", x: 200, y: groundY - 20 },
          { type: "sawblade", x: 400, y: groundY - 60 },
          { type: "sawblade", x: 250, y: groundY - 50 },
          { type: "sawblade", x: 450, y: groundY - 25 },
          { type: "sawblade", x: 500, y: groundY - 35 },
          { type: "sawblade", x: 250, y: groundY },
          { type: "sawblade", x: 400, y: groundY - 25 },
          { type: "sawblade", x: 800, y: groundY - 35 },
          { type: "sawblade", x: 1000, y: groundY },
          { type: "sawblade", x: 700, y: groundY - 25 },
          { type: "sawblade", x: 400, y: groundY - 35 },
          { type: "enemy", x: 800, y: groundY - 20},
          { type: "enemy", x: 200, y: groundY - 30},
          { type: "enemy", x: 600, y: groundY - 20},
          { type: "enemy", x: 400, y: groundY },
          { type: "enemy", x: 900, y: groundY - 25},
          { type: "enemy", x: 300, y: groundY - 45},
          { type: "enemy", x: 500, y: groundY },
          { type: "enemy", x: 700, y: groundY - 55},
          { type: "reward", x: 1000, y: groundY - 60},
          { type: "reward", x: 900, y: groundY - 55},
          { type: "reward", x: 1000, y: groundY - 45},
          { type: "reward", x: 2000, y: groundY },
          { type: "reward", x: 400, y: groundY - 30},
          { type: "reward", x: 200, y: groundY - 50},
          { type: "reward", x: 700, y: groundY - 40},
          { type: "marker", x: 3000, y: groundY},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
