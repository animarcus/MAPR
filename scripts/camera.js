const camera = {
    "x": 0,
    "y": 0,
    "viewX": 1000,
    "viewY": 1000
}
// Values displayed on html, is modified to appear more logical

// class Camera {
//     constructor(x, y, viewX, viewY = viewX) {
//         this.x = x;
//         this.y = y;
//         this.viewX = viewX;
//         this.viewY = viewY;
//     }
// }

function cameraOffsetX(x) {
    const relative = x - camera.x;
    const a = canvas2D.width / camera.viewX;
    const res = a * relative + canvas2D.width / 2;
    return res;
}

function cameraOffsetY(y) {
    const relative = y - camera.y;
    const a = canvas2D.height / camera.viewY;
    const res = a * relative + canvas2D.height / 2;
    return res;
}

function cameraCanvasOffsetX(x) {
    const a = camera.viewX / canvas2D.width;
    const res = a * x - camera.viewX/2 + camera.x;
    return res;
}

function cameraCanvasOffsetY(y) {
    const a = camera.viewY / canvas2D.height;
    const res = a * y - camera.viewY/2 + camera.y;
    return res;
}
