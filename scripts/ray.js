class Ray {
    constructor(x, y, rotation, length = 200) {
        this.rotation = radians(rotation); //input is in degrees but handled in radians
        this.pos = {'x': x,
                    'y': y };
        this.header = { 'x': Math.cos(this.rotation),
                        'y': Math.sin(this.rotation),
                        'length': length };
    }
    draw(COLOR) {
        line(this.pos.x, this.pos.y, this.pos.x + this.header.x*this.header.length, this.pos.y + this.header.y*this.header.length, COLOR, 1);
    }
    setAngle(angle) { //input is in degrees but handled in radians
        this.rotation = radians(angle);
        // if (this.rotation < 0) this.rotation += 2* Math.PI;
        // if (this.rotation >= 2 * Math.PI) this.rotation -= 2 * Math.PI;
        this.header.x = Math.cos(this.rotation);
        this.header.y = Math.sin(this.rotation);
    }
}
