TubyFlaps.Game = function (game) {
    this.game = game;
    this.game.score = 0;
    this.game.highscore = 0;
};

TubyFlaps.Game.prototype = {
	create: function () {
        this.game.stage.backgroundColor = '#AFD8FA';
        this.backdrop = this.game.add.tileSprite(0, this.game.world.height-420, this.game.world.width, 480, 'sprites', 'background.png');
        this.grass = this.game.add.tileSprite(0, this.game.world.height-119, this.game.world.width, 71, 'sprites', 'groundGrass.png');

        this.tubes = this.game.add.group();
        this.tubey = new Tube('2', this.game, this.tubes);
        this.planes = [];

        this.planes.push(new Bird('flapy1', this.game));
        this.planes.push(new Bird('flapy2', this.game, this.game.world.width + 75 + this.game.world.width/2));

        this.key = false;
        this.game.score = 0;

        this.text = this.game.add.text(30, 20, "Score: \n0", {
            font: "16px Arial",
            fill: "#000000",
            align: "center"
        });

        this.text.anchor.setTo(0.5, 0.5);
        this.land = this.game.add.tileSprite(0, this.game.world.height-48, this.game.world.width, 48, 'ground');
    },

	update: function () {
        if (!this.key &&
            (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) ||
             this.game.input.pointer1.isDown ||
             this.game.input.mousePointer.isDown)
        ) {

            this.key = true;
            this.tubey.up();
        }

        if (this.game.input.keyboard.downDuration(Phaser.Keyboard.UP, 25) || this.game.input.pointer1.isUp || this.game.input.mousePointer.isUp) {
            this.key = false;
        }

        this.tubey.update();

        for(var i = 0, len = this.planes.length; i < len; i++) {
            this.planes[i].update();
            this.game.physics.arcade.overlap(this.planes[i].getSprite(), this.tubey.getGroup(), this.collisionHandler, null, this);
        }

        this.renderScore();

        if (!this.tubey.isAlive) {
            this.quitGame();
        }

        this.land.tilePosition.x -= 2.5;
        this.backdrop.tilePosition.x -= 0.5;
        this.grass.tilePosition.x -= 1;
    },

    collisionHandler: function() {
        this.quitGame();
    },

	quitGame: function (pointer) {
		this.game.state.start('MainMenu');
	},

    renderScore: function() {
        this.text.setText("Score: \n" + this.game.score);
    },

    render: function() {
        /* this.game.debug.body(this.planes[0].getSprite());
        this.game.debug.body(this.planes[1].getSprite());
        this.tubey.getGroup().forEachAlive(this.renderGroup, this);
        */
    },

    renderGroup: function(member) {
        this.game.debug.body(member);
    }

};
