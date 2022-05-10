const rules = {
    "Nothing": () => {
        document.getElementById("currentRule").innerText = "Nothing"
    },
    "weirdCorridor": () => {
        document.getElementById("currentRule").innerText = "Weird corridor"
        set2Dctx()
        circle(cameraOffsetX(player.pos.x), cameraOffsetY(player.pos.y), 10, "green")
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
    }
}
