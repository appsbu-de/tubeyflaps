
TubyFlaps.MainMenu = function (game) {
	this.music = null;
	this.playButton = null;
    this.game = game;
    this.showScore = false;
};

TubyFlaps.MainMenu.prototype = {
	create: function () {
        this.game.stage.backgroundColor = '#AFD8FA';
	},

	update: function () {
        if(this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.startGame();
        }

	},

	startGame: function (pointer) {
		//this.music.stop();
		this.game.state.start('Game');
	}
};
