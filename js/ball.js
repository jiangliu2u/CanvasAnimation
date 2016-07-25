function Ball(radius, color) {
    if (radius === undefined) {
        radius = 40;
    }
    if (color === undefined) {
        color = '#00ff00';
    }
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.gravity = 0;
    this.radius = radius;
    this.rotation = 0;
    this.mass = 1;
    this.scaleX = 1;
    this.scaleY = 1;
    this.name = "";
    this.color = utils.parseColor(color);
    this.lineWidth = 1;
    this.lasttime = 0;

}

Ball.prototype.draw = function (context) {
    //drawGrid(context,'white',20,20);
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
}

//得到球体的左上角坐标
Ball.prototype.getBounds = function () {
    return {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.radius * 2,
        height: this.radius * 2
    };

}
Ball.prototype.getFps = function (context) {

    var now = (+new Date),
        fps = 1000 / (now - this.lasttime);
    this.lasttime = now;
    context.fillStyle = 'red';
    context.font = '30px Arial';
    context.fillText(fps.toFixed() + 'fps', 20, 50);
}
