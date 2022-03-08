function exampleScene() {
    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 70;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults(); walls.push(new Boundary(418 * (canvas2D.width / 886), 788 * (canvas2D.width / 886), 333 * (canvas2D.width / 886), 730 * (canvas2D.width / 886), 90, 1, 0, 300));
    walls.push(new Boundary(506 * (canvas2D.width / 886), 745 * (canvas2D.width / 886), 636 * (canvas2D.width / 886), 721 * (canvas2D.width / 886), 90, 1, 0, 300));
    walls.push(new Boundary(566 * (canvas2D.width / 886), 551 * (canvas2D.width / 886), 600 * (canvas2D.width / 886), 482 * (canvas2D.width / 886), 90, 1, 0, 300));
    walls.push(new Boundary(404 * (canvas2D.width / 886), 627 * (canvas2D.width / 886), 346 * (canvas2D.width / 886), 591 * (canvas2D.width / 886), 90, 1, 0, 300));
    walls.push(new Boundary(410 * (canvas2D.width / 886), 830 * (canvas2D.width / 886), 529 * (canvas2D.width / 886), 817 * (canvas2D.width / 886), 211, 1, 0, 300));
    walls.push(new Boundary(748 * (canvas2D.width / 886), 642 * (canvas2D.width / 886), 816 * (canvas2D.width / 886), 505 * (canvas2D.width / 886), 211, 1, 0, 300));
    walls.push(new Boundary(675 * (canvas2D.width / 886), 346 * (canvas2D.width / 886), 533 * (canvas2D.width / 886), 205 * (canvas2D.width / 886), 211, 1, 0, 300));
    walls.push(new Boundary(351 * (canvas2D.width / 886), 179 * (canvas2D.width / 886), 206 * (canvas2D.width / 886), 169 * (canvas2D.width / 886), 211, 1, 0, 300));
    walls.push(new Boundary(106 * (canvas2D.width / 886), 657 * (canvas2D.width / 886), 130 * (canvas2D.width / 886), 769 * (canvas2D.width / 886), 211, 1, 0, 300));
    walls.push(new Boundary(455 * (canvas2D.width / 886), 523 * (canvas2D.width / 886), 453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 490 * (canvas2D.width / 886), 462 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 452 * (canvas2D.width / 886), 425 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 413 * (canvas2D.width / 886), 456 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 408 * (canvas2D.width / 886), 495 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 493 * (canvas2D.width / 886), 498 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 433 * (canvas2D.width / 886), 502 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 422 * (canvas2D.width / 886), 477 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 439 * (canvas2D.width / 886), 456 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 469 * (canvas2D.width / 886), 458 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 494 * (canvas2D.width / 886), 477 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(453 * (canvas2D.width / 886), 483 * (canvas2D.width / 886), 472 * (canvas2D.width / 886), 509 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(126 * (canvas2D.width / 886), 363 * (canvas2D.width / 886), 142 * (canvas2D.width / 886), 342 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(142 * (canvas2D.width / 886), 342 * (canvas2D.width / 886), 163 * (canvas2D.width / 886), 336 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(163 * (canvas2D.width / 886), 336 * (canvas2D.width / 886), 194 * (canvas2D.width / 886), 337 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(194 * (canvas2D.width / 886), 337 * (canvas2D.width / 886), 227 * (canvas2D.width / 886), 353 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(227 * (canvas2D.width / 886), 353 * (canvas2D.width / 886), 239 * (canvas2D.width / 886), 366 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(165 * (canvas2D.width / 886), 484 * (canvas2D.width / 886), 163 * (canvas2D.width / 886), 432 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(214 * (canvas2D.width / 886), 477 * (canvas2D.width / 886), 216 * (canvas2D.width / 886), 421 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(420 * (canvas2D.width / 886), 303 * (canvas2D.width / 886), 435 * (canvas2D.width / 886), 321 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(435 * (canvas2D.width / 886), 321 * (canvas2D.width / 886), 452 * (canvas2D.width / 886), 327 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(452 * (canvas2D.width / 886), 327 * (canvas2D.width / 886), 466 * (canvas2D.width / 886), 328 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(466 * (canvas2D.width / 886), 328 * (canvas2D.width / 886), 479 * (canvas2D.width / 886), 328 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(479 * (canvas2D.width / 886), 328 * (canvas2D.width / 886), 497 * (canvas2D.width / 886), 314 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(497 * (canvas2D.width / 886), 314 * (canvas2D.width / 886), 503 * (canvas2D.width / 886), 301 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(503 * (canvas2D.width / 886), 301 * (canvas2D.width / 886), 506 * (canvas2D.width / 886), 288 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(420 * (canvas2D.width / 886), 303 * (canvas2D.width / 886), 418 * (canvas2D.width / 886), 279 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(418 * (canvas2D.width / 886), 279 * (canvas2D.width / 886), 430 * (canvas2D.width / 886), 267 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(418 * (canvas2D.width / 886), 279 * (canvas2D.width / 886), 450 * (canvas2D.width / 886), 261 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(450 * (canvas2D.width / 886), 261 * (canvas2D.width / 886), 468 * (canvas2D.width / 886), 262 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(468 * (canvas2D.width / 886), 262 * (canvas2D.width / 886), 489 * (canvas2D.width / 886), 262 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(489 * (canvas2D.width / 886), 262 * (canvas2D.width / 886), 506 * (canvas2D.width / 886), 288 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(751 * (canvas2D.width / 886), 561 * (canvas2D.width / 886), 718 * (canvas2D.width / 886), 527 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(718 * (canvas2D.width / 886), 527 * (canvas2D.width / 886), 712 * (canvas2D.width / 886), 503 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(712 * (canvas2D.width / 886), 503 * (canvas2D.width / 886), 721 * (canvas2D.width / 886), 458 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(721 * (canvas2D.width / 886), 458 * (canvas2D.width / 886), 749 * (canvas2D.width / 886), 427 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(749 * (canvas2D.width / 886), 427 * (canvas2D.width / 886), 771 * (canvas2D.width / 886), 411 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(771 * (canvas2D.width / 886), 411 * (canvas2D.width / 886), 783 * (canvas2D.width / 886), 400 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(783 * (canvas2D.width / 886), 400 * (canvas2D.width / 886), 797 * (canvas2D.width / 886), 374 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(797 * (canvas2D.width / 886), 374 * (canvas2D.width / 886), 800 * (canvas2D.width / 886), 355 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(800 * (canvas2D.width / 886), 355 * (canvas2D.width / 886), 790 * (canvas2D.width / 886), 341 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(790 * (canvas2D.width / 886), 341 * (canvas2D.width / 886), 756 * (canvas2D.width / 886), 312 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(756 * (canvas2D.width / 886), 312 * (canvas2D.width / 886), 740 * (canvas2D.width / 886), 286 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(740 * (canvas2D.width / 886), 286 * (canvas2D.width / 886), 740 * (canvas2D.width / 886), 232 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(740 * (canvas2D.width / 886), 232 * (canvas2D.width / 886), 766 * (canvas2D.width / 886), 203 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(766 * (canvas2D.width / 886), 203 * (canvas2D.width / 886), 793 * (canvas2D.width / 886), 188 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(793 * (canvas2D.width / 886), 188 * (canvas2D.width / 886), 814 * (canvas2D.width / 886), 169 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(814 * (canvas2D.width / 886), 169 * (canvas2D.width / 886), 816 * (canvas2D.width / 886), 127 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(816 * (canvas2D.width / 886), 127 * (canvas2D.width / 886), 778 * (canvas2D.width / 886), 103 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(778 * (canvas2D.width / 886), 103 * (canvas2D.width / 886), 719 * (canvas2D.width / 886), 108 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(719 * (canvas2D.width / 886), 108 * (canvas2D.width / 886), 683 * (canvas2D.width / 886), 149 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(683 * (canvas2D.width / 886), 149 * (canvas2D.width / 886), 663 * (canvas2D.width / 886), 205 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(663 * (canvas2D.width / 886), 205 * (canvas2D.width / 886), 621 * (canvas2D.width / 886), 197 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(621 * (canvas2D.width / 886), 197 * (canvas2D.width / 886), 581 * (canvas2D.width / 886), 153 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(581 * (canvas2D.width / 886), 153 * (canvas2D.width / 886), 526 * (canvas2D.width / 886), 119 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(404 * (canvas2D.width / 886), 119 * (canvas2D.width / 886), 526 * (canvas2D.width / 886), 119 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(765 * (canvas2D.width / 886), 738 * (canvas2D.width / 886), 798 * (canvas2D.width / 886), 813 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(798 * (canvas2D.width / 886), 813 * (canvas2D.width / 886), 846 * (canvas2D.width / 886), 737 * (canvas2D.width / 886), 37, 1, 0, 300));
    walls.push(new Boundary(846 * (canvas2D.width / 886), 737 * (canvas2D.width / 886), 765 * (canvas2D.width / 886), 738 * (canvas2D.width / 886), 37, 1, 0, 300));
    player.pos.x = 608.7853773197638 * (canvas2D.width / 886);
    player.pos.y = 699.7654872665915 * (canvas2D.width / 886);
    player.rotation = 4.031710572106929;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.setVerticalLook(0.0698131700797732);

}

function colorsScene() {
    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 300;
    defaults['sliderFovx'] = 86;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = false;
    loadDefaults(); walls.push(new Boundary(133 * (canvas2D.width / 886), 848 * (canvas2D.width / 886), 252 * (canvas2D.width / 886), 842 * (canvas2D.width / 886), 0, 1, 0, 350));
    walls.push(new Boundary(273 * (canvas2D.width / 886), 718 * (canvas2D.width / 886), 337 * (canvas2D.width / 886), 747 * (canvas2D.width / 886), 33, 1, 0, 350));
    walls.push(new Boundary(323 * (canvas2D.width / 886), 809 * (canvas2D.width / 886), 380 * (canvas2D.width / 886), 869 * (canvas2D.width / 886), 57, 1, 0, 350));
    walls.push(new Boundary(382 * (canvas2D.width / 886), 691 * (canvas2D.width / 886), 432 * (canvas2D.width / 886), 756 * (canvas2D.width / 886), 101, 1, 0, 350));
    walls.push(new Boundary(417 * (canvas2D.width / 886), 832 * (canvas2D.width / 886), 494 * (canvas2D.width / 886), 873 * (canvas2D.width / 886), 175, 1, 0, 350));
    walls.push(new Boundary(478 * (canvas2D.width / 886), 844 * (canvas2D.width / 886), 548 * (canvas2D.width / 886), 862 * (canvas2D.width / 886), 193, 1, 0, 350));
    walls.push(new Boundary(518 * (canvas2D.width / 886), 745 * (canvas2D.width / 886), 615 * (canvas2D.width / 886), 863 * (canvas2D.width / 886), 236, 1, 0, 350));
    walls.push(new Boundary(581 * (canvas2D.width / 886), 810 * (canvas2D.width / 886), 638 * (canvas2D.width / 886), 829 * (canvas2D.width / 886), 281, 1, 0, 350));
    walls.push(new Boundary(617 * (canvas2D.width / 886), 811 * (canvas2D.width / 886), 685 * (canvas2D.width / 886), 803 * (canvas2D.width / 886), 304, 1, 0, 350));
    walls.push(new Boundary(801 * (canvas2D.width / 886), 661 * (canvas2D.width / 886), 808 * (canvas2D.width / 886), 580 * (canvas2D.width / 886), 304, 1, 0, 350));
    walls.push(new Boundary(782 * (canvas2D.width / 886), 331 * (canvas2D.width / 886), 733 * (canvas2D.width / 886), 276 * (canvas2D.width / 886), 304, 1, 0, 350));
    walls.push(new Boundary(160 * (canvas2D.width / 886), 268 * (canvas2D.width / 886), 256 * (canvas2D.width / 886), 193 * (canvas2D.width / 886), 173, 1, 0, 350));
    walls.push(new Boundary(433 * (canvas2D.width / 886), 183 * (canvas2D.width / 886), 618 * (canvas2D.width / 886), 228 * (canvas2D.width / 886), 90, 1, 0, 350));
    walls.push(new Boundary(96 * (canvas2D.width / 886), 543 * (canvas2D.width / 886), 103 * (canvas2D.width / 886), 418 * (canvas2D.width / 886), 90, 1, 0, 350));
    walls.push(new Boundary(289 * (canvas2D.width / 886), 260 * (canvas2D.width / 886), 382 * (canvas2D.width / 886), 181 * (canvas2D.width / 886), 307, 1, 0, 350));
    walls.push(new Boundary(122 * (canvas2D.width / 886), 764 * (canvas2D.width / 886), 39 * (canvas2D.width / 886), 674 * (canvas2D.width / 886), 307, 1, 0, 350));
    walls.push(new Boundary(172 * (canvas2D.width / 886), 123 * (canvas2D.width / 886), 344 * (canvas2D.width / 886), 84 * (canvas2D.width / 886), 0, 1, 0, 350));
    walls.push(new Boundary(586 * (canvas2D.width / 886), 45 * (canvas2D.width / 886), 750 * (canvas2D.width / 886), 82 * (canvas2D.width / 886), 0, 1, 0, 350));
    walls.push(new Boundary(651 * (canvas2D.width / 886), 616 * (canvas2D.width / 886), 707 * (canvas2D.width / 886), 526 * (canvas2D.width / 886), 0, 1, 0, 350));
    walls.push(new Boundary(814 * (canvas2D.width / 886), 441 * (canvas2D.width / 886), 852 * (canvas2D.width / 886), 314 * (canvas2D.width / 886), 0, 1, 0, 350));
    walls.push(new Boundary(537 * (canvas2D.width / 886), 346 * (canvas2D.width / 886), 478 * (canvas2D.width / 886), 284 * (canvas2D.width / 886), 0, 1, 0, 350));
    walls.push(new Boundary(170 * (canvas2D.width / 886), 625 * (canvas2D.width / 886), 161 * (canvas2D.width / 886), 536 * (canvas2D.width / 886), 0, 1, 0, 350));
    walls.push(new Boundary(10 * (canvas2D.width / 886), 367 * (canvas2D.width / 886), 84 * (canvas2D.width / 886), 210 * (canvas2D.width / 886), 0, 1, 0, 350));
    player.pos.x = 358.46248509023616 * (canvas2D.width / 886);
    player.pos.y = 399.9161444502729 * (canvas2D.width / 886);
    player.rotation = -4.677482395344825;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.setVerticalLook(0.10471975511965977);


}

function penislol() {
    defaults["sliderFovx"] = 70
    walls.push(new Boundary(307 * (canvas2D.width/861), 594 * (canvas2D.width/861), 324 * (canvas2D.width/861), 607 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(331 * (canvas2D.width/861), 613 * (canvas2D.width/861), 343 * (canvas2D.width/861), 618 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(355 * (canvas2D.width/861), 620 * (canvas2D.width/861), 367 * (canvas2D.width/861), 622 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(376 * (canvas2D.width/861), 619 * (canvas2D.width/861), 392 * (canvas2D.width/861), 606 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(394 * (canvas2D.width/861), 599 * (canvas2D.width/861), 403 * (canvas2D.width/861), 578 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(402 * (canvas2D.width/861), 574 * (canvas2D.width/861), 399 * (canvas2D.width/861), 550 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(395 * (canvas2D.width/861), 543 * (canvas2D.width/861), 379 * (canvas2D.width/861), 531 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(373 * (canvas2D.width/861), 527 * (canvas2D.width/861), 358 * (canvas2D.width/861), 528 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(347 * (canvas2D.width/861), 532 * (canvas2D.width/861), 333 * (canvas2D.width/861), 541 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(323 * (canvas2D.width/861), 547 * (canvas2D.width/861), 318 * (canvas2D.width/861), 566 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(313 * (canvas2D.width/861), 577 * (canvas2D.width/861), 309 * (canvas2D.width/861), 591 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(404 * (canvas2D.width/861), 596 * (canvas2D.width/861), 418 * (canvas2D.width/861), 615 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(423 * (canvas2D.width/861), 618 * (canvas2D.width/861), 442 * (canvas2D.width/861), 626 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(448 * (canvas2D.width/861), 626 * (canvas2D.width/861), 473 * (canvas2D.width/861), 622 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(477 * (canvas2D.width/861), 616 * (canvas2D.width/861), 486 * (canvas2D.width/861), 604 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(487 * (canvas2D.width/861), 595 * (canvas2D.width/861), 489 * (canvas2D.width/861), 580 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(487 * (canvas2D.width/861), 571 * (canvas2D.width/861), 486 * (canvas2D.width/861), 556 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(482 * (canvas2D.width/861), 546 * (canvas2D.width/861), 479 * (canvas2D.width/861), 534 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(463 * (canvas2D.width/861), 520 * (canvas2D.width/861), 449 * (canvas2D.width/861), 521 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(404 * (canvas2D.width/861), 554 * (canvas2D.width/861), 416 * (canvas2D.width/861), 539 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(421 * (canvas2D.width/861), 535 * (canvas2D.width/861), 442 * (canvas2D.width/861), 526 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(468 * (canvas2D.width/861), 523 * (canvas2D.width/861), 479 * (canvas2D.width/861), 531 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(374 * (canvas2D.width/861), 523 * (canvas2D.width/861), 377 * (canvas2D.width/861), 507 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(376 * (canvas2D.width/861), 495 * (canvas2D.width/861), 374 * (canvas2D.width/861), 483 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(374 * (canvas2D.width/861), 476 * (canvas2D.width/861), 373 * (canvas2D.width/861), 455 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(374 * (canvas2D.width/861), 451 * (canvas2D.width/861), 375 * (canvas2D.width/861), 424 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(374 * (canvas2D.width/861), 419 * (canvas2D.width/861), 374 * (canvas2D.width/861), 398 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(377 * (canvas2D.width/861), 395 * (canvas2D.width/861), 383 * (canvas2D.width/861), 379 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(384 * (canvas2D.width/861), 379 * (canvas2D.width/861), 400 * (canvas2D.width/861), 377 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(404 * (canvas2D.width/861), 380 * (canvas2D.width/861), 416 * (canvas2D.width/861), 394 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(416 * (canvas2D.width/861), 399 * (canvas2D.width/861), 419 * (canvas2D.width/861), 416 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(419 * (canvas2D.width/861), 421 * (canvas2D.width/861), 422 * (canvas2D.width/861), 445 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(419 * (canvas2D.width/861), 449 * (canvas2D.width/861), 419 * (canvas2D.width/861), 465 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(418 * (canvas2D.width/861), 475 * (canvas2D.width/861), 422 * (canvas2D.width/861), 496 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(422 * (canvas2D.width/861), 501 * (canvas2D.width/861), 424 * (canvas2D.width/861), 517 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(418 * (canvas2D.width/861), 531 * (canvas2D.width/861), 421 * (canvas2D.width/861), 519 * (canvas2D.width/861), 0, 1, 0, 35));
    walls.push(new Boundary(620 * (canvas2D.width/861), 252 * (canvas2D.width/861), 808 * (canvas2D.width/861), 327 * (canvas2D.width/861), 90, 1, 0, 264));

}

function test() {
    defaults.sliderH0 = 0;
    defaults.sliderH1 = 300;
    defaults.sliderFovx = 70;
    defaults.sliderFovy = 280;
    defaults.sliderOpacity = 100;
    defaults.changeAll = false;
    loadDefaults()
    walls.push(new Boundary(0 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(886 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(886 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(0 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(314 * (canvas2D.width / 886), 448 * (canvas2D.width / 886), 516 * (canvas2D.width / 886), 450 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(518 * (canvas2D.width / 886), 650 * (canvas2D.width / 886), 516 * (canvas2D.width / 886), 450 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(309 * (canvas2D.width / 886), 642 * (canvas2D.width / 886), 314 * (canvas2D.width / 886), 448 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(405 * (canvas2D.width / 886), 592 * (canvas2D.width / 886), 367 * (canvas2D.width / 886), 508 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(445 * (canvas2D.width / 886), 508 * (canvas2D.width / 886), 367 * (canvas2D.width / 886), 508 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(444 * (canvas2D.width / 886), 581 * (canvas2D.width / 886), 445 * (canvas2D.width / 886), 508 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(560 * (canvas2D.width / 886), 251 * (canvas2D.width / 886), 725 * (canvas2D.width / 886), 344 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(747 * (canvas2D.width / 886), 444 * (canvas2D.width / 886), 725 * (canvas2D.width / 886), 344 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(788 * (canvas2D.width / 886), 321 * (canvas2D.width / 886), 747 * (canvas2D.width / 886), 444 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(750 * (canvas2D.width / 886), 373 * (canvas2D.width / 886), 788 * (canvas2D.width / 886), 321 * (canvas2D.width / 886), 211, 0.69, 116, 672));
    walls.push(new Boundary(368 * (canvas2D.width / 886), 646 * (canvas2D.width / 886), 346 * (canvas2D.width / 886), 657 * (canvas2D.width / 886), 0, 0.33, 0, 369));
    walls.push(new Boundary(283 * (canvas2D.width / 886), 682 * (canvas2D.width / 886), 252 * (canvas2D.width / 886), 668 * (canvas2D.width / 886), 0, 0.33, 0, 369));
    walls.push(new Boundary(507 * (canvas2D.width / 886), 698 * (canvas2D.width / 886), 550 * (canvas2D.width / 886), 713 * (canvas2D.width / 886), 0, 0.33, 0, 201));
    walls.push(new Boundary(607 * (canvas2D.width / 886), 676 * (canvas2D.width / 886), 650 * (canvas2D.width / 886), 649 * (canvas2D.width / 886), 0, 0.33, 0, 201));
    walls.push(new Boundary(672 * (canvas2D.width / 886), 592 * (canvas2D.width / 886), 676 * (canvas2D.width / 886), 552 * (canvas2D.width / 886), 0, 0.33, 0, 201));
    walls.push(new Boundary(651 * (canvas2D.width / 886), 511 * (canvas2D.width / 886), 604 * (canvas2D.width / 886), 481 * (canvas2D.width / 886), 0, 0.33, 0, 201));
    player.pos.x = 584.4246764890964 * (canvas2D.width / 886);
    player.pos.y = 802.5186785707073 * (canvas2D.width / 886);
    player.rotation = -2.0420352248333686;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(2000);
    player.setVerticalLook(0.2792526803190927);
}
function allExamples() {
    defaults['sliderH0'] = 265;
    defaults['sliderH1'] = 325;
    defaults['sliderFovx'] = 70;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 75;
    defaults['changeAll'] = true;
    loadDefaults(); walls.push(new Boundary(144 * (canvas2D.width / 886), 452 * (canvas2D.width / 886), 245 * (canvas2D.width / 886), 485 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(280 * (canvas2D.width / 886), 467 * (canvas2D.width / 886), 245 * (canvas2D.width / 886), 485 * (canvas2D.width / 886), 36, 1, 0, 300));
    walls.push(new Boundary(280 * (canvas2D.width / 886), 467 * (canvas2D.width / 886), 329 * (canvas2D.width / 886), 544 * (canvas2D.width / 886), 36, 1, 0, 300));
    walls.push(new Boundary(329 * (canvas2D.width / 886), 544 * (canvas2D.width / 886), 245 * (canvas2D.width / 886), 795 * (canvas2D.width / 886), 90, 1, 0, 661));
    walls.push(new Boundary(245 * (canvas2D.width / 886), 795 * (canvas2D.width / 886), 203 * (canvas2D.width / 886), 725 * (canvas2D.width / 886), 90, 1, 562, 740));
    walls.push(new Boundary(203 * (canvas2D.width / 886), 725 * (canvas2D.width / 886), 146 * (canvas2D.width / 886), 697 * (canvas2D.width / 886), 90, 1, 562, 740));
    walls.push(new Boundary(146 * (canvas2D.width / 886), 697 * (canvas2D.width / 886), 98 * (canvas2D.width / 886), 703 * (canvas2D.width / 886), 90, 1, 562, 740));
    walls.push(new Boundary(98 * (canvas2D.width / 886), 703 * (canvas2D.width / 886), 70 * (canvas2D.width / 886), 618 * (canvas2D.width / 886), 90, 1, 562, 740));
    walls.push(new Boundary(70 * (canvas2D.width / 886), 618 * (canvas2D.width / 886), 78 * (canvas2D.width / 886), 544 * (canvas2D.width / 886), 90, 1, 562, 740));
    walls.push(new Boundary(78 * (canvas2D.width / 886), 544 * (canvas2D.width / 886), 103 * (canvas2D.width / 886), 476 * (canvas2D.width / 886), 90, 1, 562, 740));
    walls.push(new Boundary(103 * (canvas2D.width / 886), 476 * (canvas2D.width / 886), 110 * (canvas2D.width / 886), 433 * (canvas2D.width / 886), 53, 1, 374, 631));
    walls.push(new Boundary(110 * (canvas2D.width / 886), 433 * (canvas2D.width / 886), 144 * (canvas2D.width / 886), 452 * (canvas2D.width / 886), 36, 1, 127, 493));
    walls.push(new Boundary(381 * (canvas2D.width / 886), 500 * (canvas2D.width / 886), 473 * (canvas2D.width / 886), 542 * (canvas2D.width / 886), 307, 0.53, 0, 315));
    walls.push(new Boundary(473 * (canvas2D.width / 886), 542 * (canvas2D.width / 886), 526 * (canvas2D.width / 886), 490 * (canvas2D.width / 886), 307, 0.53, 0, 315));
    walls.push(new Boundary(526 * (canvas2D.width / 886), 490 * (canvas2D.width / 886), 451 * (canvas2D.width / 886), 453 * (canvas2D.width / 886), 307, 0.53, 0, 315));
    walls.push(new Boundary(451 * (canvas2D.width / 886), 453 * (canvas2D.width / 886), 381 * (canvas2D.width / 886), 500 * (canvas2D.width / 886), 307, 0.53, 0, 315));
    walls.push(new Boundary(465 * (canvas2D.width / 886), 515 * (canvas2D.width / 886), 431 * (canvas2D.width / 886), 500 * (canvas2D.width / 886), 307, 0.53, 0, 700));
    walls.push(new Boundary(431 * (canvas2D.width / 886), 500 * (canvas2D.width / 886), 457 * (canvas2D.width / 886), 474 * (canvas2D.width / 886), 307, 0.53, 0, 700));
    walls.push(new Boundary(457 * (canvas2D.width / 886), 474 * (canvas2D.width / 886), 481 * (canvas2D.width / 886), 488 * (canvas2D.width / 886), 307, 0.53, 0, 700));
    walls.push(new Boundary(481 * (canvas2D.width / 886), 488 * (canvas2D.width / 886), 465 * (canvas2D.width / 886), 515 * (canvas2D.width / 886), 307, 0.53, 0, 700));
    walls.push(new Boundary(527 * (canvas2D.width / 886), 687 * (canvas2D.width / 886), 600 * (canvas2D.width / 886), 697 * (canvas2D.width / 886), 219, 0.75, 522, 621));
    walls.push(new Boundary(707 * (canvas2D.width / 886), 701 * (canvas2D.width / 886), 773 * (canvas2D.width / 886), 682 * (canvas2D.width / 886), 219, 0.75, 522, 621));
    walls.push(new Boundary(468 * (canvas2D.width / 886), 659 * (canvas2D.width / 886), 498 * (canvas2D.width / 886), 661 * (canvas2D.width / 886), 219, 0.75, 354, 483));
    walls.push(new Boundary(783 * (canvas2D.width / 886), 645 * (canvas2D.width / 886), 809 * (canvas2D.width / 886), 644 * (canvas2D.width / 886), 219, 0.75, 354, 483));
    walls.push(new Boundary(498 * (canvas2D.width / 886), 661 * (canvas2D.width / 886), 541 * (canvas2D.width / 886), 657 * (canvas2D.width / 886), 219, 0.75, 305, 374));
    walls.push(new Boundary(783 * (canvas2D.width / 886), 645 * (canvas2D.width / 886), 734 * (canvas2D.width / 886), 644 * (canvas2D.width / 886), 219, 0.75, 305, 374));
    walls.push(new Boundary(541 * (canvas2D.width / 886), 657 * (canvas2D.width / 886), 734 * (canvas2D.width / 886), 644 * (canvas2D.width / 886), 219, 0.75, 265, 325));
    player.pos.x = 98.38193867258327 * (canvas2D.width / 886);
    player.pos.y = 156.37837103107117 * (canvas2D.width / 886);
    player.rotation = 1.0297442586766583;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(1000);
    player.setVerticalLook(0);


}

function collidingWalls() {
    defaults['sliderH0'] = 0;
    defaults['sliderH1'] = 999;
    defaults['sliderFovx'] = 70;
    defaults['sliderFovy'] = 280;
    defaults['sliderOpacity'] = 100;
    defaults['changeAll'] = true;
    loadDefaults(); walls.push(new Boundary(0 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 100, 1, 0, 300));
    walls.push(new Boundary(886 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 100, 1, 0, 300));
    walls.push(new Boundary(886 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 100, 1, 0, 300));
    walls.push(new Boundary(0 * (canvas2D.width / 886), 886 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 0 * (canvas2D.width / 886), 100, 1, 0, 300));
    walls.push(new Boundary(314 * (canvas2D.width / 886), 448 * (canvas2D.width / 886), 516 * (canvas2D.width / 886), 450 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(518 * (canvas2D.width / 886), 650 * (canvas2D.width / 886), 516 * (canvas2D.width / 886), 450 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(309 * (canvas2D.width / 886), 642 * (canvas2D.width / 886), 314 * (canvas2D.width / 886), 448 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(405 * (canvas2D.width / 886), 592 * (canvas2D.width / 886), 367 * (canvas2D.width / 886), 508 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(445 * (canvas2D.width / 886), 508 * (canvas2D.width / 886), 367 * (canvas2D.width / 886), 508 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(444 * (canvas2D.width / 886), 581 * (canvas2D.width / 886), 445 * (canvas2D.width / 886), 508 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(560 * (canvas2D.width / 886), 251 * (canvas2D.width / 886), 725 * (canvas2D.width / 886), 344 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(747 * (canvas2D.width / 886), 444 * (canvas2D.width / 886), 725 * (canvas2D.width / 886), 344 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(788 * (canvas2D.width / 886), 321 * (canvas2D.width / 886), 747 * (canvas2D.width / 886), 444 * (canvas2D.width / 886), 0, 1, 0, 300));
    walls.push(new Boundary(750 * (canvas2D.width / 886), 373 * (canvas2D.width / 886), 788 * (canvas2D.width / 886), 321 * (canvas2D.width / 886), 0, 1, 0, 300));
    player.pos.x = 410.1240052445875 * (canvas2D.width / 886);
    player.pos.y = 882.2961144666627 * (canvas2D.width / 886);
    player.rotation = -1.4660765716752409;
    player.setAngle(degrees(player.rotation));
    player.setFarSight(2000);
    player.setVerticalLook(2.0816681711721685e-17);

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
    loadDefaults();
    imported["walls"].forEach(w => {
        walls.push(new Boundary(w["posx"] * (canvas2D.width / imported["width"]),
                                w["posy"] * (canvas2D.width / imported["width"]),
                                w["dirx"] * (canvas2D.width / imported["width"]),
                                w["diry"] * (canvas2D.width / imported["width"]),
                                w["hue"],
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
        "width": canvas2D.width,
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
                        "hue": w.hue,
                        "opacity": w.opacity,
                        "height0": w.height0,
                        "height1": w.height1,
                        })
    })
    console.log(tmp)
    return tmp;
}

function copyWallsCode() {
    tmp = "defaults['sliderH0'] = " + document.getElementById("sliderH0").value + ";\n" +
        "defaults['sliderH1'] = " + document.getElementById("sliderH1").value + ";\n" +
        "defaults['sliderFovx'] = " + document.getElementById("sliderFovx").value + ";\n" +
        "defaults['sliderFovy'] = " + document.getElementById("sliderFovy").value + ";\n" +
        "defaults['sliderOpacity'] = " + document.getElementById("sliderOpacity").value + ";\n" +
        "defaults['changeAll'] = " + document.getElementById("changeAll").checked + ";\n" +
        "loadDefaults();"
    walls.forEach(w => {
        tmp = tmp + "walls.push(new Boundary(" + w.pos.x + " * (canvas2D.width/" + canvas2D.width + "), " +
            w.pos.y + " * (canvas2D.width/" + canvas2D.width + "), " +
            (w.pos.x + w.dir.x) + " * (canvas2D.width/" + canvas2D.width + "), " +
            (w.pos.y + w.dir.y) + " * (canvas2D.width/" + canvas2D.width + "), " +
            w.hue + ", " + w.opacity + ", " + w.height0 + ", " + w.height1 + "));\n"
    });
    tmp = tmp + "player.pos.x = " + player.pos.x + " * (canvas2D.width/" + canvas2D.width + ");\n" +
        "player.pos.y = " + player.pos.y + " * (canvas2D.width/" + canvas2D.width + ");\n" +
        "player.rotation = " + player.rotation + ";\n" +
        "player.setAngle(degrees(player.rotation))" + ";\n" +
        "player.setFarSight(" + player.farSight + ")" + ";\n" +
        "player.setVerticalLook(" + player.vertRotation + ")" + ";\n"
    console.log(tmp);
    // navigator.clipboard.writeText(JSON.stringify(copyWalls()))
    navigator.clipboard.writeText(tmp)
}


function loadScene(sceneName) {
    clearWalls();
    player.setFarSight(1000);
    switch (sceneName) {
        case "example":
            exampleScene()
            break;
        case "colors":
            colorsScene()
            break;
        case "penis":
            penislol()
            break;
        case "test":
            test()
            break;
        case "allExamples":
            allExamples()
            break;
        case "collidingWalls":
            collidingWalls()
            break;
    }
    return true;
}

// corridors
// colors
// different sizes 1
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
