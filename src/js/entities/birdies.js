var tube = function(index, game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.index = index;
    this.bird = game.add.sprite(x, y, 'bird');
    this.alive = true;

};

tube.prototype.update = function() {

};
