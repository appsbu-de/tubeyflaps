
TubyFlaps.MainMenu = function (game) {
    this.game = game;
};

TubyFlaps.MainMenu.prototype = {
	create: function () {
        var text = "Pres UP to play!\n\nLast score: " + this.game.score;
        this.game.stage.backgroundColor = '#AFD8FA';
        this.text = game.add.text(this.game.world.width/2, this.game.world.height/2, text, {
            font: "32px Arial",
            fill: "#000000",
            align: "center"
        });
        this.keylocked = true;
        this.text.anchor.setTo(0.5, 0.5);
	},

	update: function () {
        if(!this.keylocked && this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.startGame();
        }

        if (this.game.input.keyboard.justReleased(Phaser.Keyboard.UP, 3000)) {
            this.keylocked = false;
        }

	},

	startGame: function (pointer) {
		//this.music.stop();
		this.game.state.start('Game');
	}
};
