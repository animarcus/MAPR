const camera = {
    "x": 0,
    "y": 0,
    "viewX": 1000,
    "viewY": 1000
}

// class Camera {
//     constructor(x, y, viewX, viewY = viewX) {
//         this.x = x;
//         this.y = y;
//         this.viewX = viewX;
//         this.viewY = viewY;
//     }
// }

function cameraOffsetX(x) {
    return (camera.x + x)*canvas2D.width/camera.viewX;
}

function cameraOffsetY(y) {
    return (camera.y + y)*canvas2D.width/camera.viewY;
}
