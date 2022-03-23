---
papersize: a4
output:
    md_extensions:
        +smart
        +tex_math_dollars
        +tex_math_dollars
        +backtick_code_blocks
    pdf_document: |
        latex_engine: xelatex
        toc: true
        toc_depth: 3
        highlight: tango
        colorlinks: true
...

# Introduction

Dans cette présentation, je détaillerai d'abord comment accéder à une démo du projet final ainsi qu'un guide de son utilisation. J'expliquerai ensuite les principes des méthodes actuelles du Raycasting. Enfin, je décrirai les nouvelles fonctionnalités qui composent ma méthode.

# Informations sur le projet

J'ai écrit le code pour ce projet avec *VSCode* qui est un éditeur de texte pour programmer

```javascript
function isInsideFOV() {
// Creating vector going from player to wall's first vertex
    this.p = {
        'x': this.pos.x - player.pos.x,
        'y': this.pos.y - player.pos.y
    };

// Creating vector going from player to wall's first vertex
    this.h = {
        'x': (this.pos.x + this.dir.x) - player.pos.x,
        'y': (this.pos.y + this.dir.y) - player.pos.y
    };

    this.p.dist = Math.sqrt((this.p.x) ** 2 + (this.p.y) ** 2);
    this.h.dist = Math.sqrt((this.h.x) ** 2 + (this.h.y) ** 2);

    if ((isIntersectionFovW(player.fov.v1, this) || isIntersectionFovW(player.fov.v2, this)) ||
        (isClockwiseOrder(player.fov.v1.dir, this.p) && !isClockwiseOrder(player.fov.v2.dir, this.p) &&
        isClockwiseOrder(player.fov.v1.dir, this.h) && !isClockwiseOrder(player.fov.v2.dir, this.h) &&
        (this.p.dist <= player.fov.v1.dir.length*2 && this.p.dist <= player.fov.v2.dir.length*2) &&
        (this.h.dist <= player.fov.v1.dir.length*2 && this.h.dist <= player.fov.v2.dir.length*2))
    ) return true;
}

```

```javascript

function processFOV() {
    // make sure v1 is always to the left of v2
    if (!isClockwiseOrder(this.p, this.h)) {
        let vtemp = this.p;
        this.p = this.h;
        this.h = vtemp;
    }

    //  redefine wall if it intersects with LEFT fov ray
    if (!isClockwiseOrder(player.fov.v1.dir, this.p) && isClockwiseOrder(player.fov.v1.dir, this.h)) {
        this.p = intersectionFovW(player.fov.v1, this);
        this.p.x -= player.pos.x;
        this.p.y -= player.pos.y;
    }

    //  redefine wall if it intersects with RIGHT fov ray
    if (!isClockwiseOrder(player.fov.v2.dir, this.p) && isClockwiseOrder(player.fov.v2.dir, this.h)) {
        this.h = intersectionFovW(player.fov.v2, this);
        this.h.x -= player.pos.x;
        this.h.y -= player.pos.y;
    }
    return true;
}

```
```javascript

function calculate3D() {
    const fovamount = player.fov.xamount;

    this.p = vectorNormalize(this.p);
    this.h = vectorNormalize(this.h);
    const dir = vectorNormalize(player.dir, Math.sqrt((player.dir.y) ** 2 + (player.dir.x) ** 2));
// get angle between dir and v1
// vectors are normalized so the dotproduct will give a value between -1 and 1
// angles are calculated using | adjacent / hypothenuse
// hypothenuse is 1 because v1/v1 was normalized (no denominator)
// adjacent is v1/v1 projected onto the dir for the adjacent side of the
// triangle (or relative to the other v1/v2)
    let v1xangle = Math.acos(vectorDotProduct(this.p, dir));
    let v2xangle = Math.acos(vectorDotProduct(this.h, this.p));     // get angle between v1 and v2

    // correct sign depending on side of v1/v2        
    if (!isClockwiseOrder(dir, this.p)) v1xangle = -v1xangle; 
    if (!isClockwiseOrder(this.p, this.h)) v2xangle = -v2xangle;

    v2xangle = v2xangle + v1xangle; // make v2 relative to v1

    this.p.dist *= Math.cos(v1xangle);
    this.x1 = degrees(v1xangle) * canvas.width / fovamount;
    this.h1 = this.calculateHeight(this.p);

    this.h.dist *= Math.cos(v2xangle);
    this.x2 = degrees(v2xangle) * canvas.width / fovamount;
    this.h2 = this.calculateHeight(this.h);

    if (this.h1 > 10000) this.h1 = 10000;
    if (this.h2 > 10000) this.h2 = 10000;
}

```

