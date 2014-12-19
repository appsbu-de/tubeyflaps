var Bird = function(index, game, x) {
    this.game = game;
    this.planeNames = ['planeYellow', 'planeRed', 'planeGreen', 'planeBlue'];
    var planeFrameData = this.getPlaneFrames(),
        frameNames = planeFrameData.frameNames;

    this.currentAnimation = this.planeNames[planeFrameData.usePlane];

    x = x || this.game.world.width + 50;

    this.rangeYMin = this.game.world.height / 6;
    this.rangeYMax = this.game.world.height - 100;

    this.x = x;
    this.y = this.game.rnd.integerInRange(this.rangeYMin, this.rangeYMax);
    this.alive = true;
    this.bird = this.game.add.sprite(this.x, this.y, 'sprites', frameNames[0]);
    this.bird.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.bird, Phaser.Physics.ARCADE);

    this.bird.name = index;
    this.bird.scale.x *= -0.4;
    this.bird.scale.y *= 0.4;

    this.bird.animations.add(this.currentAnimation, frameNames);
    this.bird.animations.play(this.currentAnimation, 80, true);
    this.bird.body.velocity.x = -175;
    this.scored = false;
};

Bird.prototype.update = function() {
    if(!this.scored && this.bird.x <= 100) {
        this.scored = true;
        this.game.score += 1;
    }

    if (this.bird.x <= -50) {
        var planeFrameData = this.getPlaneFrames(),
            frameNames = planeFrameData.frameNames;

        this.bird.frameName = frameNames[0];

        // add new animation if not exists
        if (this.bird.animations.getAnimation(this.planeNames[planeFrameData.usePlane]) === null) {
            this.bird.animations.stop(this.currentAnimation);
            this.currentAnimation = this.planeNames[planeFrameData.usePlane];
            this.bird.animations.add(this.currentAnimation , frameNames);
        }
        else {
            this.bird.animations.stop(this.currentAnimation);
            this.currentAnimation = this.planeNames[planeFrameData.usePlane];
        }

        this.bird.animations.play(this.currentAnimation , 80, true);

        this.bird.x = this.game.world.width + 50;
        this.bird.y = this.game.rnd.integerInRange(this.rangeYMin, this.rangeYMax);
        this.scored = false;
    }
};

Bird.prototype.getSprite = function() {
    return this.bird;
};

Bird.prototype.getPlaneFrames = function() {
    var usePlane = this.game.rnd.integerInRange(0, 3),
        frameNames = Phaser.Animation.generateFrameNames(this.planeNames[usePlane], 1, 3, '.png', 1);

    return {
        usePlane: usePlane,
        frameNames: frameNames
    };
};
