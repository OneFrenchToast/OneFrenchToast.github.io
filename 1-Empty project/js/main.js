var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.CANVAS, 'gameDiv');


game.state.add('menu', menuState);
game.state.add('game', gameState);
game.state.add('wat', potato);



game.state.start('menu');



