TubyFlaps.Game = function (game) {
    this.game = game;
    this.game.score = 0;
};

TubyFlaps.Game.prototype = {

	create: function () {
        this.game.stage.backgroundColor = '#AFD8FA';

        this.tubes = this.game.add.group();
        this.tubey = new Tube('2', this.game, this.tubes);
        this.birds = [];
        this.birds.push(new Bird('flapy1', this.game));
        this.birds.push(new Bird('flapy2', this.game, this.game.world.width + 75 + this.game.world.width/2));
        this.key = false;
        this.game.score = 0;
    },

	update: function () {

        if (!this.key && this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.key = true;
            this.tubey.up();
        }

        if (this.game.input.keyboard.justReleased(Phaser.Keyboard.UP, 100)) {
            this.key = false;
        }

        this.tubey.update();

        for(var i = 0, len = this.birds.length; i < len; i++) {
            this.birds[i].update();
            this.game.physics.overlap(this.birds[i].getSprite(), this.tubey.getGroup(), this.collisionHandler, null, this);
        }

        if (!this.tubey.isAlive) {
            this.quitGame();
        }

	},

    collisionHandler: function() {
        console.log("collison");
        this.quitGame();
    },

	quitGame: function (pointer) {
        //	Stop music, delete sprites, purge caches, free resources, all that good stuff.
        console.log(this.game.score);
		//	Then let's go back to the main menu.
		this.game.state.start('MainMenu');
	}
};