```javascript
// returns true if v1 is higher than v2
function v1HigherThanv2(w1, w2) {
    if (isSame(vectorMult(w1.p, w1.p.dist), vectorMult(w2.h, w2.h.dist)) ||
        isSame(vectorMult(w1.h, w1.h.dist), vectorMult(w2.p, w2.p.dist))) {
        return false
    }
    W1HtoW1P = vectorCreate(w1.p.x * w1.p.dist - w1.h.x * w1.h.dist,
                            w1.p.y * w1.p.dist - w1.h.y * w1.h.dist)
    W2HtoW2P = vectorCreate(w2.p.x * w2.p.dist - w2.h.x * w2.h.dist,
                            w2.p.y * w2.p.dist - w2.h.y * w2.h.dist)

    // V1 Just the wall vector (v1dir - v1pos)
    // Creating the vector is different so that we can check for intersections
    const W1ptoW1h = {"pos": {  "x": player.pos.x + w1.p.x * w1.p.dist,
                                "y": player.pos.y + w1.p.y * w1.p.dist },
                      "dir": {  "x": w1.h.x * w1.h.dist - w1.p.x * w1.p.dist,
                                "y": w1.h.y * w1.h.dist - w1.p.y * w1.p.dist }};

    // V2 Just the wall vector (v2dir - v2pos)
    // Creating the vector is different so that we can check for intersections
    const W2ptoW2h = {"pos": {  "x": player.pos.x + w2.p.x * w2.p.dist,
                                "y": player.pos.y + w2.p.y * w2.p.dist },
                      "dir": {  "x": w2.h.x * w2.h.dist - w2.p.x * w2.p.dist,
                                "y": w2.h.y * w2.h.dist - w2.p.y * w2.p.dist }};

    let alpha, beta
    if (isSame(vectorMult(w1.p, w1.p.dist), vectorMult(w2.p, w2.p.dist))) {
        alpha = vectorAngleBetween(vectorMult(w1.p, w1.p.dist), W1ptoW1h.dir)
        beta = vectorAngleBetween(vectorMult(w1.p, w1.p.dist), W2ptoW2h.dir)
    } else if (isSame(vectorMult(w1.h, w1.h.dist), vectorMult(w2.h, w2.h.dist))) {
        alpha = vectorAngleBetween(vectorMult(w1.h, w1.h.dist), W1HtoW1P)
        beta = vectorAngleBetween(vectorMult(w1.h, w1.h.dist), W2HtoW2P)
    }
    if ((alpha > 0 && beta > 0) || (alpha < 0 && beta < 0)) {
        return Math.abs(alpha) < Math.abs(beta)
    }

    const PltoW1P = { "pos": {  "x": player.pos.x,
                                "y": player.pos.y },
                      "dir": {  "x": w1.p.x * w1.p.dist,
                                "y": w1.p.y * w1.p.dist }};
    const PltoW1H = { "pos": {  "x": player.pos.x,
                                "y": player.pos.y },
                      "dir": {  "x": w1.h.x * w1.h.dist,
                                "y": w1.h.y * w1.h.dist }};

    const W1p = {   "x": player.pos.x + w1.p.dist * w1.p.x,
                    "y": player.pos.y + w1.p.dist * w1.p.y}
    const W1h = {   "x": player.pos.x + w1.h.dist * w1.h.x,
                    "y": player.pos.y + w1.h.dist * w1.h.y}
    const W2p = {   "x": player.pos.x + w2.p.dist * w2.p.x,
                    "y": player.pos.y + w2.p.dist * w2.p.y}
    const W2h = {   "x": player.pos.x + w2.h.dist * w2.h.x,
                    "y": player.pos.y + w2.h.dist * w2.h.y}
    
    return  isIntersectionVectors(PltoW1P, W2ptoW2h, [[w1.index, w2.index], "isint1"]) ||
            isIntersectionVectors(PltoW1H, W2ptoW2h, [[w1.index, w2.index], "isint2"]) ||
            ptInTriangle(W2p, player.pos, W1p, W1h, [[w1.index, w2.index], "istri1"]) ||
            ptInTriangle(W2h, player.pos, W1p, W1h, [[w1.index, w2.index], "istri2"])
}
```

