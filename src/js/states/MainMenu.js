
TubyFlaps.MainMenu = function (game) {
    this.game = game;
};

TubyFlaps.MainMenu.prototype = {
	create: function () {

        this.game.highscore = (this.game.score > this.game.highscore) ? this.game.score : this.game.highscore;

        this.backdrop = this.game.add.tileSprite(0, this.game.world.height-420, this.game.world.width, 480, 'sprites', 'background.png');
        this.grass = this.game.add.tileSprite(0, this.game.world.height-119, this.game.world.width, 71, 'sprites', 'groundGrass.png');

        this.tubes = this.game.add.group();
        this.tubey = new Tube('2', this.game, this.tubes);

        var text = "Pres UP to play!\n\nHighscore: " + this.game.highscore;
        this.game.stage.backgroundColor = '#AFD8FA';
        this.text = game.add.text(this.game.world.width/2, this.game.world.height/2 + 15, text, {
            font: "28px Arial",
            fill: "#000000",
            align: "center"
        });

        this.keylocked = true;
        this.text.anchor.setTo(0.5, 0.5);

        var logo = this.game.add.sprite(this.game.world.width/2, 75, 'logo');
        logo.scale.y = 0.75;
        logo.scale.x = 0.75;
        logo.anchor.setTo(0.5, 0.5);

        this.land = this.game.add.tileSprite(0, this.game.world.height-48, this.game.world.width, 48, 'ground');

	},

	update: function () {
        if(!this.keylocked &&
            (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) ||
             this.game.input.pointer1.isDown ||
             this.game.input.mousePointer.isDown)
        ) {
            this.startGame();
        }

        if (this.game.input.keyboard.downDuration(Phaser.Keyboard.UP, 3000)  || this.game.input.pointer1.isUp || this.game.input.mousePointer.isUp) {
            this.keylocked = false;
        }

        this.tubey.update();

        if (!this.tubey.isAlive) {
            this.tubey.up(-700);
            this.tubey.isAlive = true;
        }

        this.land.tilePosition.x -= 2.5;
        this.backdrop.tilePosition.x -= 0.5;
        this.grass.tilePosition.x -= 1;
	},

	startGame: function (pointer) {
		//this.music.stop();
		this.game.state.start('Game');
	}
};
