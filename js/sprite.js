function Sprite(color, radius) {
    if (color === undefined) {
        color = 'green';
    }
    
    if (radius === undefined) {
        radius = 40;
    }
    //this.name = name;//名字
    this.color = color;//颜色
    this.radius = radius;//半径
    this.rotation = 0;//旋转
    this.x = 0;//圆心x坐标
    this.y = 0;//圆心y坐标
    //this.vx = 0;//x方向速度大小
    //this.vy = 0;//y方向速度大小
    this.ax = 0;//x方向加速度
    this.ay = 0;//y方向加速度


}
Sprite.prototype.draw = function (context) {
    //context.save();
    //context.translate(this.x, this.y);
   // context.rotate(this.rotation);
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
    //context.restore();
}