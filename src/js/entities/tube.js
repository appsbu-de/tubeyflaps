var Tube = function (index, game, group) {
    this.game = game;
    var bottomTubeBody,
        bottomTubeTop,
        topTubeBody,
        topTubeTop,
        height = this.game.world.height,
        offsetBody = 200;

    this.x = this.game.world.width/5;
    this.y = 0;
    this.index = index;
    this.gap = 100;
    this.heightTop = (height/2) - 40 - (this.gap/2);
    this.heightBottom = height - this.heightTop - 80 - this.gap;
    this.isAlive = true;
    this.tubes = group;

    bottomTubeBody = game.add.sprite(this.x, this.y + height + offsetBody, 'tube');
    this.bottomTubeTop = bottomTubeTop = game.add.sprite(this.x, this.y + height - this.heightBottom, 'tubetop');

    this.game.physics.enable( [ this.bottomTubeTop, bottomTubeTop, bottomTubeBody], Phaser.Physics.ARCADE);

    bottomTubeTop.anchor.setTo(0.5, 0.5);
    bottomTubeBody.anchor.setTo(0.5, 0.5);
    bottomTubeBody.scale.y = 12;

    topTubeBody = game.add.sprite(this.x, this.y - offsetBody, 'tube');
    topTubeTop = game.add.sprite(this.x, this.y + this.heightTop, 'tubetop');

    this.game.physics.enable([topTubeBody, topTubeTop], Phaser.Physics.ARCADE);

    topTubeTop.anchor.setTo(0.5, 0.5);
    topTubeBody.anchor.setTo(0.5, 0.5);

    topTubeBody.scale.y = 12;
    topTubeTop.scale.y *= -1;

    this.tubes.add(bottomTubeBody);
    this.tubes.add(bottomTubeTop);
    this.tubes.add(topTubeTop);
    this.tubes.add(topTubeBody);
    this.tubes.name = index;
    this.tubes.setAll("body.gravity.y", 1250);
};

Tube.prototype.update = function () {
    if (this.bottomTubeTop.y > 400) {
        this.isAlive = false;
    }
};

Tube.prototype.up = function(amount) {
    amount = (typeof amount === 'undefined') ? -300: amount;
    this.tubes.setAll("body.velocity.y", amount);
};

Tube.prototype.getGroup = function() {
    return this.tubes;
};
