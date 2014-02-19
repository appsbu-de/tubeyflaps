TubyFlaps.Preloader = function (game) {
	this.background = null;
};

TubyFlaps.Preloader.prototype = {

	preload: function () {
        this.load.image('tubetop', 'assets/img/pipe-top.png');
        this.load.image('tube', 'assets/img/pipe.png');
        this.load.image('logo', 'assets/img/menu_logo.png');
        this.load.spritesheet('bird', 'assets/img/bird.png', 34, 24, 4);
        this.load.image('ground', 'assets/img/land_w.png');
	},

	create: function () {
	},

	update: function () {
		this.game.state.start('MainMenu');
	}

};
