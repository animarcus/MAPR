class Ray {
    constructor(x, y, rotation, length = 200) {
        this.pos = {'x': x,
                    'y': y };
        this.header = { 'x': Math.cos(radians(rotation)),
                        'y': Math.sin(radians(rotation)),
                        'length': length };
    }
    draw(COLOR, lineWidth=1) { // 2D
        line(this.pos.x, this.pos.y, this.pos.x + this.header.x*this.header.length, this.pos.y + this.header.y*this.header.length, COLOR, lineWidth);
    }
    setAngle(angle) { //input is in degrees but handled in radians
        // if (this.rotation < 0) this.rotation += 2* Math.PI;
        // if (this.rotation >= 2 * Math.PI) this.rotation -= 2 * Math.PI;
        this.header.x = Math.cos(radians(angle));
        this.header.y = Math.sin(radians(angle));
    }
}
