class Ray {
    constructor(x, y, rotation, length = 200) {
        this.pos = {'x': x,
                    'y': y };
        this.dir = { 'x': Math.cos(radians(rotation)),
                        'y': Math.sin(radians(rotation)),
                        'length': length };
    }
    draw(COLOR, lineWidth=1) { // 2D
        line(this.pos.x, this.pos.y, this.pos.x + this.dir.x*this.dir.length, this.pos.y + this.dir.y*this.dir.length, COLOR, lineWidth);
    }
    setAngle(angle) { //input is in degrees but handled in radians
        this.dir.x = Math.cos(radians(angle));
        this.dir.y = Math.sin(radians(angle));
    }
}

