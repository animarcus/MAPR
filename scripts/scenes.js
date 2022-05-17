function rotatingScene() {
    defaults['2DVisible'] = true;
    defaults['currentRule'] = rules.rotatingScene.name;

    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 55;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    walls.push(new Boundary(-50, 0, 50, 0, "#80ff00", 1, 0, 300));
    player.pos.x = 0;
    player.pos.y = -200;
    player.rotation = Math.PI/2;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.setVerticalLook(0);
}

function exampleScene() {
    defaults['2DVisible'] = true;
    defaults['currentRule'] = rules.nothing.name;

    defaults['camera']['x'] = 0;
    defaults['camera']['y'] = -10;
    defaults['camera']['viewX'] = 820;
    defaults['camera']['viewY'] = 820;

    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 55;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    walls.push(new Boundary(-52, 328, -137, 270, "#80ff00", 1, 0, 300));
    walls.push(new Boundary(36, 285, 166, 261, "#80ff00", 1, 0, 300));
    walls.push(new Boundary(96, 91, 130, 22, "#80ff00", 1, 0, 300));
    walls.push(new Boundary(-66, 167, -124, 131, "#80ff00", 1, 0, 300));
    walls.push(new Boundary(-60, 370, 59, 357, "#007bff", 1, 0, 300));
    walls.push(new Boundary(278, 182, 346, 45, "#007bff", 1, 0, 300));
    walls.push(new Boundary(205, -114, 63, -255, "#007bff", 1, 0, 300));
    walls.push(new Boundary(-119, -281, -264, -291, "#007bff", 1, 0, 300));
    walls.push(new Boundary(-364, 197, -340, 309, "#007bff", 1, 0, 300));
    walls.push(new Boundary(-15, 63, -17, 23, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, 20, 2, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, -18, -35, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, -57, -4, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, -62, 35, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, 23, 38, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, -37, 42, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, -48, 17, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, -31, -4, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, -1, -2, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, 24, 17, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-17, 23, 2, 49, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-344, -97, -328, -118, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-328, -118, -307, -124, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-307, -124, -276, -123, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-276, -123, -243, -107, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-243, -107, -231, -94, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-305, 24, -307, -28, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-256, 17, -254, -39, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-50, -157, -35, -139, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-35, -139, -18, -133, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-18, -133, -4, -132, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-4, -132, 9, -132, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(9, -132, 27, -146, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(27, -146, 33, -159, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(33, -159, 36, -172, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-50, -157, -52, -181, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-52, -181, -40, -193, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-52, -181, -20, -199, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-20, -199, -2, -198, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-2, -198, 19, -198, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(19, -198, 36, -172, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(281, 101, 248, 67, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(248, 67, 242, 43, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(242, 43, 251, -2, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(251, -2, 279, -33, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(279, -33, 301, -49, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(301, -49, 313, -60, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(313, -60, 327, -86, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(327, -86, 330, -105, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(330, -105, 320, -119, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(320, -119, 286, -148, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(286, -148, 270, -174, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(270, -174, 270, -228, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(270, -228, 296, -257, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(296, -257, 323, -272, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(323, -272, 344, -291, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(344, -291, 346, -333, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(346, -333, 308, -357, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(308, -357, 249, -352, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(249, -352, 213, -311, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(213, -311, 193, -255, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(193, -255, 151, -263, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(151, -263, 111, -307, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(111, -307, 56, -341, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(-66, -341, 56, -341, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(295, 278, 328, 353, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(328, 353, 376, 277, "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(376, 277, 295, 278, "#ff9d00", 1, 0, 300));
    player.pos.x = -339.3385936427807;
    player.pos.y = 187.98935413201454;
    player.rotation = 5.75958653158132;
    player.setAngle(degrees(5.75958653158132));
    player.setFarSight(1000);
    player.setVerticalLook(0);
}

function colorsScene() {
    defaults['2DVisible'] = true;
    defaults['currentRule'] = rules.nothing.name;

    defaults['camera']['x'] = 0;
    defaults['camera']['y'] = 0;
    defaults['camera']['viewY'] = 940;
    defaults['camera']['viewX'] = 940;

    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 55;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    walls.push(new Boundary(-317, 418, -198, 412, "#ff0000", 1, 0, 350));
    walls.push(new Boundary(-177, 288, -113, 317, "#ff9d00", 1, 0, 350));
    walls.push(new Boundary(-127, 379, -70, 439, "#fff200", 1, 0, 350));
    walls.push(new Boundary(-68, 261, -18, 326, "#51ff00", 1, 0, 350));
    walls.push(new Boundary(-33, 402, 44, 443, "#00ffea", 1, 0, 350));
    walls.push(new Boundary(28, 414, 98, 432, "#00c8ff", 1, 0, 350));
    walls.push(new Boundary(68, 315, 165, 433, "#0011ff", 1, 0, 350));
    walls.push(new Boundary(131, 380, 188, 399, "#ae00ff", 1, 0, 350));
    walls.push(new Boundary(167, 381, 235, 373, "#ff00ee", 1, 0, 350));
    walls.push(new Boundary(351, 231, 358, 150, "#ff00ee", 1, 0, 350));
    walls.push(new Boundary(332, -99, 283, -154, "#ff00ee", 1, 0, 350));
    walls.push(new Boundary(-290, -162, -194, -237, "#00ffe1", 1, 0, 350));
    walls.push(new Boundary(-17, -247, 168, -202, "#80ff00", 1, 0, 350));
    walls.push(new Boundary(-354, 113, -347, -12, "#80ff00", 1, 0, 350));
    walls.push(new Boundary(-161, -170, -68, -249, "#ff00e1", 1, 0, 350));
    walls.push(new Boundary(-328, 334, -411, 244, "#ff00e1", 1, 0, 350));
    walls.push(new Boundary(-278, -307, -106, -346, "#ff0000", 1, 0, 350));
    walls.push(new Boundary(136, -385, 300, -348, "#ff0000", 1, 0, 350));
    walls.push(new Boundary(201, 186, 257, 96, "#ff0000", 1, 0, 350));
    walls.push(new Boundary(364, 11, 402, -116, "#ff0000", 1, 0, 350));
    walls.push(new Boundary(87, -84, 28, -146, "#ff0000", 1, 0, 350));
    walls.push(new Boundary(-280, 195, -289, 106, "#ff0000", 1, 0, 350));
    walls.push(new Boundary(-440, -63, -366, -220, "#ff0000", 1, 0, 350));
    walls.push(new Boundary(101, 214, 161, 192, "#bd8bb5", 1, 0, 300));
    walls.push(new Boundary(369, 293, 406, 250, "#3290d0", 1, 0, 300));
    walls.push(new Boundary(418, 91, 421, 40, "#47d283", 1, 0, 300));
    walls.push(new Boundary(412, -181, 366, -233, "#bef585", 1, 0, 300));
    walls.push(new Boundary(280, -286, 138, -340, "#851a4d", 1, 0, 300));
    walls.push(new Boundary(23, -379, -131, -420, "#77a13f", 1, 0, 300));
    walls.push(new Boundary(-284, -409, -407, -367, "#1a01a3", 1, 0, 300));
    walls.push(new Boundary(-416, -248, -369, -307, "#6b1663", 1, 0, 300));
    walls.push(new Boundary(-297, -333, -247, -357, "#78d29", 1, 0, 300));
    walls.push(new Boundary(-392, -45, -413, 72, "#b046ef", 1, 0, 300));
    walls.push(new Boundary(-415, 167, -403, 220, "#35c0f8", 1, 0, 300));
    walls.push(new Boundary(-396, 362, -358, 439, "#ac243c", 1, 0, 300));
    walls.push(new Boundary(-275, 4, -253, -64, "#1df7f3", 1, 0, 300));
    walls.push(new Boundary(-425, -26, -422, -78, "#2724c5", 1, 0, 300));
    walls.push(new Boundary(-353, -263, -315, -294, "#d12492", 1, 0, 300));
    walls.push(new Boundary(-261, -254, -204, -282, "#5ab731", 1, 0, 300));
    walls.push(new Boundary(-21, -352, 28, -333, "#408148", 1, 0, 300));
    walls.push(new Boundary(-161, -371, -103, -398, "#b58720", 1, 0, 300));
    walls.push(new Boundary(81, -390, 152, -417, "#9ee881", 1, 0, 300));
    walls.push(new Boundary(360, -375, 405, -322, "#9b6051", 1, 0, 300));
    walls.push(new Boundary(414, -251, 435, -202, "#e1e88", 1, 0, 300));
    walls.push(new Boundary(404, -19, 389, 28, "#925bd5", 1, 0, 300));
    walls.push(new Boundary(88, 298, 138, 282, "#48ba0f", 1, 0, 300));
    walls.push(new Boundary(322, 424, 391, 413, "#f7632b", 1, 0, 300));
    walls.push(new Boundary(329, 346, 380, 329, "#f28a97", 1, 0, 300));
    walls.push(new Boundary(243, 276, 250, 240, "#763c48", 1, 0, 300));
    player.pos.x = 0;
    player.pos.y = 0;
    player.rotation = -4.677482395344825;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);

    player.setVerticalLook(0);
}

function allExamples() {
    defaults['2DVisible'] = true;
    defaults['currentRule'] = rules.nothing.name;

    defaults['sliderH0'] = 265;
    defaults['sliderH1'] = 325;
    defaults['sliderFovx'] = 55;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 75;
    defaults['changeAll'] = true;
    loadDefaults();
    walls.push(new Boundary(144, 452, 245, 485, "#ff0000", 1, 0, 300));
    walls.push(new Boundary(-140, 27, -175, 45, "#ff9900", 1, 0, 300));
    walls.push(new Boundary(-140, 27, -91, 104, "#ff9900", 1, 0, 300));
    walls.push(new Boundary(-91, 104, -175, 355, "#80ff00", 1, 0, 661));
    walls.push(new Boundary(-175, 355, -217, 285, "#80ff00", 1, 562, 740));
    walls.push(new Boundary(-217, 285, -274, 257, "#80ff00", 1, 562, 740));
    walls.push(new Boundary(-274, 257, -322, 263, "#80ff00", 1, 562, 740));
    walls.push(new Boundary(-322, 263, -350, 178, "#80ff00", 1, 562, 740));
    walls.push(new Boundary(-350, 178, -342, 104, "#80ff00", 1, 562, 740));
    walls.push(new Boundary(-342, 104, -317, 36, "#80ff00", 1, 562, 740));
    walls.push(new Boundary(-317, 36, -310, -7, "#ffe100", 1, 374, 631));
    walls.push(new Boundary(-310, -7, -276, 12, "#ff9900", 1, 127, 493));
    walls.push(new Boundary(-39, 60, 53, 102, "#ff00e1", 0.53, 0, 315));
    walls.push(new Boundary(53, 102, 106, 50, "#ff00e1", 0.53, 0, 315));
    walls.push(new Boundary(106, 50, 31, 13, "#ff00e1", 0.53, 0, 315));
    walls.push(new Boundary(31, 13, -39, 60, "#ff00e1", 0.53, 0, 315));
    walls.push(new Boundary(45, 75, 11, 60, "#ff00e1", 0.53, 0, 700));
    walls.push(new Boundary(11, 60, 37, 34, "#ff00e1", 0.53, 0, 700));
    walls.push(new Boundary(37, 34, 61, 48, "#ff00e1", 0.53, 0, 700));
    walls.push(new Boundary(61, 48, 45, 75, "#ff00e1", 0.53, 0, 700));
    walls.push(new Boundary(107, 247, 180, 257, "#0059ff", 0.75, 522, 621));
    walls.push(new Boundary(287, 261, 353, 242, "#0059ff", 0.75, 522, 621));
    walls.push(new Boundary(48, 219, 78, 221, "#0059ff", 0.75, 354, 483));
    walls.push(new Boundary(363, 205, 389, 204, "#0059ff", 0.75, 354, 483));
    walls.push(new Boundary(78, 221, 121, 217, "#0059ff", 0.75, 305, 374));
    walls.push(new Boundary(363, 205, 314, 204, "#0059ff", 0.75, 305, 374));
    walls.push(new Boundary(121, 217, 314, 204, "#0059ff", 0.75, 265, 325));
    player.pos.x = -321.61806132741674;
    player.pos.y = -283.6216289689288;
    player.rotation = 1.0297442586766583;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.setVerticalLook(0);

}

function heightShowcase() {
    defaults['2DVisible'] = true;
    defaults['currentRule'] = rules.nothing.name;

    defaults['camera']['x'] = 0;
    defaults['camera']['y'] = -50;
    defaults['camera']['viewY'] = 940;
    defaults['camera']['viewX'] = 940;
    
    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 65;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    walls.push(new Boundary(-135, 317, 41, 317, "#FF0000", 1, 0, 100));
    walls.push(new Boundary(-135, 291, 41, 291, "#FF0000", 1, 25, 150));
    walls.push(new Boundary(-135, 240, 41, 240, "#FF0000", 1, 50, 200));
    walls.push(new Boundary(-135, 188, 41, 188, "#FF0000", 1, 100, 250));
    walls.push(new Boundary(-135, 137, 41, 137, "#FF0000", 1, 150, 300));
    walls.push(new Boundary(-135, 85, 41, 85, "#FF0000", 1, 200, 400));
    walls.push(new Boundary(-135, 34, 41, 34, "#FF0000", 1, 300, 500));
    walls.push(new Boundary(-135, -16, 41, -16, "#FF0000", 1, 350, 600));
    walls.push(new Boundary(-135, -68, 41, -68, "#FF0000", 1, 300, 500));
    walls.push(new Boundary(-135, -119, 41, -119, "#FF0000", 1, 200, 400));
    walls.push(new Boundary(-135, -171, 41, -171, "#FF0000", 1, 150, 300));
    walls.push(new Boundary(-135, -222, 41, -222, "#FF0000", 1, 100, 250));
    walls.push(new Boundary(-135, -274, 41, -274, "#FF0000", 1, 50, 200));
    walls.push(new Boundary(-135, -299, 41, -299, "#FF0000", 1, 25, 150));
    walls.push(new Boundary(-135, -325, 41, -325, "#FF0000", 1, 0, 100));
    walls.push(new Boundary(-135, 266, 41, 266, "#FF0000", 1, 50, 175));
    walls.push(new Boundary(-135, 214, 41, 214, "#FF0000", 1, 75, 225));
    walls.push(new Boundary(-135, 163, 41, 163, "#FF0000", 1, 125, 275));
    walls.push(new Boundary(-135, 111, 41, 111, "#FF0000", 1, 175, 325));
    walls.push(new Boundary(-135, 60, 41, 60, "#FF0000", 1, 225, 425));
    walls.push(new Boundary(-135, 8, 41, 8, "#FF0000", 1, 325, 525));
    walls.push(new Boundary(-135, -42, 41, -42, "#FF0000", 1, 325, 525));
    walls.push(new Boundary(-135, -94, 41, -94, "#FF0000", 1, 225, 425));
    walls.push(new Boundary(-135, -145, 41, -145, "#FF0000", 1, 175, 325));
    walls.push(new Boundary(-135, -197, 41, -197, "#FF0000", 1, 125, 275));
    walls.push(new Boundary(-135, -248, 41, -248, "#FF0000", 1, 75, 225));
    walls.push(new Boundary(-157, 376, -168, 315, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-168, 315, -166, 257, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-166, 257, -179, 186, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-179, 186, -174, 115, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-174, 115, -183, 73, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-183, 73, -177, 23, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-177, 23, -196, -35, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-196, -35, -183, -75, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-183, -75, -195, -124, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-195, -124, -190, -170, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-190, -170, -210, -238, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-210, -238, -210, -343, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-210, -343, -216, -391, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-216, -391, -213, -438, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-213, -438, -178, -467, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-178, -467, -66, -470, "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(-66, -470, 10, -468, "#8ae234", 0.92, 0, 999));
    player.pos.x = 163;
    player.pos.y = 479;
    player.rotation = 4;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(2000);
    player.setVerticalLook(0);

}

function forest() {
    defaults['2DVisible'] = true;
    defaults['currentRule'] = rules.nothing.name;
    defaults['camera']['x'] = 50;
    defaults['camera']['y'] = -20;
    defaults['camera']['viewX'] = 860;
    defaults['camera']['viewY'] = 860;
    
    defaults['sliderH0'] = 376;
    defaults['sliderH1'] = 625;
    defaults['sliderFovx'] = 55;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();

    walls.push(new Boundary(-90	, 134	, -66	, 147, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-66	, 147	, -53	, 125, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-53	, 125	, -76	, 111, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-76	, 111	, -90	, 134, "#80450d", 1, 0, 600));
    walls.push(new Boundary(132	, 121	, 149	, 142, "#80450d", 1, 0, 600));
    walls.push(new Boundary(149	, 142	, 177	, 150, "#80450d", 1, 0, 600));
    walls.push(new Boundary(177	, 150	, 206	, 135, "#80450d", 1, 0, 600));
    walls.push(new Boundary(206	, 135	, 204	, 120, "#80450d", 1, 0, 600));
    walls.push(new Boundary(204	, 120	, 188	, 98, "#80450d", 1, 0, 600));
    walls.push(new Boundary(188	, 98	, 159	, 95, "#80450d", 1, 0, 600));
    walls.push(new Boundary(159	, 95	, 137	, 104, "#80450d", 1, 0, 600));
    walls.push(new Boundary(137	, 104	, 132	, 121, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-142	, -139	, -120	, -120, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-120	, -120	, -84	, -116, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-84	, -116	, -62	, -136, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-62	, -136	, -67	, -166, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-67	, -166	, -88	, -185, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-88	, -185	, -117	, -183, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-117	, -183	, -141	, -162, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-141	, -162	, -142	, -139, "#80450d", 1, 0, 600));
    walls.push(new Boundary(-76	, 99	, -37	, 123, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-37	, 123	, -62	, 166, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-62	, 166	, -104	, 141, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-104	, 141	, -76	, 99, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(124	, 121	, 131	, 99, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(131	, 99	, 157	, 88, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(157	, 88	, 191	, 92, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(191	, 92	, 213	, 115, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(213	, 115	, 214	, 138, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(214	, 138	, 177	, 160, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(177	, 160	, 145	, 149, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(145	, 149	, 124	, 121, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-120	, -113	, -81	, -109, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-81	, -109	, -54	, -134, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-54	, -134	, -59	, -168, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-59	, -168	, -83	, -192, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-83	, -192	, -122	, -190, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-122	, -190	, -148	, -164, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-148	, -164	, -149	, -135, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(-149	, -135	, -120	, -113, "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(152	, -237	, 174	, -203, "#bd6e00", 1, 0, 557));
    walls.push(new Boundary(174	, -203	, 224	, -205, "#bd6e00", 1, 0, 557));
    walls.push(new Boundary(224	, -205	, 241	, -244, "#bd6e00", 1, 0, 557));
    walls.push(new Boundary(241	, -244	, 225	, -272, "#bd6e00", 1, 0, 557));
    walls.push(new Boundary(225	, -272	, 187	, -281, "#bd6e00", 1, 0, 557));
    walls.push(new Boundary(187	, -281	, 158	, -267, "#bd6e00", 1, 0, 557));
    walls.push(new Boundary(158	, -267	, 152	, -237, "#bd6e00", 1, 0, 557));
    walls.push(new Boundary(165	, -192	, 204	, -184, "#0eb930", 1, 297, 670));
    walls.push(new Boundary(204	, -184	, 246	, -200, "#0eb930", 1, 297, 670));
    walls.push(new Boundary(246	, -200	, 258	, -242, "#0eb930", 1, 297, 670));
    walls.push(new Boundary(258	, -242	, 242	, -285, "#0eb930", 1, 297, 670));
    walls.push(new Boundary(242	, -285	, 199	, -302, "#0eb930", 1, 297, 670));
    walls.push(new Boundary(199	, -302	, 160	, -290, "#0eb930", 1, 297, 670));
    walls.push(new Boundary(160	, -290	, 140	, -256, "#0eb930", 1, 297, 670));
    walls.push(new Boundary(140	, -256	, 140	, -225, "#0eb930", 1, 297, 670));
    walls.push(new Boundary(140	, -225	, 165	, -192, "#0eb930", 1, 297, 670));
    walls.push(new Boundary(212	, -180	, 239	, -190, "#0eb930", 1, 376, 625));
    walls.push(new Boundary(249	, -202	, 258	, -232, "#0eb930", 1, 376, 625));
    walls.push(new Boundary(259	, -249	, 248	, -279, "#0eb930", 1, 376, 625));
    walls.push(new Boundary(226	, -293	, 207	, -303, "#0eb930", 1, 376, 625));
    walls.push(new Boundary(181	, -300	, 164	, -295, "#0eb930", 1, 376, 625));
    walls.push(new Boundary(149	, -283	, 137	, -267, "#0eb930", 1, 376, 625));
    walls.push(new Boundary(133	, -247	, 133	, -228, "#0eb930", 1, 376, 625));
    walls.push(new Boundary(139	, -210	, 155	, -192, "#0eb930", 1, 376, 625));
    walls.push(new Boundary(173	, -181	, 186	, -181, "#0eb930", 1, 376, 625));

    player.pos.x = 284;
    player.pos.y = 460;
    player.rotation = -2.0245819323134246;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(2000);
    player.setVerticalLook(0);
}

function mainPic() {
    defaults['2DVisible'] = false;
    defaults['currentRule'] = rules.nothing.name;

    defaults['camera']['x'] = 0;
    defaults['camera']['y'] = 180;
    defaults['camera']['viewY'] = 450;
    defaults['camera']['viewX'] = 450;

    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 65;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    walls.push(new Boundary(-140, 208	, -94	, 184, "#0000ff", 1, 0, 300));
    walls.push(new Boundary(-141, 282	, -82	, 375, "#80ff00", 1, 0, 300));
    walls.push(new Boundary(-47	, 116	, -28	, 100, "#ff00ee", 1, 0, 300));
    walls.push(new Boundary(-30	, 82	, -11	, 80, "#ff9900", 1, 0, 300));
    walls.push(new Boundary(1	, 186	, 70	, 298, "#ff0000", 1, 0, 300));
    walls.push(new Boundary(-11	, 80	, 2	    , 118, "#ff9900", 1, 0, 300));
    walls.push(new Boundary(18	, 156	, 40	, 150, "#ffe100", 1, 0, 300));
    walls.push(new Boundary(35	, 124	, 134	, 141, "#00f6ff", 1, 0, 300));
    player.pos.x = 0;
    player.pos.y = 0;
    player.rotation = 1.5707963267948966;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.setVerticalLook(0);
}

function testScene() {
    defaults['2DVisible'] = true;
    defaults['currentRule'] = rules.nothing.name;

    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 65;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();

    walls.push(new Boundary(-150, 0, 150, 0, "#0000ff", 1, 0, 300));

    player.pos.x = 0;
    player.pos.y = -300;
    player.rotation = 1.5707963267948966;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.vertRotation = 0.0;
    player.setVerticalLook(0);
}

function weirdCorridor() {
    defaults['2DVisible'] = false;
    defaults['currentRule'] = rules.weirdCorridor.name;

    defaults['camera']['x'] = 0;
    defaults['camera']['y'] = 0;
    defaults['camera']['viewX'] = 600;
    defaults['camera']['viewY'] = 600;
    loadDefaults();

    // rectangle
    walls.push(new Boundary(-250, -270, -250, 270));
    walls.push(new Boundary(-40, -270, -40, 270));

    walls.push(new Boundary(-250, 270, -40, 270));
    walls.push(new Boundary(-250, -270, -40, -270));

    walls.push(new Boundary(-180, 200, -110, 200, "#00ff15"));
    walls.push(new Boundary(-180, -200, -110, -200, "#6f00ff"));
    walls.push(new Boundary(-180, -200, -180, 200, "#ffa600"));
    walls.push(new Boundary(-110, -200, -110, 200, "#ff008c"));
    
    // smaller square
    walls.push(new Boundary(250, -70, 250, 140));
    walls.push(new Boundary(40, -70, 40, 140));

    walls.push(new Boundary(250, 140, 40, 140));
    walls.push(new Boundary(250, -70, 40, -70));

    walls.push(new Boundary(180, 70, 110, 70, "#ff008c"));
    walls.push(new Boundary(180, 0, 180, 70, "#00ff15"));
    walls.push(new Boundary(180, 0, 110, 0, "#fff200"));
    walls.push(new Boundary(110, 0, 110, 70, "#6f00ff"));

    player.pos.x = -100;
    player.pos.y = -250;
    player.rotation = Math.PI/2;
    player.setAngle(degrees(player.rotation));
}

function infiniteCorridor() {
    defaults['2DVisible'] = false;
    defaults['currentRule'] = rules.infiniteCorridor.name;

    defaults['camera']['x'] = 0;
    defaults['camera']['y'] = 0;
    defaults['camera']['viewX'] = 600;
    defaults['camera']['viewY'] = 600;
    loadDefaults();
    
        // bottom left
    walls.push(new Boundary(-250, -250, -40, -250 , "#ff0000")); // 0
    walls.push(new Boundary(-40, -250, -40, -40   , "#ffa500")); // 1
    walls.push(new Boundary(-250, -40, -40, -40   , "#ffa500")); // 2
    walls.push(new Boundary(-250, -250, -250, -40 , "#ff0000")); // 3

    walls.push(new Boundary(-180, -180, -110, -180, "#ff0000")); // 4
    walls.push(new Boundary(-110, -180, -110, -110, "#ffa500")); // 5
    walls.push(new Boundary(-110, -110, -180, -110, "#ffa500")); // 6
    walls.push(new Boundary(-180, -110, -180, -180, "#ff0000")); // 7

        // bottom right
    walls.push(new Boundary(40, -250, 250, -250   , "#ffa500")); // 8
    walls.push(new Boundary(250, -250, 250, -40   , "#008000")); // 9
    walls.push(new Boundary(40, -40, 250, -40     , "#008000")); // 10
    walls.push(new Boundary(40, -250, 40, -40     , "#ffa500")); // 11

    walls.push(new Boundary(110, -180, 180, -180  , "#ffa500")); // 12
    walls.push(new Boundary(180, -180, 180, -110  , "#008000")); // 13
    walls.push(new Boundary(180, -110, 110, -110  , "#008000")); // 14
    walls.push(new Boundary(110, -110, 110, -180  , "#ffa500")); // 15
        // top right
    walls.push(new Boundary(40, 40, 250, 40       , "#008000")); // 16
    walls.push(new Boundary(250, 40, 250, 250     , "#0000ff")); // 17
    walls.push(new Boundary(40, 250, 250, 250     , "#0000ff")); // 18
    walls.push(new Boundary(40, 40, 40, 250       , "#008000")); // 19

    walls.push(new Boundary(110, 110, 180, 110    , "#008000")); // 20
    walls.push(new Boundary(180, 110, 180, 180    , "#0000ff")); // 21
    walls.push(new Boundary(180, 180, 110, 180    , "#0000ff")); // 22
    walls.push(new Boundary(110, 180, 110, 110    , "#008000")); // 23
        // top left
    walls.push(new Boundary(-250, 40, -40, 40     , "#0000ff")); // 24
    walls.push(new Boundary(-40, 110, -40, 250, "#ff0000")); // 25
    // walls.push(new Boundary(-40, 180, -40, 250, "#ff0000")); // 25
    walls.push(new Boundary(-250, 250, -40, 250   , "#ff0000")); // 26
    walls.push(new Boundary(-250, 40, -250, 250   , "#0000ff")); // 27

    walls.push(new Boundary(-180, 110, -110, 110  , "#0000ff")); // 28
    walls.push(new Boundary(-110, 110, -110, 180  , "#ff0000")); // 29
    walls.push(new Boundary(-110, 180, -180, 180  , "#ff0000")); // 40
    walls.push(new Boundary(-180, 180, -180, 110  , "#0000ff")); // 31
    
    // walls.push(new Boundary(50, -600, 50, 1200));

    
    player.pos.x = -215;
    player.pos.y = -215;
}




function clearWalls() {
    renderWalls.splice(0, renderWalls.length);
    wallCount = 0;
    walls.splice(0, walls.length);
}

function importWalls(imported) {
    clearWalls();
    defaults['2DVisible'] = imported['2DVisible']
    defaults['currentRule'] = imported['currentRule']
    defaults['camera']['x'] = imported['camera']['x'];
    defaults['camera']['y'] = imported['camera']['y'];
    defaults['camera']['viewY'] = imported['camera']['viewY'];
    defaults['camera']['viewX'] = imported['camera']['viewX'];
    defaults['sliderH0'] = parseInt(imported['sliderH0'])
    defaults['sliderH1'] = parseInt(imported['sliderH1'])
    defaults['sliderFovx'] = parseInt(imported['sliderFovx'])
    defaults['sliderFovy'] = parseInt(imported['sliderFovy'])
    defaults['sliderOpacity'] = parseInt(imported['sliderOpacity'])
    defaults['changeAll'] = imported['changeAll']
    defaults['randomColor'] = imported['randomColor']
    loadDefaults();
    imported["walls"].forEach(w => {
        walls.push(new Boundary(w["posx"],
                                w["posy"],
                                w["dirx"],
                                w["diry"],
                                w["hex"],
                                w["opacity"],
                                w["height0"],
                                w["height1"]
                                ))
    })
    player.pos.x = imported.player.posx;
    player.pos.y = imported.player.posy;
    player.rotation = imported.player.rotation
    player.setAngle(degrees(player.rotation))
    player.setFarSight(imported.player.farSight)
    player.setVerticalLook(imported.player.vertRotation)
}
function exportWalls() {
    tmp = {
        "2DVisible": show2DCanvas,
        "currentRule": currentRule.name,
        "camera": {
            "x": camera.x,
            "y": camera.y,
            "viewX": camera.viewX,
            "viewY": camera.viewY
        },
        "sliderH0": document.getElementById("sliderH0").value,
        "sliderH1": document.getElementById("sliderH1").value,
        "sliderFovx": document.getElementById("sliderFovx").value,
        "sliderFovy": document.getElementById("sliderFovy").value,
        "sliderOpacity": document.getElementById("sliderOpacity").value,
        "changeAll": document.getElementById("changeAll").checked,
        "randomColor": document.getElementById("randomColor").checked,
        "width": canvas2D.width,
        "expansion": expansion,
        "walls": [],
        "player": {
            "posx": player.pos.x,
            "posy": player.pos.y,
            "rotation": player.rotation,
            "farSight": player.farSight,
            "vertRotation": player.vertRotation
        }
    }
    walls.forEach(w => {
        tmp.walls.push({
                        "posx": w.pos.x,
                        "posy": w.pos.y,
                        "dirx": w.pos.x + w.dir.x,
                        "diry": w.pos.y + w.dir.y,
                        "hex": w.hex,
                        "opacity": w.opacity,
                        "height0": w.height0,
                        "height1": w.height1,
                        })
    })
    return tmp;
}

function copyWallsCode() {
    tmp = "defaults['2DVisible'] = '" + show2DCanvas + "';\n" +
        "defaults['currentRule'] = '" + currentRule.name + "';\n" +
        "defaults['camera']['x'] = " + camera.x + ";\n" +
        "defaults['camera']['y'] = " + camera.y + ";\n" +
        "defaults['camera']['viewX'] = " + camera.viewX + ";\n" +
        "defaults['camera']['viewY'] = " + camera.viewY + ";\n" +
        "defaults['camera'] = " + document.getElementById("sliderH0").value + ";\n" +
        "defaults['sliderH0'] = " + document.getElementById("sliderH0").value + ";\n" +
        "defaults['sliderH1'] = " + document.getElementById("sliderH1").value + ";\n" +
        "defaults['sliderFovx'] = " + document.getElementById("sliderFovx").value + ";\n" +
        "defaults['sliderFovy'] = " + document.getElementById("sliderFovy").value + ";\n" +
        "defaults['sliderOpacity'] = " + document.getElementById("sliderOpacity").value + ";\n" +
        "defaults['changeAll'] = " + document.getElementById("changeAll").checked + ";\n" +
        "loadDefaults();\n"
    walls.forEach(w => {
        tmp = tmp + `walls.push(new Boundary(${w.pos.x}\t, ${w.pos.y}\t, ${w.pos.x + w.dir.x}\t, ${w.pos.y + w.dir.y}, "${w.hex}", ${w.opacity}, ${w.height0}, ${w.height1}));\n`
    });
    tmp = tmp + `player.pos.x = ${player.pos.x};\nplayer.pos.y = ${player.pos.y};\nplayer.rotation = ${player.rotation};\nplayer.setAngle(degrees(player.rotation));\nplayer.setFarSight(${player.farSight});\nplayer.setVerticalLook(${player.vertRotation});\n`
    console.log(tmp);
    navigator.clipboard.writeText(tmp)
}


function loadScene(sceneName) {
    clearWalls();
    player.setFarSight(1000);
    switch (sceneName) {
        case "blank":
            currentRule = rules.nothing;
            clearWalls();
            resetPlayer();
            break;
        case "rotatingScene":
            rotatingScene();
            break;
        case "example":
            exampleScene();
            break;
        case "colors":
            colorsScene();
            break;
        case "allExamples":
            allExamples();
            break;
        case "collidingWalls":
            collidingWalls();
            break;
        case "mainPic":
            mainPic();
            break;
        case "heightShowcase":
            heightShowcase();
            break;
        case "forest":
            forest();
            break;
        case "testScene":
            testScene();
            break;
        case "weirdCorridor":
            weirdCorridor();
            break;
        case "infiniteCorridor":
            infiniteCorridor();
            break;
    }
    player.setFOVPos();
    return true;
}

// corridors
// colors
// different sizes 1 ok
// different sizes 2
// performance
// normal room

function resetPlayer() {
    player.rotation = 0;
    player.setAngle(0);
    player.pos.x = camera.x;
    player.pos.y = camera.y;
    player.setVerticalLook(0)
    player.setFarSight(1000)
}
