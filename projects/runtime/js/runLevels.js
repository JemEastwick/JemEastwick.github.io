var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(
        hitZoneSize,
        damageFromObstacle
      );
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      sawBladeHitZone.addChild(obstacleImage);
    }

    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "#DD7D5D");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX = -1;
      enemy.rotationalVelocity = 1;

      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
        enemy.fadeOut();
      };

      enemy.onProjectileCollision = function () {
        game.increaseScore(80);
        enemy.fadeOut();
      };
    }

    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25);
      var blueCircle = draw.rect(50, 50, "#F9E98B");
      blueCircle.x = -25;
      blueCircle.y = -25;
      reward.addChild(blueCircle);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = -1;
      reward.rotationalVelocity = 1;

      reward.onPlayerCollision = function () {
        game.changeIntegrity(10);
        reward.fadeOut();
      };

      reward.onProjectileCollision = function () {
        game.increaseScore(80);
        reward.fadeOut();
      };
    }

    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 25);
      var end = draw.rect(50, 50, "#C64767");
      end.x = -25;
      end.y = -25;
      marker.addChild(end);
      marker.x = x;
      marker.y = y;
      game.addGameItem(marker);
      marker.velocityX = -1;
      marker.rotationalVelocity = 1;

      marker.onPlayerCollision = function () {
        startLevel();
        marker.fadeOut();
      };

      marker.onProjectileCollision = function () {
        startLevel();
        marker.fadeOut();
      };
    }

    function startLevel() {
      // TODO 13 goes below here
       var level = levelData[currentLevel];
       var levelObjects = level.gameItems;
       for(var i = 0; i < levelObjects.length; i++)
       {
        var eachElement = levelObjects[i];
        //var firstX = eachElement.x;
        //var firstY = eachElement.y;
        if (eachElement.type === "sawblade")
        {
          createSawBlade(eachElement.x, eachElement.y);
        }
        else if (eachElement.type === "enemy")
        {
          createEnemy(eachElement.x, eachElement.y);
        }
        else if (eachElement.type === "reward")
        {
          createReward(eachElement.x, eachElement.y);
        }
        else if (eachElement.type === "marker")
        {
          createMarker(eachElement.x, eachElement.y);
        }
       }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
