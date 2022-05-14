let animRot = 0;
let animStep = .3;
let animDist = 200;
const rules = {
    "nothing": () => {
        document.getElementById("currentRule").innerText = "Nothing"
    },
    "weirdCorridor": () => {
        document.getElementById("currentRule").innerText = "Weird corridor"
        set2Dctx()
        polygon([cameraOffsetX(40), cameraOffsetY(25),
                    cameraOffsetX(40), cameraOffsetY(50),
                    cameraOffsetX(110), cameraOffsetY(50),
                    cameraOffsetX(110), cameraOffsetY(25)], "rgba(255, 255, 255, .5)")
        polygon([cameraOffsetX(-160), cameraOffsetY(-200),
                    cameraOffsetX(-160), cameraOffsetY(-270),
                    cameraOffsetX(-135), cameraOffsetY(-270),
                    cameraOffsetX(-135), cameraOffsetY(-200)], "rgba(255, 255, 255, .5)")
        polygon([cameraOffsetX(-160), cameraOffsetY(200),
                    cameraOffsetX(-160), cameraOffsetY(270),
                    cameraOffsetX(-135), cameraOffsetY(270),
                    cameraOffsetX(-135), cameraOffsetY(200)], "rgba(255, 0, 255, .5)")
        set3Dctx();
        if (player.pos.x > -160 && player.pos.x < -135 &&
            player.pos.y > 200 && player.pos.y < 270) {
                const xDiff = Math.abs(player.pos.x + 40);
                const yDiff = 270 - player.pos.y;
                player.pos.x = 250 - yDiff;
                player.pos.y = -70 + xDiff;
                player.setAngle(degrees(player.rotation) - 90)
        }
        if (player.pos.x > 40 && player.pos.x < 110 &&
            player.pos.y > 25 && player.pos.y < 50) {
            const yDiff = Math.abs(player.pos.y - 70);
            const xDiff = player.pos.x - 40;
            player.pos.x = -180 + yDiff;
            player.pos.y = -270 + xDiff;
            player.setAngle(degrees(player.rotation) + 90)
        }
    },
    "rotatingScene": () => {
        document.getElementById("currentRule").innerText = "Rotating the player around the middle"
        animStep = 1
        if (keysPressed[" "]) animStep = .3;
        if (animRot >= 0) animRot += animStep;

        player.pos.x = Math.cos(radians(-animRot)) * animDist;
        player.pos.y = Math.sin(radians(-animRot)) * animDist;
        player.setAngle(-animRot + 180);

        if (animRot >= 360) animRot = 0;
    },
    "infiniteCorridor": () => {
        document.getElementById("currentRule").innerText = "Infinite corridor";
        set2Dctx()
        polygon([cameraOffsetX(-155), cameraOffsetY(-40),
                    cameraOffsetX(-135), cameraOffsetY(-40),
                    cameraOffsetX(-135), cameraOffsetY(-110),
                    cameraOffsetX(-155), cameraOffsetY(-110)], "rgba(255, 255, 255, .5)")
        polygon([cameraOffsetX(155), cameraOffsetY(-40),
                    cameraOffsetX(135), cameraOffsetY(-40),
                    cameraOffsetX(135), cameraOffsetY(-110),
                    cameraOffsetX(155), cameraOffsetY(-110)], "rgba(255, 255, 255, .5)")
        polygon([cameraOffsetX(155), cameraOffsetY(180),
                    cameraOffsetX(135), cameraOffsetY(180),
                    cameraOffsetX(135), cameraOffsetY(250),
                    cameraOffsetX(155), cameraOffsetY(250)], "rgba(255, 255, 255, .5)")
        polygon([cameraOffsetX(-155), cameraOffsetY(180),
                    cameraOffsetX(-135), cameraOffsetY(180),
                    cameraOffsetX(-135), cameraOffsetY(250),
                    cameraOffsetX(-155), cameraOffsetY(250)], "rgba(255, 255, 255, .5)")
        set3Dctx();
        
        if (player.pos.x > -155 && player.pos.x < -135 &&
            player.pos.y > -110 && player.pos.y < -40) {
                if ((player.rotation < Math.PI/2 && player.rotation > -Math.PI/2) ||
                    (player.rotation < Math.PI/2 && player.rotation > -Math.PI*3/4)) {
                        const xDiff = -40 - player.pos.x;
                        const yDiff = -40 - player.pos.y;
                        player.pos.x = 40 + xDiff;
                        player.pos.y = -250 + yDiff;
                        player.setAngle(degrees(player.rotation) + 180)
                    }
            }
        if (player.pos.x > 135 && player.pos.x < 155 &&
            player.pos.y > -110 && player.pos.y < -40) {
                if ((player.rotation < Math.PI/2 && player.rotation > -Math.PI/2) ||
                    (player.rotation < Math.PI/2 && player.rotation > -Math.PI*3/4)) {
                        const xDiff = 250 - player.pos.x;
                        const yDiff = -40 - player.pos.y;
                        player.pos.x = 40 + xDiff;
                        player.pos.y = 40 + yDiff;
                        player.setAngle(degrees(player.rotation) + 180)
                    }
        }
        if (player.pos.x > 135 && player.pos.x < 155 &&
            player.pos.y > 180 && player.pos.y < 250) {
                if ((player.rotation < Math.PI/2 && player.rotation > -Math.PI/2) ||
                    (player.rotation < Math.PI/2 && player.rotation > -Math.PI*3/4)) {
                        const xDiff = 250 - player.pos.x;
                        const yDiff = 250 - player.pos.y;
                        player.pos.x = -250 + xDiff;
                        player.pos.y = 40 + yDiff;
                        player.setAngle(degrees(player.rotation) + 180)
                    }
        }
        if (player.pos.x > -155 && player.pos.x < -135 &&
            player.pos.y > 180 && player.pos.y < 250) {
                if ((player.rotation < Math.PI/2 && player.rotation > -Math.PI/2) ||
                    (player.rotation < Math.PI/2 && player.rotation > -Math.PI*3/4)) {
                        const xDiff = -40 - player.pos.x
                        const yDiff = 250 - player.pos.y;
                        player.pos.x = -250 + xDiff;
                        player.pos.y = -250 + yDiff;
                        player.setAngle(degrees(player.rotation) + 180)
                    }
        }
    }
}