```javascript
function display3D() {
    const minh = 20;
    const maxh = 55;
    const ver = maxh - minh;
    const hor = 450;
    const a = -ver/hor;
    
    let L1 = this.p.dist * a + maxh;
    if (L1 < minh) L1 = minh;
    if (L1 > maxh) L1 = maxh;

    let L2 = this.h.dist * a + maxh;
    if (L2 < minh) L2 = minh;
    if (L2 > maxh) L2 = maxh;

    const grd = ctx.createLinearGradient(this.x1 + canvas.width / 2, canvas.height / 2,
                this.x2 + canvas.width / 2, canvas.height / 2);

    grd.addColorStop(0, `hsla(${this.hue}, 100%, ${L1}%, 1)`);
    grd.addColorStop(1, `hsla(${this.hue}, 100%, ${L2}%, 1)`);
    ctx.fillStyle = grd;

    let tmpalpha = ctx.globalAlpha;
    ctx.globalAlpha = this.opacity;
    if (sortedActive) {  // adds color under the wall to hide any overlap
        polygon([   this.x1 + canvas.width / 2, this.h1.floor + canvas.height /2,
                this.x2 + canvas.width / 2, this.h2.floor + canvas.height /2,
                this.x2 + canvas.width / 2, this.h2.floor - canvas.height,
                this.x1 + canvas.width / 2, this.h1.floor - canvas.height,
        ], color["dark-gray"], 0);
    }
    polygon([this.x1 + canvas.width / 2, this.h1.h0 + canvas.height / 2,
    this.x1 + canvas.width / 2, this.h1.h1 + canvas.height /2,
    this.x2 + canvas.width / 2, this.h2.h1 + canvas.height /2,
    this.x2 + canvas.width / 2, this.h2.h0 + canvas.height /2
    ], `grd`, 2);


    ctx.globalAlpha = tmpalpha;
}
```

Dans mon code, j’ai deux fonctions en lien avec l’intersection : *Intersection()* qui détermine les
coordonnées d’un point d’intersection de deux segments s’il existe, et *isIntersection()* qui fait
de même sans calculer les coordonnées.

```javascript
function isIntersection(w1, w2) {
    const x1 = w1.pos.x; // meant for fov rays
    const y1 = w1.pos.y;
    const x2 = x1 + w1.dir.x * w1.dir.length;
    const y2 = y1 + w1.dir.y * w1.dir.length;

    const x3 = w2.pos.x; // meant for wall objects
    const y3 = w2.pos.y;
    const x4 = x3 + w2.dir.x;
    const y4 = y3 + w2.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) return false;
// Si le dénominateur est égal à 0, le calcul engendrerait une erreur
// donc l'intersection n'existe forcément pas
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

// Si l’intersection existe, on retourne vrai ou faux.
    return u >= 0 && u <= 1 && t >= 0 && t <= 1;
}

function intersection(w1, w2) {
// On n’effectuera aucun calcul si aucune intersection n’existe!
    if (!isIntersection(w1, w2)) return;

    const x1 = w1.pos.x;
    const y1 = w1.pos.y;
    const x2 = x1 + w1.dir.x * w1.dir.length;
    const y2 = y1 + w1.dir.y * w1.dir.length;

    const x3 = w2.pos.x;
    const y3 = w2.pos.y;
    const x4 = x3 + w2.dir.x;
    const y4 = y3 + w2.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    const u = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / den;

    const xint = x3 + u * (x4 - x3);
    const yint = y3 + u * (y4 - y3);
    const intersection = {
        'x': xint,
        'y': yint,
// Formule pour calculer la distance entre deux points
        'dist': Math.sqrt((y1 - yint) ** 2 + (x1 - xint) ** 2)
    };
    return intersection;
}
```

||
|---|
|![L'anticommutativité du produit vectoriel](../raycasting/img/Drawings/anticommutativite.png)|
|L'anticommutativité du produit vectoriel[^12]|

En conclusion, si le résultat de $a_x \cdot b_x − a_y \cdot b_x$ est positif, alors $a$ et $b$ sont orientés dans le sens des aiguilles d’une montre. S’il est négatif, alors $a$ et $b$ sont orientés dans le sens contraire des aiguilles d’une montre. S’il est égal à 0, alors les vecteurs sont parallèles. Dans mon code, je considère que ce cas est équivalent au premier par simplification.

```javascript
function isClockwiseOrder(v1, v2) {
    return v1.x*v2.y - v1.y*v2.x <= 0;
}
```
