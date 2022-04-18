function exampleScene() {
    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 55;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    walls.push(new Boundary(418 * (canvas2D.width / 886), 788 * (canvas2D.width / 886), 333 * (canvas2D.width / 886), 730 * (canvas2D.width / 886), "#80ff00", 1, 0, 300));
    walls.push(new Boundary(506 * (canvas2D.width / 886), 745 * (canvas2D.width / 886), 636 * (canvas2D.width / 886), 721 * (canvas2D.width / 886), "#80ff00", 1, 0, 300));
    walls.push(new Boundary(566 * (canvas2D.width / 886), 551 * (canvas2D.width / 886), 600 * (canvas2D.width / 886), 482 * (canvas2D.width / 886), "#80ff00", 1, 0, 300));
    walls.push(new Boundary(404 * (canvas2D.width / 886), 627 * (canvas2D.width / 886), 346 * (canvas2D.width / 886), 591 * (canvas2D.width / 886), "#80ff00", 1, 0, 300));
    walls.push(new Boundary(410 * (canvas2D.width / 886), 830 * (canvas2D.width / 886), 529 * (canvas2D.width / 886), 817 * (canvas2D.width / 886), "#007bff", 1, 0, 300));
    walls.push(new Boundary(748 * (canvas2D.width / 886), 642 * (canvas2D.width / 886), 816 * (canvas2D.width / 886), 505 * (canvas2D.width / 886), "#007bff", 1, 0, 300));
    walls.push(new Boundary(675 * (canvas2D.width / 886), 346 * (canvas2D.width / 886), 533 * (canvas2D.width / 886), 205 * (canvas2D.width / 886), "#007bff", 1, 0, 300));
    walls.push(new Boundary(351 * (canvas2D.width / 886), 179 * (canvas2D.width / 886), 206 * (canvas2D.width / 886), 169 * (canvas2D.width / 886), "#007bff", 1, 0, 300));
    walls.push(new Boundary(106 * (canvas2D.width / 886), 657 * (canvas2D.width / 886), 130 * (canvas2D.width / 886), 769 * (canvas2D.width / 886), "#007bff", 1, 0, 300));
    walls.push(new Boundary(455 * (canvas2D.width / 886), 523 * (canvas2D.width / 886), 453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 490 * (canvas2D.width / 886), 462 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 452 * (canvas2D.width / 886), 425 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 413 * (canvas2D.width / 886), 456 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 408 * (canvas2D.width / 886), 495 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 493 * (canvas2D.width / 886), 498 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 433 * (canvas2D.width / 886), 502 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 422 * (canvas2D.width / 886), 477 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 439 * (canvas2D.width / 886), 456 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 469 * (canvas2D.width / 886), 458 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 494 * (canvas2D.width / 886), 477 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 472 * (canvas2D.width / 886), 509 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(126 * (canvas2D.width / 886), 363 * (canvas2D.width / 886), 142 * (canvas2D.width / 886), 342 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(142 * (canvas2D.width / 886), 342 * (canvas2D.width / 886), 163 * (canvas2D.width / 886), 336 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(163 * (canvas2D.width / 886), 336 * (canvas2D.width / 886), 194 * (canvas2D.width / 886), 337 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(194 * (canvas2D.width / 886), 337 * (canvas2D.width / 886), 227 * (canvas2D.width / 886), 353 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(227 * (canvas2D.width / 886), 353 * (canvas2D.width / 886), 239 * (canvas2D.width / 886), 366 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(165 * (canvas2D.width / 886), 484 * (canvas2D.width / 886), 163 * (canvas2D.width / 886), 432 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(214 * (canvas2D.width / 886), 477 * (canvas2D.width / 886), 216 * (canvas2D.width / 886), 421 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(420 * (canvas2D.width / 886), 303 * (canvas2D.width / 886), 435 * (canvas2D.width / 886), 321 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(435 * (canvas2D.width / 886), 321 * (canvas2D.width / 886), 452 * (canvas2D.width / 886), 327 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(452 * (canvas2D.width / 886), 327 * (canvas2D.width / 886), 466 * (canvas2D.width / 886), 328 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(466 * (canvas2D.width / 886), 328 * (canvas2D.width / 886), 479 * (canvas2D.width / 886), 328 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(479 * (canvas2D.width / 886), 328 * (canvas2D.width / 886), 497 * (canvas2D.width / 886), 314 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(497 * (canvas2D.width / 886), 314 * (canvas2D.width / 886), 503 * (canvas2D.width / 886), 301 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(503 * (canvas2D.width / 886), 301 * (canvas2D.width / 886), 506 * (canvas2D.width / 886), 288 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(420 * (canvas2D.width / 886), 303 * (canvas2D.width / 886), 418 * (canvas2D.width / 886), 279 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(418 * (canvas2D.width / 886), 279 * (canvas2D.width / 886), 430 * (canvas2D.width / 886), 267 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(418 * (canvas2D.width / 886), 279 * (canvas2D.width / 886), 450 * (canvas2D.width / 886), 261 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(450 * (canvas2D.width / 886), 261 * (canvas2D.width / 886), 468 * (canvas2D.width / 886), 262 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(468 * (canvas2D.width / 886), 262 * (canvas2D.width / 886), 489 * (canvas2D.width / 886), 262 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(489 * (canvas2D.width / 886), 262 * (canvas2D.width / 886), 506 * (canvas2D.width / 886), 288 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(751 * (canvas2D.width / 886), 561 * (canvas2D.width / 886), 718 * (canvas2D.width / 886), 527 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(718 * (canvas2D.width / 886), 527 * (canvas2D.width / 886), 712 * (canvas2D.width / 886), 503 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(712 * (canvas2D.width / 886), 503 * (canvas2D.width / 886), 721 * (canvas2D.width / 886), 458 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(721 * (canvas2D.width / 886), 458 * (canvas2D.width / 886), 749 * (canvas2D.width / 886), 427 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(749 * (canvas2D.width / 886), 427 * (canvas2D.width / 886), 771 * (canvas2D.width / 886), 411 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(771 * (canvas2D.width / 886), 411 * (canvas2D.width / 886), 783 * (canvas2D.width / 886), 400 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(783 * (canvas2D.width / 886), 400 * (canvas2D.width / 886), 797 * (canvas2D.width / 886), 374 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(797 * (canvas2D.width / 886), 374 * (canvas2D.width / 886), 800 * (canvas2D.width / 886), 355 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(800 * (canvas2D.width / 886), 355 * (canvas2D.width / 886), 790 * (canvas2D.width / 886), 341 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(790 * (canvas2D.width / 886), 341 * (canvas2D.width / 886), 756 * (canvas2D.width / 886), 312 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(756 * (canvas2D.width / 886), 312 * (canvas2D.width / 886), 740 * (canvas2D.width / 886), 286 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(740 * (canvas2D.width / 886), 286 * (canvas2D.width / 886), 740 * (canvas2D.width / 886), 232 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(740 * (canvas2D.width / 886), 232 * (canvas2D.width / 886), 766 * (canvas2D.width / 886), 203 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(766 * (canvas2D.width / 886), 203 * (canvas2D.width / 886), 793 * (canvas2D.width / 886), 188 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(793 * (canvas2D.width / 886), 188 * (canvas2D.width / 886), 814 * (canvas2D.width / 886), 169 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(814 * (canvas2D.width / 886), 169 * (canvas2D.width / 886), 816 * (canvas2D.width / 886), 127 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(816 * (canvas2D.width / 886), 127 * (canvas2D.width / 886), 778 * (canvas2D.width / 886), 103 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(778 * (canvas2D.width / 886), 103 * (canvas2D.width / 886), 719 * (canvas2D.width / 886), 108 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(719 * (canvas2D.width / 886), 108 * (canvas2D.width / 886), 683 * (canvas2D.width / 886), 149 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(683 * (canvas2D.width / 886), 149 * (canvas2D.width / 886), 663 * (canvas2D.width / 886), 205 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(663 * (canvas2D.width / 886), 205 * (canvas2D.width / 886), 621 * (canvas2D.width / 886), 197 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(621 * (canvas2D.width / 886), 197 * (canvas2D.width / 886), 581 * (canvas2D.width / 886), 153 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(581 * (canvas2D.width / 886), 153 * (canvas2D.width / 886), 526 * (canvas2D.width / 886), 119 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(404 * (canvas2D.width / 886), 119 * (canvas2D.width / 886), 526 * (canvas2D.width / 886), 119 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(765 * (canvas2D.width / 886), 738 * (canvas2D.width / 886), 798 * (canvas2D.width / 886), 813 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(798 * (canvas2D.width / 886), 813 * (canvas2D.width / 886), 846 * (canvas2D.width / 886), 737 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    walls.push(new Boundary(846 * (canvas2D.width / 886), 737 * (canvas2D.width / 886), 765 * (canvas2D.width / 886), 738 * (canvas2D.width / 886), "#ff9d00", 1, 0, 300));
    player.pos.x = 608.7853773197638 * (canvas2D.width / 886);
    player.pos.y = 699.7654872665915 * (canvas2D.width / 886);
    player.rotation = 4.031710572106929;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.setVerticalLook(0);

}

function colorsScene() {
    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 55;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    walls.push(new Boundary(133 * (canvas2D.width / 886), 848 * (canvas2D.width / 886), (252) * (canvas2D.width / 886), (842) * (canvas2D.width / 886), "#ff0000", 1, 0, 350));
    walls.push(new Boundary(273 * (canvas2D.width / 886), 718 * (canvas2D.width / 886), (337) * (canvas2D.width / 886), (747) * (canvas2D.width / 886), "#ff9d00", 1, 0, 350));
    walls.push(new Boundary(323 * (canvas2D.width / 886), 809 * (canvas2D.width / 886), (380) * (canvas2D.width / 886), (869) * (canvas2D.width / 886), "#fff200", 1, 0, 350));
    walls.push(new Boundary(382 * (canvas2D.width / 886), 691 * (canvas2D.width / 886), (432) * (canvas2D.width / 886), (756) * (canvas2D.width / 886), "#51ff00", 1, 0, 350));
    walls.push(new Boundary(417 * (canvas2D.width / 886), 832 * (canvas2D.width / 886), (494) * (canvas2D.width / 886), (873) * (canvas2D.width / 886), "#00ffea", 1, 0, 350));
    walls.push(new Boundary(478 * (canvas2D.width / 886), 844 * (canvas2D.width / 886), (548) * (canvas2D.width / 886), (862) * (canvas2D.width / 886), "#00c8ff", 1, 0, 350));
    walls.push(new Boundary(518 * (canvas2D.width / 886), 745 * (canvas2D.width / 886), (615) * (canvas2D.width / 886), (863) * (canvas2D.width / 886), "#0011ff", 1, 0, 350));
    walls.push(new Boundary(581 * (canvas2D.width / 886), 810 * (canvas2D.width / 886), (638) * (canvas2D.width / 886), (829) * (canvas2D.width / 886), "#ae00ff", 1, 0, 350));
    walls.push(new Boundary(617 * (canvas2D.width / 886), 811 * (canvas2D.width / 886), (685) * (canvas2D.width / 886), (803) * (canvas2D.width / 886), "#ff00ee", 1, 0, 350));
    walls.push(new Boundary(801 * (canvas2D.width / 886), 661 * (canvas2D.width / 886), (808) * (canvas2D.width / 886), (580) * (canvas2D.width / 886), "#ff00ee", 1, 0, 350));
    walls.push(new Boundary(782 * (canvas2D.width / 886), 331 * (canvas2D.width / 886), (733) * (canvas2D.width / 886), (276) * (canvas2D.width / 886), "#ff00ee", 1, 0, 350));
    walls.push(new Boundary(160 * (canvas2D.width / 886), 268 * (canvas2D.width / 886), (256) * (canvas2D.width / 886), (193) * (canvas2D.width / 886), "#00ffe1", 1, 0, 350));
    walls.push(new Boundary(433 * (canvas2D.width / 886), 183 * (canvas2D.width / 886), (618) * (canvas2D.width / 886), (228) * (canvas2D.width / 886), "#80ff00", 1, 0, 350));
    walls.push(new Boundary(96 * (canvas2D.width / 886), 543 * (canvas2D.width / 886), (103) * (canvas2D.width / 886), (418) * (canvas2D.width / 886), "#80ff00", 1, 0, 350));
    walls.push(new Boundary(289 * (canvas2D.width / 886), 260 * (canvas2D.width / 886), (382) * (canvas2D.width / 886), (181) * (canvas2D.width / 886), "#ff00e1", 1, 0, 350));
    walls.push(new Boundary(122 * (canvas2D.width / 886), 764 * (canvas2D.width / 886), (39) * (canvas2D.width / 886), (674) * (canvas2D.width / 886), "#ff00e1", 1, 0, 350));
    walls.push(new Boundary(172 * (canvas2D.width / 886), 123 * (canvas2D.width / 886), (344) * (canvas2D.width / 886), (84) * (canvas2D.width / 886), "#ff0000", 1, 0, 350));
    walls.push(new Boundary(586 * (canvas2D.width / 886), 45 * (canvas2D.width / 886), (750) * (canvas2D.width / 886), (82) * (canvas2D.width / 886), "#ff0000", 1, 0, 350));
    walls.push(new Boundary(651 * (canvas2D.width / 886), 616 * (canvas2D.width / 886), (707) * (canvas2D.width / 886), (526) * (canvas2D.width / 886), "#ff0000", 1, 0, 350));
    walls.push(new Boundary(814 * (canvas2D.width / 886), 441 * (canvas2D.width / 886), (852) * (canvas2D.width / 886), (314) * (canvas2D.width / 886), "#ff0000", 1, 0, 350));
    walls.push(new Boundary(537 * (canvas2D.width / 886), 346 * (canvas2D.width / 886), (478) * (canvas2D.width / 886), (284) * (canvas2D.width / 886), "#ff0000", 1, 0, 350));
    walls.push(new Boundary(170 * (canvas2D.width / 886), 625 * (canvas2D.width / 886), (161) * (canvas2D.width / 886), (536) * (canvas2D.width / 886), "#ff0000", 1, 0, 350));
    walls.push(new Boundary(10 * (canvas2D.width / 886), 367 * (canvas2D.width / 886), (84) * (canvas2D.width / 886), (210) * (canvas2D.width / 886), "#ff0000", 1, 0, 350));
    walls.push(new Boundary(551 * (canvas2D.width / 886), 644 * (canvas2D.width / 886), (611) * (canvas2D.width / 886), (622) * (canvas2D.width / 886), "#bd8bb5", 1, 0, 300));
    walls.push(new Boundary(819 * (canvas2D.width / 886), 723 * (canvas2D.width / 886), (856) * (canvas2D.width / 886), (680) * (canvas2D.width / 886), "#3290d0", 1, 0, 300));
    walls.push(new Boundary(868 * (canvas2D.width / 886), 521 * (canvas2D.width / 886), (871) * (canvas2D.width / 886), (470) * (canvas2D.width / 886), "#47d283", 1, 0, 300));
    walls.push(new Boundary(862 * (canvas2D.width / 886), 249 * (canvas2D.width / 886), (816) * (canvas2D.width / 886), (197) * (canvas2D.width / 886), "#bef585", 1, 0, 300));
    walls.push(new Boundary(730 * (canvas2D.width / 886), 144 * (canvas2D.width / 886), (588) * (canvas2D.width / 886), (90) * (canvas2D.width / 886), "#851a4d", 1, 0, 300));
    walls.push(new Boundary(473 * (canvas2D.width / 886), 51 * (canvas2D.width / 886), (319) * (canvas2D.width / 886), (10) * (canvas2D.width / 886), "#77a13f", 1, 0, 300));
    walls.push(new Boundary(166 * (canvas2D.width / 886), 21 * (canvas2D.width / 886), (43) * (canvas2D.width / 886), (63) * (canvas2D.width / 886), "#1a01a3", 1, 0, 300));
    walls.push(new Boundary(34 * (canvas2D.width / 886), 182 * (canvas2D.width / 886), (81) * (canvas2D.width / 886), (123) * (canvas2D.width / 886), "#6b1663", 1, 0, 300));
    walls.push(new Boundary(153 * (canvas2D.width / 886), 97 * (canvas2D.width / 886), (203) * (canvas2D.width / 886), (73) * (canvas2D.width / 886), "#78d29", 1, 0, 300));
    walls.push(new Boundary(58 * (canvas2D.width / 886), 385 * (canvas2D.width / 886), (37) * (canvas2D.width / 886), (502) * (canvas2D.width / 886), "#b046ef", 1, 0, 300));
    walls.push(new Boundary(35 * (canvas2D.width / 886), 597 * (canvas2D.width / 886), (47) * (canvas2D.width / 886), (650) * (canvas2D.width / 886), "#35c0f8", 1, 0, 300));
    walls.push(new Boundary(54 * (canvas2D.width / 886), 792 * (canvas2D.width / 886), (92) * (canvas2D.width / 886), (869) * (canvas2D.width / 886), "#ac243c", 1, 0, 300));
    walls.push(new Boundary(175 * (canvas2D.width / 886), 434 * (canvas2D.width / 886), (197) * (canvas2D.width / 886), (366) * (canvas2D.width / 886), "#1df7f3", 1, 0, 300));
    walls.push(new Boundary(25 * (canvas2D.width / 886), 404 * (canvas2D.width / 886), (28) * (canvas2D.width / 886), (352) * (canvas2D.width / 886), "#2724c5", 1, 0, 300));
    walls.push(new Boundary(97 * (canvas2D.width / 886), 167 * (canvas2D.width / 886), (135) * (canvas2D.width / 886), (136) * (canvas2D.width / 886), "#d12492", 1, 0, 300));
    walls.push(new Boundary(189 * (canvas2D.width / 886), 176 * (canvas2D.width / 886), (246) * (canvas2D.width / 886), (148) * (canvas2D.width / 886), "#5ab731", 1, 0, 300));
    walls.push(new Boundary(429 * (canvas2D.width / 886), 78 * (canvas2D.width / 886), (478) * (canvas2D.width / 886), (97) * (canvas2D.width / 886), "#408148", 1, 0, 300));
    walls.push(new Boundary(289 * (canvas2D.width / 886), 59 * (canvas2D.width / 886), (347) * (canvas2D.width / 886), (32) * (canvas2D.width / 886), "#b58720", 1, 0, 300));
    walls.push(new Boundary(531 * (canvas2D.width / 886), 40 * (canvas2D.width / 886), (602) * (canvas2D.width / 886), (13) * (canvas2D.width / 886), "#9ee881", 1, 0, 300));
    walls.push(new Boundary(810 * (canvas2D.width / 886), 55 * (canvas2D.width / 886), (855) * (canvas2D.width / 886), (108) * (canvas2D.width / 886), "#9b6051", 1, 0, 300));
    walls.push(new Boundary(864 * (canvas2D.width / 886), 179 * (canvas2D.width / 886), (885) * (canvas2D.width / 886), (228) * (canvas2D.width / 886), "#e1e88", 1, 0, 300));
    walls.push(new Boundary(854 * (canvas2D.width / 886), 411 * (canvas2D.width / 886), (839) * (canvas2D.width / 886), (458) * (canvas2D.width / 886), "#925bd5", 1, 0, 300));
    walls.push(new Boundary(538 * (canvas2D.width / 886), 728 * (canvas2D.width / 886), (588) * (canvas2D.width / 886), (712) * (canvas2D.width / 886), "#48ba0f", 1, 0, 300));
    walls.push(new Boundary(772 * (canvas2D.width / 886), 854 * (canvas2D.width / 886), (841) * (canvas2D.width / 886), (843) * (canvas2D.width / 886), "#f7632b", 1, 0, 300));
    walls.push(new Boundary(779 * (canvas2D.width / 886), 776 * (canvas2D.width / 886), (830) * (canvas2D.width / 886), (759) * (canvas2D.width / 886), "#f28a97", 1, 0, 300));
    walls.push(new Boundary(693 * (canvas2D.width / 886), 706 * (canvas2D.width / 886), (700) * (canvas2D.width / 886), (670) * (canvas2D.width / 886), "#763c48", 1, 0, 300));
    player.pos.x = 358.46248509023616 * (canvas2D.width / 886);
    player.pos.y = 399.9161444502729 * (canvas2D.width / 886);
    player.rotation = -4.677482395344825;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.setVerticalLook(0);
}

function allExamples() {
    defaults['sliderH0'] = 265;
    defaults['sliderH1'] = 325;
    defaults['sliderFovx'] = 55;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 75;
    defaults['changeAll'] = true;
    loadDefaults(); walls.push(new Boundary(144 * (canvas2D.width / 886), 452 * (canvas2D.width / 886), 245 * (canvas2D.width / 886), 485 * (canvas2D.width / 886), "#ff0000", 1, 0, 300));
    walls.push(new Boundary(280 * (canvas2D.width / 886), 467 * (canvas2D.width / 886), 245 * (canvas2D.width / 886), 485 * (canvas2D.width / 886), "#ff9900", 1, 0, 300));
    walls.push(new Boundary(280 * (canvas2D.width / 886), 467 * (canvas2D.width / 886), 329 * (canvas2D.width / 886), 544 * (canvas2D.width / 886), "#ff9900", 1, 0, 300));
    walls.push(new Boundary(329 * (canvas2D.width / 886), 544 * (canvas2D.width / 886), 245 * (canvas2D.width / 886), 795 * (canvas2D.width / 886), "#80ff00", 1, 0, 661));
    walls.push(new Boundary(245 * (canvas2D.width / 886), 795 * (canvas2D.width / 886), 203 * (canvas2D.width / 886), 725 * (canvas2D.width / 886), "#80ff00", 1, 562, 740));
    walls.push(new Boundary(203 * (canvas2D.width / 886), 725 * (canvas2D.width / 886), 146 * (canvas2D.width / 886), 697 * (canvas2D.width / 886), "#80ff00", 1, 562, 740));
    walls.push(new Boundary(146 * (canvas2D.width / 886), 697 * (canvas2D.width / 886), 98 * (canvas2D.width / 886), 703 * (canvas2D.width / 886), "#80ff00", 1, 562, 740));
    walls.push(new Boundary(98 * (canvas2D.width / 886), 703 * (canvas2D.width / 886), 70 * (canvas2D.width / 886), 618 * (canvas2D.width / 886), "#80ff00", 1, 562, 740));
    walls.push(new Boundary(70 * (canvas2D.width / 886), 618 * (canvas2D.width / 886), 78 * (canvas2D.width / 886), 544 * (canvas2D.width / 886), "#80ff00", 1, 562, 740));
    walls.push(new Boundary(78 * (canvas2D.width / 886), 544 * (canvas2D.width / 886), 103 * (canvas2D.width / 886), 476 * (canvas2D.width / 886), "#80ff00", 1, 562, 740));
    walls.push(new Boundary(103 * (canvas2D.width / 886), 476 * (canvas2D.width / 886), 110 * (canvas2D.width / 886), 433 * (canvas2D.width / 886), "#ffe100", 1, 374, 631));
    walls.push(new Boundary(110 * (canvas2D.width / 886), 433 * (canvas2D.width / 886), 144 * (canvas2D.width / 886), 452 * (canvas2D.width / 886), "#ff9900", 1, 127, 493));
    walls.push(new Boundary(381 * (canvas2D.width / 886), 500 * (canvas2D.width / 886), 473 * (canvas2D.width / 886), 542 * (canvas2D.width / 886), "#ff00e1", 0.53, 0, 315));
    walls.push(new Boundary(473 * (canvas2D.width / 886), 542 * (canvas2D.width / 886), 526 * (canvas2D.width / 886), 490 * (canvas2D.width / 886), "#ff00e1", 0.53, 0, 315));
    walls.push(new Boundary(526 * (canvas2D.width / 886), 490 * (canvas2D.width / 886), 451 * (canvas2D.width / 886), 453 * (canvas2D.width / 886), "#ff00e1", 0.53, 0, 315));
    walls.push(new Boundary(451 * (canvas2D.width / 886), 453 * (canvas2D.width / 886), 381 * (canvas2D.width / 886), 500 * (canvas2D.width / 886), "#ff00e1", 0.53, 0, 315));
    walls.push(new Boundary(465 * (canvas2D.width / 886), 515 * (canvas2D.width / 886), 431 * (canvas2D.width / 886), 500 * (canvas2D.width / 886), "#ff00e1", 0.53, 0, 700));
    walls.push(new Boundary(431 * (canvas2D.width / 886), 500 * (canvas2D.width / 886), 457 * (canvas2D.width / 886), 474 * (canvas2D.width / 886), "#ff00e1", 0.53, 0, 700));
    walls.push(new Boundary(457 * (canvas2D.width / 886), 474 * (canvas2D.width / 886), 481 * (canvas2D.width / 886), 488 * (canvas2D.width / 886), "#ff00e1", 0.53, 0, 700));
    walls.push(new Boundary(481 * (canvas2D.width / 886), 488 * (canvas2D.width / 886), 465 * (canvas2D.width / 886), 515 * (canvas2D.width / 886), "#ff00e1", 0.53, 0, 700));
    walls.push(new Boundary(527 * (canvas2D.width / 886), 687 * (canvas2D.width / 886), 600 * (canvas2D.width / 886), 697 * (canvas2D.width / 886), "#0059ff", 0.75, 522, 621));
    walls.push(new Boundary(707 * (canvas2D.width / 886), 701 * (canvas2D.width / 886), 773 * (canvas2D.width / 886), 682 * (canvas2D.width / 886), "#0059ff", 0.75, 522, 621));
    walls.push(new Boundary(468 * (canvas2D.width / 886), 659 * (canvas2D.width / 886), 498 * (canvas2D.width / 886), 661 * (canvas2D.width / 886), "#0059ff", 0.75, 354, 483));
    walls.push(new Boundary(783 * (canvas2D.width / 886), 645 * (canvas2D.width / 886), 809 * (canvas2D.width / 886), 644 * (canvas2D.width / 886), "#0059ff", 0.75, 354, 483));
    walls.push(new Boundary(498 * (canvas2D.width / 886), 661 * (canvas2D.width / 886), 541 * (canvas2D.width / 886), 657 * (canvas2D.width / 886), "#0059ff", 0.75, 305, 374));
    walls.push(new Boundary(783 * (canvas2D.width / 886), 645 * (canvas2D.width / 886), 734 * (canvas2D.width / 886), 644 * (canvas2D.width / 886), "#0059ff", 0.75, 305, 374));
    walls.push(new Boundary(541 * (canvas2D.width / 886), 657 * (canvas2D.width / 886), 734 * (canvas2D.width / 886), 644 * (canvas2D.width / 886), "#0059ff", 0.75, 265, 325));
    player.pos.x = 98.38193867258327 * (canvas2D.width / 886);
    player.pos.y = 156.37837103107117 * (canvas2D.width / 886);
    player.rotation = 1.0297442586766583;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.setVerticalLook(0);


}

function heightShowcase() {
    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 65;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    player.pos.x = 635.4775787199657 * (canvas2D.width / 861);
    player.pos.y = 932.6479144721142 * (canvas2D.width / 861);
    player.rotation = 4.066617157146819;
    player.setAngle(degrees(4.066617157146819));
    player.setFarSight(2000);
    player.setVerticalLook(0.13962634015954636);

    walls.push(new Boundary(canvas2D.width / 2.5, 775 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 775 * (canvas2D.width / 861), "#FF0000", 1, 0, 100));
    walls.push(new Boundary(canvas2D.width / 2.5, 750 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 750 * (canvas2D.width / 861), "#FF0000", 1, 25, 150));
    walls.push(new Boundary(canvas2D.width / 2.5, 700 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 700 * (canvas2D.width / 861), "#FF0000", 1, 50, 200));
    walls.push(new Boundary(canvas2D.width / 2.5, 650 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 650 * (canvas2D.width / 861), "#FF0000", 1, 100, 250));
    walls.push(new Boundary(canvas2D.width / 2.5, 600 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 600 * (canvas2D.width / 861), "#FF0000", 1, 150, 300));
    walls.push(new Boundary(canvas2D.width / 2.5, 550 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 550 * (canvas2D.width / 861), "#FF0000", 1, 200, 400));
    walls.push(new Boundary(canvas2D.width / 2.5, 500 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 500 * (canvas2D.width / 861), "#FF0000", 1, 300, 500));
    walls.push(new Boundary(canvas2D.width / 2.5, 450 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 450 * (canvas2D.width / 861), "#FF0000", 1, 350, 600));
    walls.push(new Boundary(canvas2D.width / 2.5, 400 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 400 * (canvas2D.width / 861), "#FF0000", 1, 300, 500));
    walls.push(new Boundary(canvas2D.width / 2.5, 350 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 350 * (canvas2D.width / 861), "#FF0000", 1, 200, 400));
    walls.push(new Boundary(canvas2D.width / 2.5, 300 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 300 * (canvas2D.width / 861), "#FF0000", 1, 150, 300));
    walls.push(new Boundary(canvas2D.width / 2.5, 250 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 250 * (canvas2D.width / 861), "#FF0000", 1, 100, 250));
    walls.push(new Boundary(canvas2D.width / 2.5, 200 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 200 * (canvas2D.width / 861), "#FF0000", 1, 50, 200));
    walls.push(new Boundary(canvas2D.width / 2.5, 175 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 175 * (canvas2D.width / 861), "#FF0000", 1, 25, 150));
    walls.push(new Boundary(canvas2D.width / 2.5, 150 * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, 150 * (canvas2D.width / 861), "#FF0000", 1, 0, 100));

    walls.push(new Boundary(canvas2D.width / 2.5, (750 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (750 - 25) * (canvas2D.width / 861), "#FF0000", 1, (25 + 25) , (150 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (700 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (700 - 25) * (canvas2D.width / 861), "#FF0000", 1, (50 + 25) , (200 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (650 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (650 - 25) * (canvas2D.width / 861), "#FF0000", 1, (100 + 25), (250 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (600 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (600 - 25) * (canvas2D.width / 861), "#FF0000", 1, (150 + 25), (300 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (550 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (550 - 25) * (canvas2D.width / 861), "#FF0000", 1, (200 + 25), (400 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (500 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (500 - 25) * (canvas2D.width / 861), "#FF0000", 1, (300 + 25), (500 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (450 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (450 - 25) * (canvas2D.width / 861), "#FF0000", 1, (300 + 25), (500 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (400 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (400 - 25) * (canvas2D.width / 861), "#FF0000", 1, (200 + 25), (400 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (350 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (350 - 25) * (canvas2D.width / 861), "#FF0000", 1, (150 + 25), (300 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (300 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (300 - 25) * (canvas2D.width / 861), "#FF0000", 1, (100 + 25), (250 + 25)));
    walls.push(new Boundary(canvas2D.width / 2.5, (250 - 25) * (canvas2D.width / 861), canvas2D.width - canvas2D.width / 2.5, (250 - 25) * (canvas2D.width / 861), "#FF0000", 1, (50 + 25) , (200 + 25)));

    walls.push(new Boundary(323 * (canvas2D.width / 861), 832 * (canvas2D.width / 861), (312) * (canvas2D.width / 861), (773) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(312 * (canvas2D.width / 861), 773 * (canvas2D.width / 861), (314) * (canvas2D.width / 861), (717) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(314 * (canvas2D.width / 861), 717 * (canvas2D.width / 861), (302) * (canvas2D.width / 861), (648) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(302 * (canvas2D.width / 861), 648 * (canvas2D.width / 861), (307) * (canvas2D.width / 861), (579) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(307 * (canvas2D.width / 861), 579 * (canvas2D.width / 861), (298) * (canvas2D.width / 861), (538) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(298 * (canvas2D.width / 861), 538 * (canvas2D.width / 861), (304) * (canvas2D.width / 861), (489) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(304 * (canvas2D.width / 861), 489 * (canvas2D.width / 861), (285) * (canvas2D.width / 861), (432) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(285 * (canvas2D.width / 861), 432 * (canvas2D.width / 861), (298) * (canvas2D.width / 861), (393) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(298 * (canvas2D.width / 861), 393 * (canvas2D.width / 861), (286) * (canvas2D.width / 861), (345) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(286 * (canvas2D.width / 861), 345 * (canvas2D.width / 861), (291) * (canvas2D.width / 861), (301) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(291 * (canvas2D.width / 861), 301 * (canvas2D.width / 861), (272) * (canvas2D.width / 861), (235) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(272 * (canvas2D.width / 861), 235 * (canvas2D.width / 861), (272) * (canvas2D.width / 861), (133) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(272 * (canvas2D.width / 861), 133 * (canvas2D.width / 861), (266) * (canvas2D.width / 861), (86) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(266 * (canvas2D.width / 861), 86 * (canvas2D.width / 861), (269) * (canvas2D.width / 861), (40) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(269 * (canvas2D.width / 861), 40 * (canvas2D.width / 861), (303) * (canvas2D.width / 861), (12) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(303 * (canvas2D.width / 861), 12 * (canvas2D.width / 861), (412) * (canvas2D.width / 861), (9) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(412 * (canvas2D.width / 861), 9 * (canvas2D.width / 861), (486) * (canvas2D.width / 861), (11) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
    walls.push(new Boundary(486 * (canvas2D.width / 861), 11 * (canvas2D.width / 861), (571) * (canvas2D.width / 861), (11) * (canvas2D.width / 861), "#8ae234", 0.92, 0, 999));
}

function roomShow() {
    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 55;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    walls.push(new Boundary(50 * (canvas2D.width / 886), 850 * (canvas2D.width / 886), (50) * (canvas2D.width / 886), (100) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    walls.push(new Boundary(50 * (canvas2D.width / 886), 850 * (canvas2D.width / 886), (800) * (canvas2D.width / 886), (850) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    walls.push(new Boundary(800 * (canvas2D.width / 886), 200 * (canvas2D.width / 886), (800) * (canvas2D.width / 886), (850) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    walls.push(new Boundary(200 * (canvas2D.width / 886), 200 * (canvas2D.width / 886), (800) * (canvas2D.width / 886), (200) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    walls.push(new Boundary(150 * (canvas2D.width / 886), 750 * (canvas2D.width / 886), (150) * (canvas2D.width / 886), (100) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    walls.push(new Boundary(350 * (canvas2D.width / 886), 700 * (canvas2D.width / 886), (350) * (canvas2D.width / 886), (750) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    walls.push(new Boundary(200 * (canvas2D.width / 886), 700 * (canvas2D.width / 886), (350) * (canvas2D.width / 886), (700) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    walls.push(new Boundary(200 * (canvas2D.width / 886), 700 * (canvas2D.width / 886), (200) * (canvas2D.width / 886), (200) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    walls.push(new Boundary(150 * (canvas2D.width / 886), 750 * (canvas2D.width / 886), (350) * (canvas2D.width / 886), (750) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    walls.push(new Boundary(200 * (canvas2D.width / 886), 200 * (canvas2D.width / 886), (150) * (canvas2D.width / 886), (100) * (canvas2D.width / 886), "#8dbfbc", 1, 0, 900));
    player.pos.x = 67.1105733581063 * (canvas2D.width / 886);
    player.pos.y = -82.78833278838782 * (canvas2D.width / 886);
    player.rotation = 1.2740903539558694;
    player.setAngle(degrees(1.2740903539558694));
    player.setFarSight(2000);
    player.setVerticalLook(0);

    walls.push(new Boundary(330 * (canvas2D.width / 886), 594 * (canvas2D.width / 886), (354) * (canvas2D.width / 886), (607) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(354 * (canvas2D.width / 886), 607 * (canvas2D.width / 886), (367) * (canvas2D.width / 886), (585) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(367 * (canvas2D.width / 886), 585 * (canvas2D.width / 886), (344) * (canvas2D.width / 886), (571) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(344 * (canvas2D.width / 886), 571 * (canvas2D.width / 886), (330) * (canvas2D.width / 886), (594) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(552 * (canvas2D.width / 886), 581 * (canvas2D.width / 886), (569) * (canvas2D.width / 886), (602) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(569 * (canvas2D.width / 886), 602 * (canvas2D.width / 886), (597) * (canvas2D.width / 886), (610) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(597 * (canvas2D.width / 886), 610 * (canvas2D.width / 886), (626) * (canvas2D.width / 886), (595) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(626 * (canvas2D.width / 886), 595 * (canvas2D.width / 886), (624) * (canvas2D.width / 886), (580) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(624 * (canvas2D.width / 886), 580 * (canvas2D.width / 886), (608) * (canvas2D.width / 886), (558) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(608 * (canvas2D.width / 886), 558 * (canvas2D.width / 886), (579) * (canvas2D.width / 886), (555) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(579 * (canvas2D.width / 886), 555 * (canvas2D.width / 886), (557) * (canvas2D.width / 886), (564) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(557 * (canvas2D.width / 886), 564 * (canvas2D.width / 886), (552) * (canvas2D.width / 886), (581) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(278 * (canvas2D.width / 886), 321 * (canvas2D.width / 886), (300) * (canvas2D.width / 886), (340) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(300 * (canvas2D.width / 886), 340 * (canvas2D.width / 886), (336) * (canvas2D.width / 886), (344) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(336 * (canvas2D.width / 886), 344 * (canvas2D.width / 886), (358) * (canvas2D.width / 886), (324) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(358 * (canvas2D.width / 886), 324 * (canvas2D.width / 886), (353) * (canvas2D.width / 886), (294) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(353 * (canvas2D.width / 886), 294 * (canvas2D.width / 886), (332) * (canvas2D.width / 886), (275) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(332 * (canvas2D.width / 886), 275 * (canvas2D.width / 886), (303) * (canvas2D.width / 886), (277) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(303 * (canvas2D.width / 886), 277 * (canvas2D.width / 886), (279) * (canvas2D.width / 886), (298) * (canvas2D.width / 886), "#80450d", 1, 0, 600));
    walls.push(new Boundary(279 * (canvas2D.width / 886), 298 * (canvas2D.width / 886), (278) * (canvas2D.width / 886), (321) * (canvas2D.width / 886), "#80450d", 1, 0, 600));

    walls.push(new Boundary(344 * (canvas2D.width / 886), 559 * (canvas2D.width / 886), (383) * (canvas2D.width / 886), (583) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(383 * (canvas2D.width / 886), 583 * (canvas2D.width / 886), (358) * (canvas2D.width / 886), (626) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(358 * (canvas2D.width / 886), 626 * (canvas2D.width / 886), (316) * (canvas2D.width / 886), (601) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(316 * (canvas2D.width / 886), 601 * (canvas2D.width / 886), (344) * (canvas2D.width / 886), (559) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(544 * (canvas2D.width / 886), 581 * (canvas2D.width / 886), (551) * (canvas2D.width / 886), (559) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(551 * (canvas2D.width / 886), 559 * (canvas2D.width / 886), (577) * (canvas2D.width / 886), (548) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(577 * (canvas2D.width / 886), 548 * (canvas2D.width / 886), (611) * (canvas2D.width / 886), (552) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(611 * (canvas2D.width / 886), 552 * (canvas2D.width / 886), (633) * (canvas2D.width / 886), (575) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(633 * (canvas2D.width / 886), 575 * (canvas2D.width / 886), (634) * (canvas2D.width / 886), (598) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(634 * (canvas2D.width / 886), 598 * (canvas2D.width / 886), (597) * (canvas2D.width / 886), (620) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(597 * (canvas2D.width / 886), 620 * (canvas2D.width / 886), (565) * (canvas2D.width / 886), (609) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(565 * (canvas2D.width / 886), 609 * (canvas2D.width / 886), (544) * (canvas2D.width / 886), (581) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(300 * (canvas2D.width / 886), 347 * (canvas2D.width / 886), (339) * (canvas2D.width / 886), (351) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(339 * (canvas2D.width / 886), 351 * (canvas2D.width / 886), (366) * (canvas2D.width / 886), (326) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(366 * (canvas2D.width / 886), 326 * (canvas2D.width / 886), (361) * (canvas2D.width / 886), (292) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(361 * (canvas2D.width / 886), 292 * (canvas2D.width / 886), (337) * (canvas2D.width / 886), (268) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(337 * (canvas2D.width / 886), 268 * (canvas2D.width / 886), (298) * (canvas2D.width / 886), (270) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(298 * (canvas2D.width / 886), 270 * (canvas2D.width / 886), (272) * (canvas2D.width / 886), (296) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(272 * (canvas2D.width / 886), 296 * (canvas2D.width / 886), (271) * (canvas2D.width / 886), (325) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));
    walls.push(new Boundary(271 * (canvas2D.width / 886), 325 * (canvas2D.width / 886), (300) * (canvas2D.width / 886), (347) * (canvas2D.width / 886), "#3ab20c", 1, 250, 600));

    walls.push(new Boundary(757 * (canvas2D.width / 886), 365 * (canvas2D.width / 886), (732) * (canvas2D.width / 886), (314) * (canvas2D.width / 886), "#4440bf", 1, 280, 999));
    walls.push(new Boundary(711 * (canvas2D.width / 886), 271 * (canvas2D.width / 886), (687) * (canvas2D.width / 886), (223) * (canvas2D.width / 886), "#4440bf", 1, 280, 999));
    walls.push(new Boundary(755 * (canvas2D.width / 886), 388 * (canvas2D.width / 886), (671) * (canvas2D.width / 886), (211) * (canvas2D.width / 886), "#4440bf", 1, 29, 128));
}

function mainPic() {
    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 65;
    defaults['sliderFovy'] = 260;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults();
    
    // walls.push(new Boundary(323 * (canvas2D.width / 886), 395 * (canvas2D.width / 886), 369 * (canvas2D.width / 886), 371 * (canvas2D.width / 886), "#0000ff", 1, 0, 300));
    // walls.push(new Boundary(323 * (canvas2D.width / 886), 395 * (canvas2D.width / 886), 369 * (canvas2D.width / 886), 371 * (canvas2D.width / 886), "#0000ff", 1, 0, 300));
    // walls.push(new Boundary(322 * (canvas2D.width / 886), 469 * (canvas2D.width / 886), 381 * (canvas2D.width / 886), 562 * (canvas2D.width / 886), "#80ff00", 1, 0, 300));
    walls.push(new Boundary(416 * (canvas2D.width / 886), 303 * (canvas2D.width / 886), 435 * (canvas2D.width / 886), 287 * (canvas2D.width / 886), "#ff00ee", 1, 0, 300));
    walls.push(new Boundary(433 * (canvas2D.width / 886), 269 * (canvas2D.width / 886), 452 * (canvas2D.width / 886), 267 * (canvas2D.width / 886), "#ff9900", 1, 0, 300));
    walls.push(new Boundary(452 * (canvas2D.width / 886), 267 * (canvas2D.width / 886), 465 * (canvas2D.width / 886), 305 * (canvas2D.width / 886), "#ff9900", 1, 0, 300));
    // walls.push(new Boundary(464 * (canvas2D.width / 886), 373 * (canvas2D.width / 886), 533 * (canvas2D.width / 886), 485 * (canvas2D.width / 886), "#ff0000", 1, 0, 300));
    // walls.push(new Boundary(481 * (canvas2D.width / 886), 343 * (canvas2D.width / 886), 503 * (canvas2D.width / 886), 337 * (canvas2D.width / 886), "#ffe100", 1, 0, 300));
    // walls.push(new Boundary(498 * (canvas2D.width / 886), 311 * (canvas2D.width / 886), 597 * (canvas2D.width / 886), 328 * (canvas2D.width / 886), "#00f6ff", 1, 0, 300));
    player.pos.x = 443 * (canvas2D.width / 886);
    player.pos.y = 17 * (canvas2D.width / 886);
    player.rotation = 1.5707963267948966;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.vertRotation = 0.0;
    // player.setVerticalLook(0);
}

function clearWalls() {
    renderWalls.splice(0, renderWalls.length);
    wallCount = 0;
    walls.splice(0, walls.length);
}

function importWalls(imported) {
    clearWalls();
    defaults['sliderH0'] = parseInt(imported['sliderH0'])
    defaults['sliderH1'] = parseInt(imported['sliderH1'])
    defaults['sliderFovx'] = parseInt(imported['sliderFovx'])
    defaults['sliderFovy'] = parseInt(imported['sliderFovy'])
    defaults['sliderOpacity'] = parseInt(imported['sliderOpacity'])
    defaults['changeAll'] = imported['changeAll']
    defaults['randomColor'] = imported['randomColor']
    loadDefaults();
    imported["walls"].forEach(w => {
        walls.push(new Boundary(w["posx"] * (canvas2D.width / imported["width"]),
                                w["posy"] * (canvas2D.width / imported["width"]),
                                w["dirx"] * (canvas2D.width / imported["width"]),
                                w["diry"] * (canvas2D.width / imported["width"]),
                                w["hex"],
                                w["opacity"],
                                w["height0"],
                                w["height1"]
                                ))
    })
    player.pos.x = imported.player.posx * (canvas2D.width / imported["width"]);
    player.pos.y = imported.player.posy * (canvas2D.width / imported["width"]);
    player.rotation = imported.player.rotation
    player.setAngle(degrees(player.rotation))
    player.setFarSight(imported.player.farSight)
    player.setVerticalLook(imported.player.vertRotation)
}
function exportWalls() {
    tmp = {
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
    tmp = "defaults['sliderH0'] = " + document.getElementById("sliderH0").value + ";\n" +
        "defaults['sliderH1'] = " + document.getElementById("sliderH1").value + ";\n" +
        "defaults['sliderFovx'] = " + document.getElementById("sliderFovx").value + ";\n" +
        "defaults['sliderFovy'] = " + document.getElementById("sliderFovy").value + ";\n" +
        "defaults['sliderOpacity'] = " + document.getElementById("sliderOpacity").value + ";\n" +
        "defaults['changeAll'] = " + document.getElementById("changeAll").checked + ";\n" +
        "loadDefaults();\n"
    walls.forEach(w => {
        tmp = tmp + `walls.push(new Boundary(${w.pos.x} * (canvas2D.width/${canvas2D.width}), ${w.pos.y} * (canvas2D.width/${canvas2D.width}), (${w.pos.x + w.dir.x}) * (canvas2D.width/${canvas2D.width}), (${w.pos.y + w.dir.y}) * (canvas2D.width/${canvas2D.width}), "${w.hex}", ${w.opacity}, ${w.height0}, ${w.height1}));\n`
    });
    tmp = tmp + `player.pos.x = ${player.pos.x} * (canvas2D.width/${canvas2D.width});\nplayer.pos.y = ${player.pos.y} * (canvas2D.width/${canvas2D.width});\nplayer.rotation = ${player.rotation};\nplayer.setAngle(degrees(${player.rotation}));\nplayer.setFarSight(${player.farSight});\nplayer.setVerticalLook(${player.vertRotation});\n`
    // console.log(tmp);
    navigator.clipboard.writeText(tmp)
}

function loadScene(sceneName) {
    clearWalls();
    player.setFarSight(1000);
    switch (sceneName) {
        case "example":
            exampleScene();
            break;
        case "colors":
            colorsScene();
            break;
        case "penis":
            penislol();
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
        case "roomShow":
            roomShow();
            break;
    }
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
    player.pos.x = canvas2D.width/2;
    player.pos.y = canvas2D.height/2;
    player.setVerticalLook(0)
    player.setFarSight(1000)
}
