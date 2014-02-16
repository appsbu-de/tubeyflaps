var tube = function (index, game) {
    var bottomTubeBody,
        bottomTubeTop,
        topTubeBody,
        topTubeTop,
        height = 480;

    this.game = game;
    this.x = 200;
    this.y = 0;
    this.index = index;
    this.gap = 100;
    this.heightTop = (height/2) - 40 - 50;
    this.heightBottom = height - this.heightTop - 80 - this.gap;

    bottomTubeBody = game.add.sprite(this.x, this.y + height - (this.heightBottom/2), 'tube');
    bottomTubeTop = game.add.sprite(this.x, this.y + height - this.heightBottom, 'tubetop');
    bottomTubeTop.anchor.setTo(0.5, 0.5);
    bottomTubeBody.anchor.setTo(0.5, 0.5);
    bottomTubeBody.scale.y = (this.y + this.heightBottom)/41;

    topTubeBody = game.add.sprite(this.x, this.y + (this.heightTop/2), 'tube');
    topTubeTop = game.add.sprite(this.x, this.y + this.heightTop, 'tubetop');
    topTubeTop.anchor.setTo(0.5, 0.5);
    topTubeBody.anchor.setTo(0.5, 0.5);

    topTubeBody.scale.y = (this.y + this.heightTop)/41;
    topTubeTop.scale.y *= -1;

    this.tubes = this.game.add.group();
    this.tubes.add(bottomTubeBody);
    this.tubes.add(bottomTubeTop);
    this.tubes.add(topTubeTop);
    this.tubes.add(topTubeBody);
};

tube.prototype.update = function () {

};

tube.prototype.renderTube = function() {

};

tube.prototype.position = function(delta) {
    this.tubes.y += delta;
};

tube.prototype.render = function () {
    this.game.debug.renderText('x: ' + this.tubes.x, 16, 20);
};
