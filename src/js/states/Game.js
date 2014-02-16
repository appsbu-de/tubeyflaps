
TubyFlaps.Game = function (game) {
    this.game = game;
};

TubyFlaps.Game.prototype = {

	create: function () {
        this.game.stage.backgroundColor = '#dddddd';
        this.tubey = new tube('2', this.game);
        // Game init Code here.
    },

	update: function () {
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.tubey.position(-4);
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.tubey.position(4);
        }
	},

	quitGame: function (pointer) {
        //	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.game.state.start('MainMenu');
	}
};
