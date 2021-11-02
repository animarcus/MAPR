# Raycasting

Demo of my high school graduation project. This is an algorithm I created myself for a raycasting rendering engine. It's not perfect but it looks good.


<!-- Copy and paste the converted output. -->

<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 3.617 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β31
* Tue Nov 02 2021 15:12:36 GMT-0700 (PDT)
* Source doc: Raycasting TM
* Tables are currently converted to HTML tables.

WARNING:
You have some equations: look for ">>>>>  gd2md-html alert:  equation..." in output.

* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 1; ALERTS: 39.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>
<a href="#gdcalert6">alert6</a>
<a href="#gdcalert7">alert7</a>
<a href="#gdcalert8">alert8</a>
<a href="#gdcalert9">alert9</a>
<a href="#gdcalert10">alert10</a>
<a href="#gdcalert11">alert11</a>
<a href="#gdcalert12">alert12</a>
<a href="#gdcalert13">alert13</a>
<a href="#gdcalert14">alert14</a>
<a href="#gdcalert15">alert15</a>
<a href="#gdcalert16">alert16</a>
<a href="#gdcalert17">alert17</a>
<a href="#gdcalert18">alert18</a>
<a href="#gdcalert19">alert19</a>
<a href="#gdcalert20">alert20</a>
<a href="#gdcalert21">alert21</a>
<a href="#gdcalert22">alert22</a>
<a href="#gdcalert23">alert23</a>
<a href="#gdcalert24">alert24</a>
<a href="#gdcalert25">alert25</a>
<a href="#gdcalert26">alert26</a>
<a href="#gdcalert27">alert27</a>
<a href="#gdcalert28">alert28</a>
<a href="#gdcalert29">alert29</a>
<a href="#gdcalert30">alert30</a>
<a href="#gdcalert31">alert31</a>
<a href="#gdcalert32">alert32</a>
<a href="#gdcalert33">alert33</a>
<a href="#gdcalert34">alert34</a>
<a href="#gdcalert35">alert35</a>
<a href="#gdcalert36">alert36</a>
<a href="#gdcalert37">alert37</a>
<a href="#gdcalert38">alert38</a>
<a href="#gdcalert39">alert39</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>


**Travail de maturité				                **Maître accompagnant : M. Ischi

**Le Raycasting**

**Création d’un algorithme de rendu d’images en 3 dimensions**



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


Collège de Candolle, 5 novembre 2021

HAMELINK Marcus, 409


[TOC]





## Introduction

Après avoir appris à programmer en Python en mars 2020 au début du confinement, je suis devenu fasciné par tout ce qui est informatique. Je n’ai pas arrêté d’apprendre des nouvelles notions de programmation et durant l’été j’ai commencé à apprendre Javascript pour coder des sites web. J’ai été notamment intéressé par la création de jeux.

Au début de ma troisième année du collège, j’ai découvert le Raycasting, qui est une “technique de calcul d’images de synthèse 3D”[^1]. C’est ce qui a rendu possible les premiers jeux vidéo en 3D comme Doom ou Wolfenstein 3D au début des années 1990. Fondée sur un espace en 2D et non pas sur un monde 3D, la méthode permet de simuler une perspective en 3D sans les calculs complexes de la troisième dimension. J’expliquerai de manière plus détaillée comment cette technique fonctionne dans le développement.

J’ai alors commencé à apprendre à implémenter cette méthode moi-même en suivant des guides sur internet et c’est alors que j’ai décidé d’en faire mon travail de Maturité. Initialement, mon plan était de créer un moteur de jeu avec un grand nombre de fonctionnalités qui auraient permis à quiconque de dessiner des environnements sur un plan et de les explorer en perspective. Il y aurait également eu un accès facile à mon code pour programmer des nouveaux jeux avec mes bases.

Peu de temps après, je me suis rendu compte que la méthode que j’utilisais ne me plaisait pas pour des raisons que je détaillerai dans mon développement. J’ai donc décidé de chercher à créer ma propre technique suivant les principes du Raycasting. Les notions de géométrie vectorielle que j’ai apprises lors de mes cours de maths en troisième année du collège m’ont énormément aidé pour appliquer les mathématiques dans mon code.

Dans cette présentation, je commencerai par expliquer les principes des méthodes actuelles du Raycasting. Puis, je décrirai les nouvelles fonctionnalités qui composent ma méthode.



1. La méthode couramment utilisée de Raycasting

J’ai d’abord découvert le Raycasting grâce à une vidéo par Daniel Shiffman, un créateur sur YouTube qui tient la chaîne _The Coding Train_, où dans une de ses séries, _Coding challenge_, il réalise des petits projets dans le but d'éduquer ses auditeurs. Sa vidéo sur le Raycasting[^2] a été pour moi une bonne introduction au sujet. J’ai passé de nombreuses heures à comprendre les principes afin de pouvoir les appliquer dans mes propres projets. J’ai décidé d’en faire mon travail de maturité car j'étais curieux de savoir comment je pourrais créer mes propres jeux avec. 

La méthode la plus courante et celle que j’ai codé en premier est la suivante :

On part d’un plan en 2 dimensions où on a le joueur représenté par un point ainsi que deux segments indiquant l’étendue de son champ de vision (utile pour la suite). Autour de lui sont placés des traits qui représentent des obstacles. Le joueur a pour fonctionnalité de se déplacer et de s’orienter librement sur le plan.



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


Plan 2D du joueur entouré d’obstacles[^3]

Dans mon programme, tous les obstacles ainsi que le joueur sont programmés sous forme d’objets. C’est-à-dire que chacun d’eux possède des propriétés qui leur correspondent individuellement. (Comme par exemple les coordonnées x, y sur le plan, l’orientation, la couleur, etc…)

Ensuite, on génère des rayons provenant du joueur entre les extrémités de son champ de vision. Lorsque les rayons intersectent avec un obstacle, on calcule le point d’intersection où se joignent les deux segments[^4].

Le plan 2D n’est qu’une représentation des calculs réalisés pour le rendu 3D. Ainsi, on peut se balader sur le plan comme si on se trouvait à la place du point et on percevait tous les obstacles de nos propres yeux sur le sol.


<table>
  <tr>
   <td>

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image3.png" width="" alt="alt_text" title="image_tooltip">

<p>
Plan 2D avec les points d’intersection calculés[^5]
   </td>
   <td>

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image4.png" width="" alt="alt_text" title="image_tooltip">

<p>
Perspective 3D calculée à partir du plan 2D
   </td>
  </tr>
  <tr>
   <td>

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image5.png" width="" alt="alt_text" title="image_tooltip">

<p>
Plan 2D avec plus d’intersections[^6]
   </td>
   <td>

<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image6.png" width="" alt="alt_text" title="image_tooltip">

<p>
Même perspective avec plus de détails
   </td>
  </tr>
</table>


Sur les images ci-dessus, on peut observer une représentation (à gauche) du plan 2D et (à droite) la perspective 3D.

L’écran de la perspective 3D est divisé horizontalement par le nombre de rayons générés. Ainsi, pour chacun de ces rayons, on lui associe une partie de cet écran 3D et on utilise la distance entre le joueur et l’intersection avec un obstacle pour dessiner un rectangle à hauteur proportionnelle par rapport à la distance. C’est-à-dire, si la distance est plus grande, l’intersection se trouve plus loin que le joueur donc la hauteur du rectangle sera plus petite et vice versa si la distance est plus petite. Ceci permet de simuler la perspective que l’on aperçoit de nos propres yeux.

Les images ci-dessus sont une démonstration de ce concept avec d’un côté ce qui se passe sur le plan 2D et de l’autre ce qu’on peut apercevoir après les calculs d’images. Pour calculer la hauteur du rectangle, il existe une autre manière que j’applique dans ma nouvelle méthode pour ces calculs d’images 3D.

Il existe également d’autres méthodes pour coder un moteur de rendu avec le Raycasting, comme par exemple à partir d’une grille pour présenter les obstacles comme des cubes[^7], le principe basique est le même. C’est à partir de ce principe expliqué précédemment que j’ai créé une nouvelle méthode qui me plaisait mieux.


## Les principes de ma nouvelle méthode


### Le concept derrière la méthode

Ce que je n’aimais pas avec la méthode initiale c’était l’aspect pixelisé du rendu 3D. Lorsque le joueur se dirige dans une autre direction, on voit un changement dans les rectangles qui sont dessinés, cassant cette perspective que l’on perçoit de nos propres yeux.

En revanche, plus on utilise de rayons, plus il y a de rectangles qui sont dessinés. Seulement, une augmentation de calculs par image entraîne rapidement un ralentissement de l’expérience de jeu et limite les possibilités, surtout si en plus du nombre de rayons, on augmente également le nombre d’obstacles. De plus, on a moins de liberté si on veut, par exemple, dessiner un contour autour des obstacles (étant donné qu’il n’y a pas d’unique forme mais une multitude de rectangles qui ont chacun leur propre contour).

Ainsi, je me suis dit que je pouvais utiliser des polygones pour dessiner ces obstacles car peu importe l’orientation des obstacles, la perspective qui en résulte sera toujours un polygone à quatre coins. Le problème, c’est qu’avec la méthode précédente, on ne sait pas si deux rayons intersectent avec un même obstacle. On aurait éventuellement pu le détecter mais un autre problème se pose lorsque le coin d’un obstacle se trouve entre deux rayons. Il suffit que le joueur se déplace un tout petit peu et le coin de cet obstacle dans la perspective 3D ne sera pas au même endroit.


<table>
  <tr>
   <td>

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image7.png" width="" alt="alt_text" title="image_tooltip">

<p>
Perspective 3D de l’ancienne méthode
<p>
180 rayons calculés
   </td>
   <td>

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image8.png" width="" alt="alt_text" title="image_tooltip">

<p>
Perspective 3D de ma nouvelle méthode
<p>
10 rayons calculés
   </td>
  </tr>
</table>


Ce sont ces petits détails qui m’ont fait comprendre que si je voulais changer de méthode, je devais supprimer cette génération de tous ces rayons. En gardant cette idée de dessiner des polygones, on peut en déduire une nouvelle manière de détecter les obstacles. 

Dans les prochaines sections, je vais présenter les différentes fonctions utilisées par mon programme. Ces fonctions sont exécutées sur chacun des obstacles.


### 
    Détecter les obstacles dans le champ de vision

Pour commencer, il faut regrouper tous les obstacles qui se situent dans le champ de vision du joueur. La fonction _isInsideFOV()_ (qui signifie “se trouvant à l'intérieur du champ de vision” en anglais) attribue d'abord deux nouvelles variables _p_ et _h_ qui sont deux vecteurs qui relient respectivement la position du joueur à chacune des extrémités de l’obstacle. (_p_ qui signifie _position_ et qui correspond au vecteur du premier point de l’obstacle et _h_ qui signifie _header_, aussi dit l'en tête de l'obstacle)

Ensuite, on effectue la vérification par l’utilisation répétée de _isClockwiseOrder()_[^8], une fonction qui prend deux vecteurs et qui retourne vrai si le premier est orienté dans le sens des aiguilles d’une montre par rapport au deuxième. 

Dans mon programme, si une des extrémités de l’obstacle est à la fois à la droite du vecteur de champ de vision de gauche et aussi à la gauche du vecteur de champ de vision de droite, alors la fonction va retourner vrai. On vérifie ceci pour les deux extrémités. De plus, si le joueur observe un obstacle de près et que les extrémités sortent du champ de vision, la fonction vérifie également s'il existe une intersection[^9] entre l’obstacle et chacun des vecteurs de champ de vision.

Cette fonction permet d’effectuer les prochains calculs seulement sur les obstacles qui comptent. 


```
function isInsideFOV() {
// Creating vector going from player to wall's first vertex
    	this.p = { 'x': this.pos.x - player.pos.x,
        	     'y': this.pos.y - player.pos.y };
 // Creating vector going from player to wall's second vertex
    	this.h = { 'x': (this.pos.x + this.header.x) - player.pos.x,
        	     'y': (this.pos.y + this.header.y) - player.pos.y };

    	if ((isIntersection(player.fov.v1, this) || isIntersection(player.fov.v2, this)) ||
        	(isClockwiseOrder(player.fov.v1.header, this.p) && !isClockwiseOrder(player.fov.v2.header, this.p) &&
        	isClockwiseOrder(player.fov.v1.header, this.h) && !isClockwiseOrder(player.fov.v2.header, this.h))
    	) { return true; }
}
```



### Arranger les données des vecteurs pour chaque obstacle

La fonction _processFOV()_ qui est exécutée seulement après avoir vérifié que l'obstacle se trouve dans le champ de vision, modifie les vecteurs _p_ et _h_ pour que les données soient plus faciles à traiter par la suite. 

D’abord on s’assure que _p_ soit bien à la gauche de _h_ ; dans le cas contraire, on inverse les données. Ensuite, on vérifie si l’obstacle croise un des vecteurs de champ de vision. Si c’est le cas, on définit à nouveau un des vecteurs pour qu’on n’ait seulement la tranche de l’obstacle qui se trouve à l'intérieur du champ de vision.



<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image9.png "image_tooltip")


Visualisation des obstacles intersectant avec les vecteurs de champ de vision [^10]


```
function processFOV() {
    	// make sure v1 is always to the left of v2
    	if (!isClockwiseOrder(this.p, this.h)) {
        	    let vtemp = this.p;
        	    this.p = this.h;
        	    this.h = vtemp;
    	}
    	//  redefine wall if it intersects with LEFT fov ray
    	if (!isClockwiseOrder(player.fov.v1.header, this.p) && isClockwiseOrder(player.fov.v1.header, this.h)) {
        	    this.p = intersection(player.fov.v1, this);
        	    this.p.x -= player.pos.x;
        	    this.p.y -= player.pos.y;
    	}
 
    	//  redefine wall if it intersects with RIGHT fov ray
    	if (!isClockwiseOrder(player.fov.v2.header, this.p) && isClockwiseOrder(player.fov.v2.header, this.h)) {
        	    this.h = intersection(player.fov.v2, this);
        	    this.h.x -= player.pos.x;
        	    this.h.y -= player.pos.y;
    	}
    	this.p.dist = Math.sqrt((this.p.x) ** 2 + (this.p.y) ** 2);
    	this.h.dist = Math.sqrt((this.h.x) ** 2 + (this.h.y) ** 2);
}
```



## Implémentation de la méthode


### Calculs de projection du 2D au 3D

Maintenant qu’on a toutes les données nécessaires, on peut enfin réaliser les calculs qui conduiront à une perspective 3D. On va prendre les vecteurs _p_ et _h_ ainsi que le vecteur directeur du joueur (celui qui indique son orientation) pour ensuite les normaliser afin de pouvoir travailler avec leur valeurs unitaires et ne plus devoir se soucier de leur distance.

On appliquera ensuite la formule de l’angle entre deux vecteurs. L’angle _v1xangle_ correspond a l’angle entre le vecteur _p_ et le vecteur directeur du joueur. L’angle v2xangle correspond à celui entre _p_ et _h_. Les angles sont calculés ainsi pour qu’on ait des valeurs allant du négatif au positif. On a un angle relatif entre _p_ et _h_ dont l’angle _p_ qui est relatif au vecteur directeur du joueur. L’angle final de _h_ n’est qu’une addition entre l’angle de _p_ et l’angle relatif entre les deux. 

Finalement, on définit les variables pour chacun des coins du polygone qui sera généré pour dessiner l'obstacle. On calcule x<sub>1</sub> et x<sub>2</sub> avec une proportion entre l’angle calculé précédemment et sa place relative sur l'écran et h<sub>1</sub> et h<sub>2</sub> sont calculés grâce à la fonction _calculateHeight()_ dont je vais parler dans la prochaine section.


```
function calculate3D() {
    	const fovamount = player.fov.xamount;
 
    	this.p = vectorNormalize(this.p);
    	this.h = vectorNormalize(this.h);
    	const header = vectorNormalize(player.header, Math.sqrt((player.header.y) **2 + (player.header.x) **2));
 
    	let v1xangle = Math.acos(vectorDotProduct(this.p, header));
    	let v2xangle = Math.acos(vectorDotProduct(this.h, this.p));

    	if (!isClockwiseOrder(header, this.p)) v1xangle = -v1xangle;
    	if (!isClockwiseOrder(this.p, this.h)) v2xangle = -v2xangle;
 
    	v2xangle = v2xangle + v1xangle; // make v2 relative to v1
 
    	this.x1 = degrees(v1xangle) * canvas.width / fovamount;
    	this.h1 = this.calculateHeight(this.p);
 
    	this.x2 = degrees(v2xangle) * canvas.width / fovamount;
    	this.h2 = this.calculateHeight(this.h);
}
```



### Calculer la taille relative d’un obstacle dans le champ de vision

Après avoir calculé la distance entre le joueur et un point sur un obstacle, on peut alors déterminer la hauteur que cette tranche d’obstacle prendra sur la perspective 3D. On appliquera alors la formule de l’angle entre deux vecteurs pour calculer l’angle entre les yeux du joueur et le haut et le bas de l’obstacle. Pour ceci, on a 

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image10.png "image_tooltip")
, la distance calculée précédemment grâce à la fonction _intersection()_, 

<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 la différence entre le bas de l'obstacle et la hauteur du joueur et 

<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 la différence entre le haut de l'obstacle et la hauteur du joueur. Les vecteurs 

<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 et 

<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 qui sont les hypoténuses des deux triangles rectangles sont une addition de 

<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 et des 

<p id="gdcalert16" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert17">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 respectifs. La hauteur du joueur ainsi que celle du haut et le bas de chaque obstacle sont prédéfinies et peuvent être modifiées librement.



<p id="gdcalert17" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert18">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image11.png "image_tooltip")


Représentation schématique des valeurs

Formant les vecteurs nécessaires à partir de ces valeurs connues, on peut ainsi calculer les angles 

<p id="gdcalert18" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert19">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image12.png "image_tooltip")
 et 

<p id="gdcalert19" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert20">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 avec l'arc cosinus de la division du produit scalaire des deux vecteurs par le produit de leurs intensités.



<p id="gdcalert20" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert21">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 

<p id="gdcalert21" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert22">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>



Ensuite, on peut utiliser une proportion entre l’angle et la hauteur de l'écran de la perspective 3D. La fonction _calculateHeight()_ retourne enfin ces valeurs calculées par cette proportion.


```

function calculateHeight(v) {
    const header = vectorCreate(v.projectedDist, 0);
    const h0 = vectorCreate(v.projectedDist, this.height0 - player.height);
    const h1 = vectorCreate(v.projectedDist, this.height1 - player.height);


    let anglev1 = Math.acos((vectorDotProduct(header, h0)) / (vectorDist(h0.x, h0.y) * v.projectedDist));
    let anglev2 = Math.acos((vectorDotProduct(header, h1)) / (vectorDist(h1.x, h1.y) * v.projectedDist));

    if (isClockwiseOrder(header, h0)) anglev1 = -anglev1;
    if (isClockwiseOrder(header, h1)) anglev2 = -anglev2;

    return {
        'h0': 1 * degrees(anglev1) * canvas.height / player.fov.yamount * 2,
        'h1': 1 * degrees(anglev2) * canvas.height / player.fov.yamount * 2,
        'dist': v.projectedDist
    };
}
```



### 	Tri des obstacles

Actuellement, on a une liste des obstacles que l'on doit dessiner. Il faut maintenant les trier dans cette liste en fonction de leur distance par rapport au joueur. Ceci tient en compte qu'il faut pouvoir déterminer si un obstacle est derrière ou devant un autre par rapport au joueur. On n'a pas non plus de valeur unique à comparer car chaque obstacle possède deux coordonnées x et y et il faut que tout soit calculé relativement au joueur.

Un ensemble d​'​ordre total est un ensemble dont tous les éléments sont comparables entre eux, par exemple un ensemble de nombres qui deux a deux peuvent tous être comparés entre eux pour les ordonner du petit au plus grand.

Dans notre cas, l'ensemble d'obstacles n'est pas d'ordre total car certaines paires d'obstacles ne peuvent pas être comparés dans le cas où aucun des deux n'est devant ou derrière l'autre.

En réalité, cet ensemble s'appelle un Ensemble Partiellement Ordonné _(ou POSET en anglais pour Partially Ordered Set)_. Pour effectuer un tri, on utilise ce qu'on appelle un graphe. C'est une manière de représenter la hiérarchie des relations entre des objets. Chaque point, appelé un sommet, représente un objet, et chacun de ces sommets est lié par ce qu'on appelle une arête. En mettant en relation chaque obstacle dans un graphe, la présentation de celui-ci ressemble à une sorte d'arbre.


<table>
  <tr>
   <td>

<p id="gdcalert22" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert23">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image13.jpg" width="" alt="alt_text" title="image_tooltip">

<p>
Deux obstacles qui ont une relation entre eux par rapport au joueur
   </td>
   <td>

<p id="gdcalert23" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert24">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/image14.jpg" width="" alt="alt_text" title="image_tooltip">

<p>
Deux obstacles qui n’ont aucune relation entre eux par rapport au joueur
   </td>
  </tr>
</table>


Dans les images ci-dessus figurent deux exemples avec une paire d’obstacles ainsi que leur représentation sous forme de graphe.

À gauche, l’obstacle 2 apparaît devant l’obstacle 1, donc il est placé avant le premier dans le graphe. À droite, aucun des deux n’est devant ou derrière l’autre, donc on va les représenter par deux arêtes divergentes, appelées _branches_, sur le graphe.


```

Cas d'un graphe avec plusieurs branches
```


Dans l’image ci-dessus, les deux cas sont fusionnés. On remarque que l’obstacle 4 paraît devant tous les autres, sans que ceux-ci aient de relation entre eux.

Sans entrer dans les détails, on utilise un algorithme de traversée de graphe appelé _Depth First Search_ _(qui signifie en anglais parcours en profondeur)_ afin d'accéder à tous les sommets dans leur ordre dans le graphe. On peut ainsi former une liste des obstacles qu'il faut dessiner dans l'ordre du plus éloigné du joueur au plus proche.


### Dessins des obstacles

Pour finalement dessiner les obstacles sur la perspective 3D, on prend chaque obstacle dans l'ordre de la liste créée par le tri de la section précédente. On utilise les valeurs calculées précédemment x<sub>1</sub>, x<sub>2</sub>, h<sub>1</sub> et h<sub>2</sub> qui définissent les coins du polygone final. La couleur est déterminée par une variable _hue_ qui est propre à l'obstacle. On utilise une fonction affine qui prend pour abscisse la distance des vecteurs _p_ et _h_ (vecteurs allant du joueur jusqu'à chacune des extrémités de l’obstacle) afin de calculer le niveau d'obscurité qu’on appliquera par un dégradé entre les deux variations de la couleur initiale. Ceci apporte un air de profondeur car plus une partie de l’obstacle est éloignée du joueur, plus celle-ci sera foncée.


```
display3D() {
    	const minh = 25;
    	const maxh = 50;
    	const ver = maxh - minh;
    	const hor = 450;
    	const a = -ver/hor;

    	let L1 = this.p.projectedDist * a + maxh;
    	if (L1 < minh) L1 = minh;
    	if (L1 > maxh) L1 = maxh;
 
    	let L2 = this.h.projectedDist * a + maxh;
    	if (L2 < minh) L2 = minh;
    	if (L2 > maxh) L2 = maxh;
 
    	const grd = ctx.createLinearGradient(this.x1 + canvas.width / 2, canvas.height / 2,
                	   this.x2 + canvas.width / 2, canvas.height / 2);
    	grd.addColorStop(0, `hsla(${this.hue}, 100%, ${L1}%, 1)`);
    	grd.addColorStop(1, `hsla(${this.hue}, 100%, ${L2}%, 1)`);
    	ctx.fillStyle = grd;
 
    	polygon([this.x1 + canvas.width / 2, this.h1.h0 + canvas.height / 2,
    	    this.x1 + canvas.width / 2, this.h1.h1 + canvas.height / 2,
    	    this.x2 + canvas.width / 2, this.h2.h1 + canvas.height / 2,
    	    this.x2 + canvas.width / 2, this.h2.h0 + canvas.height / 2
    	], `grd`); // `hsla(1, 50%, 50%, 0.5)`
}
```



## Annexe



1. Trouver l’intersection de deux segments

Soit Px, Py, les coordonnées du point d’intersection des deux segments définis par (x<sub>1</sub>, y<sub>1</sub>) et (x<sub>2</sub>, y<sub>2</sub>) pour le premier et (x<sub>3</sub>, y<sub>3</sub>) et (x<sub>4</sub>, y<sub>4</sub>) pour le deuxième.

Ainsi, on pose _t_, _u_ tel que :



<p id="gdcalert24" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert25">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 et 

<p id="gdcalert25" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert26">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>



On note que le dénominateur est le même pour le calcul de _u_ et de _t_.

Ces deux formules sont le résultat d’un développement d’un calcul de déterminants[^11] (notion associée aux matrices).

Avant même de calculer le point Px et Py, là où se trouve l’intersection des deux segments, on peut vérifier si cette intersection existe.

L’intersection des deux segment existe si 

<p id="gdcalert26" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert27">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 et 

<p id="gdcalert27" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert28">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

. Ceci permet d’ignorer le résultat et de seulement savoir s’il y a une intersection afin d’optimiser le programme.

En revanche, on peut quand même calculer Px et Py tels que :

	

<p id="gdcalert28" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert29">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>



Dans mon code, j’ai deux fonctions en lien avec l’intersection : _Intersection() _qui détermine les coordonnées d’un point d’intersection de deux segments s’il existe, et _isIntersection()_ qui fait de même sans calculer les coordonnées.


```
function isIntersection(w1, w2) {
   const x1 = w1.pos.x; // meant for fov rays
   const y1 = w1.pos.y;
   const x2 = x1 + w1.header.x * w1.header.length;
   const y2 = y1 + w1.header.y * w1.header.length;
   const x3 = w2.pos.x; // meant for wall objects
   const y3 = w2.pos.y;
   const x4 = x3 + w2.header.x;
   const y4 = y3 + w2.header.y;

   const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
// Si le dénominateur est égal à 0, le calcul engendrerait une erreur donc    // l'intersection n'existe forcément pas.
   if (den == 0) return false;
   const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
   const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

// Si l'intersection existe, on retourne vrai ou faux.
   return u >= 0 && u <= 1 && t >= 0 && t <= 1;
}
```



```
function intersection(w1, w2) {
// On n'effectuera aucun calcul si aucune intersection n'existe!
   if (!isIntersection(w1, w2)) return;

   const x1 = w1.pos.x;
   const y1 = w1.pos.y;
   const x2 = x1 + w1.header.x * w1.header.length;
   const y2 = y1 + w1.header.y * w1.header.length;

   const x3 = w2.pos.x;
   const y3 = w2.pos.y;
   const x4 = x3 + w2.header.x;
   const y4 = y3 + w2.header.y;

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






2. Trouver si deux vecteurs sont orientés dans le sens des aiguilles d'une montre

Une fonction beaucoup utilisée dans mon programme s’appelle _isClockwiseOrder()_. Cette fonction retourne vrai si le premier vecteur inséré est orienté de telle sorte qu’il vient avant le deuxième dans le sens des aiguilles d’une montre. Ceci me permet de comparer l'​orientation de deux vecteurs sans me soucier de leur angle relatif. L'opération qui se trouve derrière cette fonction est le _produit vectoriel_.

Comme nous sommes sur un plan en 2D on appliquera le produit vectoriel 

<p id="gdcalert29" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert30">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 avec 

<p id="gdcalert30" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert31">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 et 

<p id="gdcalert31" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert32">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

:



<p id="gdcalert32" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert33">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>



Ceci simplifie les calculs à effectuer et réduit le résultat a une valeur seulement. Cette valeur représente un certain vecteur perpendiculaire au plan 2D dont la hauteur est déterminée par le calcul. Ainsi, par la règle d’anticommutativité du produit vectoriel, (c’est-a-dire que 

<p id="gdcalert33" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert34">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

), on peut facilement déterminer si deux vecteurs sont orientés dans le sens des aiguilles d’une montre.



<p id="gdcalert34" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image15.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert35">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image15.png "image_tooltip")


L'anticommutativité du produit vectoriel[^12]

En conclusion, si le résultat de 

<p id="gdcalert35" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert36">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

est positif, alors 

<p id="gdcalert36" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert37">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 et 

<p id="gdcalert37" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert38">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 sont orientés dans le sens des aiguilles d’une montre. S’il est négatif, alors 

<p id="gdcalert38" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert39">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 et 

<p id="gdcalert39" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: equation: use MathJax/LaTeX if your publishing platform supports it. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert40">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

 sont orientés dans le sens contraire des aiguilles d’une montre. S’il est égal à 0, alors les vecteurs sont parallèles. Dans mon code, je considère que ce cas est équivalent au premier par simplification.


```
function isClockwiseOrder(v1, v2) {
	return v1.x*v2.y - v1.y*v2.x <= 0;
}
```



## Conclusion

Pour récapituler, l’implémentation de ma nouvelle méthode pour un moteur de rendu 3D avec le Raycasting a été réussie. Bien que le code soit plus complexe, celui-ci est capable de nous dessiner des obstacles projetés lisses sur les bords sans générer des centaines de rayons. 

Malgré l’augmentation des lignes de code nécessaires pour exécuter cette méthode, on atteint notre but avec plus d’efficacité ; le seul inconvénient étant que la projection peut déformer les obstacles qui sont parallèles au vecteur directeur du joueur ; un problème qui ne survient pas dans l’autre algorithme.

Néanmoins, en ajoutant quelques autres fonctionnalités comme une détection de collisions entre le joueur et les obstacles ou la capacité de dessiner d’autres objets que des obstacles avec des images, on pourrait aboutir à un réel moteur de jeu 3D.


## Bilan personnel

Lors de la réalisation de mon projet, j’ai dû m’investir dans un travail de recherche et de logique afin de trouver les meilleures solutions aux problèmes qui se sont posés. Ma perception de ce que je voulais rendre comme travail final à beaucoup changé au cours de cette dernière année. 

En effet, je voulais initialement utiliser la première méthode pour créer un moteur de jeu qui permettrait à quiconque de programmer ses propres jeux vidéo 3D avec plus de facilité.  C’est seulement après avoir codé les premières versions que je me suis rendu compte que le rendu ne me plaisait pas suffisamment.

Petit à petit, j’ai réalisé des petites modifications qui ont abouti à un nouvel algorithme pour lequel j’ai dû approfondir mes connaissances dans l’application des maths dans l’informatique. Malgré les heures de recherches et d’échecs que j’ai dû traverser, le fait de voir le résultat fonctionner m’apporte une grande satisfaction.


## Bibliographie


#### Images


    Page de titre : Vue d’obstacles multicolores en perspective ; Image générée à partir de mon code, HAMELINK Marcus 2021


    The cross product with respect to a right-handed coordinate system (auteur inconnu), 2008, Disponible à l’adresse: [https://en.wikipedia.org/wiki/Cross_product#/media/File:Cross_product_vector.svg](https://en.wikipedia.org/wiki/Cross_product#/media/File:Cross_product_vector.svg)


    Représentation schématique des valeurs ; Schéma que j’ai dessiné, HAMELINK Marcus 2021


    Schémas pour illustrer la comparaison entre deux obstacles ; Schémas que j’ai dessinés, HAMELINK Marcus 2021


#### Sources

	Raycasting. Wikipédia : l’encyclopédie libre [en ligne]. Dernière modification de la page le 22 juillet 2021 à 22:17. [Consulté le 10 octobre 2021]. Disponible à l’adresse : [https://fr.wikipedia.org/wiki/Raycasting](https://fr.wikipedia.org/wiki/Raycasting)

	SHIFFMAN Daniel, 2019. _Coding Challenge #146: Rendering Raycasting_ _[enregistrement vidéo]_. _Youtube_ [en ligne]. Disponible à l’adresse : [https://youtu.be/vYgIKn7iDH8](https://youtu.be/vYgIKn7iDH8)

	Line-line intersection. Wikipédia : l’encyclopédie libre [en ligne]. Dernière modification de la page le 6 octobre 2021 à 21:04. [Consulté le 14 octobre 2021]. Disponible à l’adresse :  [https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection)

	VANDEVENNE Lode, 2004-2021. _Lode's Computer Graphics Tutorial : Raycasting _[en ligne]. Dernière modification de la page en 2020. [Consulté le 15 janvier 2021] Lode Vandevenne, 2004-2020. Disponible à l’adresse : [https://lodev.org/cgtutor/raycasting.html](https://lodev.org/cgtutor/raycasting.html)


## Code utilisé dans mon programme

Une démonstration de ma méthode peut être trouvée sur mon site personnel :

[https://mhamelink.com/raycasting/](https://mhamelink.com/raycasting/)

Lorsque j’ai travaillé sur ce projet, j’ai séparé ce code en plusieurs fichiers pour faciliter l’organisation. Cette version se trouve sur ma page GitHub : 

[https://github.com/animarcus/raycasting/](https://github.com/animarcus/raycasting/)

Le code qui suit est un rassemblement de toutes les parties qui constituent mon programme dans un seul fichier _html_ de 1270 lignes. N’importe quel moteur de recherche peut l’ouvrir pour exécuter son contenu.


```
<!DOCTYPE html>
<!-- Le code javascript se trouve plus bas -->
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<style>
    	*{
        	box-sizing: border-box;
        	padding: 0;
        	margin: 0;
        	touch-action: none;
        	-webkit-user-select: none; /* Safari */	 
        	-moz-user-select: none; /* Firefox */
        	-ms-user-select: none; /* IE10+/Edge */
        	user-select: none; /* Standard */
    	}
    	body {
        	overflow: hidden;
        	position: fixed; 
        	background: rgb(2,0,36);
        	background: linear-gradient(140deg, rgb(202, 246, 223) 10%, rgba(0,212,255,1) 100%) fixed;
    	}
 
    	.container {
        	display: grid;
        	grid-template-columns: 65% auto;
        	grid-template-rows: 75% auto;
        	grid-template-areas:
            	"perspective flatview"
            	"controls controls";
        	width: 100vw;
        	height: 100vh;
    	}
    	.controls {
        	display:flex;
        	flex-direction: row;
        	flex-wrap: wrap;
        	justify-content: space-evenly;
        	align-items: flex-start;
        	padding-top: 30px;
 
        	background-color: rgb(202, 202, 202);
        	grid-area: controls;
    	}
    	.perspective {
        	display:flex;
        	flex-direction: column;
        	justify-content: center;
        	align-items: center;
        	padding-left: 5px;
        	padding-right: 5px;
 
        	background-color: rgb(0, 110, 255);
        	grid-area: perspective;
    	}
    	.flatview {  
        	display:flex;
        	flex-direction: column;
        	justify-content: center;
        	align-items: center;
        	padding:5px;
 
        	background-color: rgb(0, 110, 255);
        	grid-area: flatview;
    	}  
    	#canvas3D {
        	width: 100%;
        	height: auto;
        	background:rgb(56, 56, 56);
    	}
    	#canvas2D {
        	width: 100%;
        	height: auto;
        	background:rgb(56, 56, 56);
    	}
 
    	.instructions {
        	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        	font-size:large;
    	}
    	.sceneSettings {
        	display: flex;
        	flex-direction: column;
    	}
    	.wallOptions {
        	display: flex;
        	flex-direction: column;
        	align-items: center;
    	}
    	.toggles {
        	display: flex;
        	flex-direction: column;
        	align-items: center;
    	}
 
	</style>
	<title>Raycasting</title>
</head>
<body>
	<div class="container">
    	<div class="perspective">
        	<canvas id="canvas3D"></canvas>
    	</div>
    	<div class="flatview">
        	<p class="instructions">Click and drag to draw walls</p>
        	<canvas id="canvas2D"></canvas>
    	</div>
    	<div class="controls" id="booger">
        	<p class="instructions"> Use W A S D to move <br>
            	Use the arrow keys to look around <br>
            	If using a touch screen, tap the
            	colored boxes for controls
        	</p>
        	<div class="toggles">
            	<button onclick="show2D2 = !show2D2">Toggle Advanced 2D view</button>
            	<button onclick="rainbowMode = !rainbowMode">Toggle Rainbow mode</button>
        	</div>
        	<div class="wallOptions">
            	Wall color <input type="color" value="#ff0000" id="colorpick">
        	</div>
        	<div class="sceneSettings">
            	<button onclick="undoWall = true">Undo new Wall</button>
            	<button onclick="
                            	renderWalls.splice(0, renderWalls.length);
                            	walls.splice(0, walls.length);
                            	wallCount = 0;
                            	">Reset all Walls</button>
            	<button onclick="exampleScene()">Generate example scene</button>
            	<button onclick="showWallNums = !showWallNums">Toggle Wall numbers</button>
        	</div>
    	</div>
	</div>
	<script>
    	function radians(degreeValue) {
        	return degreeValue * (Math.PI / 180);
    	}
 
    	function degrees(radianValue) {
        	return radianValue * (180 / Math.PI);
    	}
 
    	function circle(x, y, r, fill = "white", lineWidth = 1, lineColor = fill) {
        	ctx.beginPath();
        	ctx.fillStyle = fill;
        	ctx.lineWidth = lineWidth;
        	ctx.strokeStyle = lineColor;
        	ctx.arc(x, y, r, 0, 2 * Math.PI);
        	ctx.stroke();
        	ctx.fill();
    	}
 
    	function ellipse(x, y, r1, r2 = r1, fill = "white", lineWidth = 1, lineColor = fill) {
        	ctx.beginPath();
        	ctx.fillStyle = fill;
        	ctx.lineWidth = lineWidth;
        	ctx.strokeStyle = lineColor;
        	ctx.ellipse(x, y, r1, r2, 0, 0, 2 * Math.PI);
        	ctx.stroke();
        	ctx.fill();
    	}
 
    	function line(x1, y1, x2, y2, lineColor = 'white', lineWidth = 1) {
        	ctx.beginPath();
        	ctx.lineWidth = lineWidth;
        	ctx.strokeStyle = lineColor;
        	ctx.moveTo(x1, y1);
        	ctx.lineTo(x2, y2);
        	ctx.stroke();
    	}
 
    	function polygon(coords, fill = "white", lineWidth = 1, lineColor = fill) {
        	if (coords.length % 2 != 0) {
            	console.warn('undefined number of args when drawing polygon');
            	return;
        	}
        	ctx.save();
        	ctx.beginPath();
        	ctx.moveTo(coords[0], coords[1]);
        	for (let i = 2; i < coords.length; i += 2) {
            	ctx.lineTo(coords[i], coords[i + 1]);
        	}
        	ctx.closePath();
        	ctx.fillStyle = fill;
        	ctx.lineWidth = lineWidth;
        	ctx.strokeStyle = lineColor;
        	ctx.stroke();
        	ctx.fill();
        	ctx.restore();
        	return coords;
    	}
 
 
    	function getRotation(pos, header) {
        	let rotation = Math.abs(Math.atan(header.y / header.x));
        	const x = pos.x;
        	const y = pos.y;
        	const x2 = pos.x + header.x;
        	const y2 = pos.y + header.y;
        	if (x2 > x && y2 >= y) rotation = rotation; //Q1  no change
        	if (x2 <= x && y2 > y) rotation = Math.PI - rotation; //Q2  add 90 degrees
        	if (x2 < x && y2 <= y) rotation += Math.PI;
        	if (x2 >= x && y2 < y) rotation = Math.PI * 2 - rotation;
        	return rotation;
    	}
 
 
    	// for choosing the color of the walls
    	// https://www.html-code-generator.com/javascript/color-converter-script
    	function HEXtoHSL(hex) {
        	hex = hex.replace(/#/g, '');
        	if (hex.length === 3) {
            	hex = hex.split('').map(function (hex) {
                	return hex + hex;
            	}).join('');
        	}
        	var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex);
        	if (!result) {
            	return null;
        	}
        	var r = parseInt(result[1], 16);
        	var g = parseInt(result[2], 16);
        	var b = parseInt(result[3], 16);
        	r /= 255, g /= 255, b /= 255;
        	var max = Math.max(r, g, b),
            	min = Math.min(r, g, b);
        	var h, s, l = (max + min) / 2;
        	if (max == min) {
            	h = s = 0;
        	} else {
            	var d = max - min;
            	s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            	switch (max) {
                	case r:
                    	h = (g - b) / d + (g < b ? 6 : 0);
                    	break;
                	case g:
                    	h = (b - r) / d + 2;
                    	break;
                	case b:
                    	h = (r - g) / d + 4;
                    	break;
            	}
            	h /= 6;
        	}
        	s = s * 100;
        	s = Math.round(s);
        	l = l * 100;
        	l = Math.round(l);
        	h = Math.round(360 * h);
 
        	return {
            	h: h,
            	s: s,
            	l: l
        	};
    	}
 
    	let canvas = document.getElementById('canvas3D');
    	let ctx = canvas.getContext('2d', { alpha: false });
 
    	const canvas2D = document.getElementById("canvas2D");
    	const ctx2D = canvas2D.getContext("2d", { alpha: false });
 
    	function set2Dctx() {
        	ctx = canvas2D.getContext("2d", { alpha: false });
    	}
    	function set3Dctx() {
        	ctx = canvas.getContext('2d', { alpha: false });
    	}
 
    	const cooldown = 15
    	let currentCooldown = cooldown;
    	let undoWall = false;
 
    	const keysPressed = {};
 
    	const mouse = {
        	'x': undefined,
        	'y': undefined
    	};
 
    	const handlers = {
        	click(e) {
            	mouse.x = e.offsetX;
            	mouse.y = canvas2D.height - e.offsetY;
            	drawing.startpos.x = mouse.x;
            	drawing.startpos.y = mouse.y;
            	e.preventDefault();
            	drawing.isDrawing = true;
        	},
        	unclick(e) {
            	e.preventDefault();
            	document.activeElement.blur();
            	drawing.stop();
        	},
        	updateCanvasSize() {
            	canvas.height = canvas.offsetHeight;
            	canvas.width = canvas.offsetWidth;
            	canvas2D.height = canvas2D.offsetWidth;
            	canvas2D.width = canvas2D.offsetWidth;
            	// console.log(canvas.height, canvas.width);
        	}
    	};
 
 
 
    	const drawing = {
        	isDrawing: false,
        	startpos: {
            	'x': undefined,
            	'y': undefined
        	},
        	start() {
            	if (currentCooldown <= 0) currentCooldown = cooldown;
            	if (currentCooldown > 0 && currentCooldown < cooldown) currentCooldown--;
            	if (!this.isDrawing) {
                	if ((undoWall || (keysPressed.Control && keysPressed.z)) && currentCooldown == cooldown && walls.length > 0) {  // Remove latest wall
                    	console.log("undioing") // TEST
                    	currentCooldown = cooldown - 1;
                    	wallCount--;
                    	walls.pop();
                	}
                	undoWall = false;
                	if (mouse.x < canvas2D.width && mouse.x > 0 && mouse.y < canvas2D.height && mouse.y > 0) {
                    	this.startpos.x = mouse.x;
                    	this.startpos.y = mouse.y;
                	} else {
                    	return;
                	}
            	}
            	if (this.isDrawing && (mouse.x < canvas2D.width && mouse.x > 0 && mouse.y < canvas2D.height && mouse.y > 0)) {
                	set2Dctx();
                	line(this.startpos.x, this.startpos.y, mouse.x, mouse.y);
                	set3Dctx();
            	}
        	},
        	stop() {
            	if (this.isDrawing && (Math.abs(this.startpos.x - mouse.x) > 10 || Math.abs(this.startpos.y - mouse.y) > 10)) {
                	newWall = {
                    	"pos": {
                        	"x": this.startpos.x,
                        	"y": this.startpos.y
                    	},
                    	"header": {
                        	"x": mouse.x - this.startpos.x,
                        	"y": mouse.y - this.startpos.y
                    	}
                	}
                	let intCount = 0;
                	walls.forEach(wall => {
                    	if (isIntersectionVectors(wall, newWall)) {
                        	intCount++;
                    	};
                	});
                	if (intCount == 0) {
                    	walls.push(new Boundary(this.startpos.x, this.startpos.y,
                        	mouse.x, mouse.y,
                        	HEXtoHSL(document.getElementById("colorpick").value).h));
                	}
            	}
            	this.isDrawing = false;
        	}
    	};
 
    	document.addEventListener('resize', handlers.updateCanvasSize());
    	document.onkeyup = (e) => delete keysPressed[e.key];
    	document.onkeydown = (e) => (keysPressed[e.key] = true);
 
    	document.ondblclick = (e) => e.preventDefault();
 
    	canvas2D.addEventListener("pointermove", (e) => {
        	e.preventDefault();
        	mouse.x = e.offsetX;
        	mouse.y = canvas2D.height - e.offsetY;
    	});
    	canvas2D.addEventListener("pointerdown", (e) => handlers.click(e));
    	document.addEventListener('pointerup', (e) => handlers.unclick(e));
 
    	class Button {
        	constructor(x, y, width, height, color, char = "boop") {
            	this.active = false;
            	this.color = color;
            	this.height = height;
            	this.width = width;
            	this.x = x;
            	this.y = y;
            	this.char = char
        	}
 
        	draw() {
            	let tmpalpha = ctx.globalAlpha;
            	ctx.globalAlpha = 0.1;
            	polygon([this.x, this.y,
            	this.x, this.y + this.height,
            	this.x + this.width, this.y + this.height,
            	this.x + this.width, this.y], this.color)
            	ctx.save();
            	ctx.setTransform(1, 0, 0, 1, 0, 0);
            	ctx.font = "bolder 30px Arial";
            	ctx.textAlign = "center";
            	ctx.textBaseline = 'middle';
            	ctx.fillStyle = "black";
            	ctx.fillText(this.char, this.x + this.width / 2, canvas.height - this.y - this.height / 2);
            	ctx.restore();
            	ctx.globalAlpha = tmpalpha;
        	}
 
        	containsPoint(x, y) {
            	// if the point is outside of the rectangle return false:
            	return (x < this.x ||
                	x > this.x + this.width ||
                	y < this.y ||
                	y > this.y + this.width);
        	}
    	}
 
    	const pointer = {
        	'x': undefined,
        	'y': undefined
    	};
    	let isPointing = false;
    	const isTouchScreen = window.matchMedia("(pointer: coarse)").matches
    	if (isTouchScreen) {
        	canvas3D.addEventListener("pointerdown", (e) => {
            	isPointing = true;
            	pointer.x = e.offsetX;
            	pointer.y = canvas.height - e.offsetY;
            	e.preventDefault();
        	});
 
        	canvas3D.addEventListener("pointermove", (e) => {
            	e.preventDefault();
            	pointer.x = e.offsetX;
            	pointer.y = canvas.height - e.offsetY;
        	});
        	canvas3D.addEventListener("pointerup", (e) => {
            	isPointing = false;
            	e.preventDefault();
            	for (let button of buttons) {
                	button.active = false;
            	}
        	});
    	}
 
 
 
    	let W = canvas.width / 6
    	let H = canvas.height / 4
    	let buttons = [
        	new Button(0, 0, W, H, "yellow", "A"),
        	new Button(2 * W, 0, W, H, "green", "D"),
        	new Button(W, 0, W, H, "cyan", "S"),
        	new Button(W, H, W, H, "orange", "W"),
        	new Button(3 * W, 0, W, H, "yellow", "⇦"),
        	new Button(5 * W, 0, W, H, "green", "⇨")
    	]
 
    	function touchControls() {
        	if (isTouchScreen) {
            	renderButtons();
            	if (isPointing) detectButtons();
            	handleButtons();
        	}
    	}
 
 
 
    	function renderButtons() {
        	for (let button of buttons) {
            	button.draw();
        	}
    	}
    	function detectButtons() {
        	for (let button of buttons) {
            	button.active = false;
            	if (
                	pointer.x > button.x && pointer.x < button.x + button.width &&
                	pointer.y > button.y && pointer.y < button.y + button.height) {
                	button.active = true;
                	break;
            	}
        	}
    	}
 
    	function handleButtons() {
        	if (buttons[0].active) {
            	keysPressed.a = true;
        	} else {
            	keysPressed.a = false;
        	}
        	if (buttons[2].active) {
            	keysPressed.s = true;
        	} else {
            	keysPressed.s = false;
        	}
        	if (buttons[1].active) {
            	keysPressed.d = true;
        	} else {
            	keysPressed.d = false;
        	}
        	if (buttons[3].active) {
            	keysPressed.w = true;
        	} else {
            	keysPressed.w = false;
        	}
 
        	if (buttons[4].active) {
            	keysPressed.ArrowLeft = true;
        	} else {
            	keysPressed.ArrowLeft = false;
        	}
        	if (buttons[5].active) {
            	keysPressed.ArrowRight = true;
        	} else {
            	keysPressed.ArrowRight = false;
        	}
    	}
    	class Ray {
        	constructor(x, y, rotation, length = 200) {
            	this.pos = {
                	'x': x,
                	'y': y
            	};
            	this.header = {
                	'x': Math.cos(radians(rotation)),
                	'y': Math.sin(radians(rotation)),
                	'length': length
            	};
        	}
        	draw(COLOR, lineWidth = 1) { // 2D
            	line(this.pos.x, this.pos.y, this.pos.x + this.header.x * this.header.length, this.pos.y + this.header.y * this.header.length, COLOR, lineWidth);
        	}
        	setAngle(angle) { //input is in degrees but handled in radians
            	this.header.x = Math.cos(radians(angle));
            	this.header.y = Math.sin(radians(angle));
        	}
    	}
 
    	class Player {
        	constructor(x, y, rotation) {
            	this.rotation = radians(rotation); //input is in degrees but handled in radians
            	this.vertRotation = 0;
 
            	this.height = 180; // height is in cm
 
            	this.farSight = 1000
            	this.moveStep = 2;
            	this.lookStepH = 2;
            	this.lookStepV = 5;
            	this.pos = {
                	'x': x,
                	'y': y
            	};
            	this.header = {
                	'x': Math.cos(this.rotation),
                	'y': Math.sin(this.rotation),
                	'length': this.moveStep
            	};
 
            	this.fov = {
                	'xamount': 235,  //based on human eyes 235 degrees
                	'yamount': 280
            	};
            	this.fov.v1 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) + this.fov.xamount / 2, this.farSight);
            	this.fov.v2 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) - this.fov.xamount / 2, this.farSight);
        	}
 
        	draw() {
            	// ctx.fillStyle = 'white';
            	// ctx.fillRect(this.pos.x - 5, this.pos.y - 5, 10, 10);
 
            	ellipse(this.pos.x, this.pos.y, 7, 7, "orange");
 
            	// line(this.pos.x, this.pos.y, this.pos.x + (this.header.x) * 100, this.pos.y + (this.header.y) * 100, 'white', 1);
 
            	this.fov.v1.draw('orange', 3); // green
 
            	this.fov.v2.draw("orange", 3); // green
        	}
 
 
 
        	setAngle(angle) { //input is in degrees but handled in radians
            	this.rotation = radians(angle);
            	if (this.rotation > 2 * Math.PI) this.rotation -= 2 * Math.PI;
            	if (this.rotation < -2 * Math.PI) this.rotation += 2 * Math.PI;
            	this.setFOV();
            	this.header.x = Math.cos(this.rotation);
            	this.header.y = Math.sin(this.rotation);
        	}
        	sideLook(angle) { //input is in degrees but handled in radians
            	this.setAngle(degrees(this.rotation) + angle);
        	}
        	verticalLook(angle) {
            	let vertLimit = {};
            	vertLimit.max = this.fov.yamount;
            	vertLimit.min = -this.fov.yamount;
            	if (this.vertRotation + angle >= vertLimit.min && this.vertRotation + angle <= vertLimit.max) {
                	this.vertRotation += angle;
                	ctx.translate(0, angle);
            	}
        	}
        	sideMove(step) {
            	this.pos.x += -step * this.header.y;
            	this.pos.y += step * this.header.x;
            	this.setFOV();
        	}
        	straightMove(step) {
            	this.pos.x = this.pos.x + step * this.header.x;
            	this.pos.y = this.pos.y + step * this.header.y;
            	this.setFOV();
        	}
 
        	setFOV() {
            	this.fov.v1.setAngle(degrees(this.rotation) + this.fov.xamount / 2);
            	this.fov.v2.setAngle(degrees(this.rotation) - this.fov.xamount / 2);
            	this.fov.v1.pos = this.pos;
            	this.fov.v2.pos = this.pos;
        	}
    	}
 
    	const playerHandler = {
        	movement() {
            	if (keysPressed.w) {
                	player.straightMove(player.moveStep);
            	}
            	if (keysPressed.s) {
                	player.straightMove(-player.moveStep);
            	}
            	if (keysPressed.a) {
                	player.sideMove(player.moveStep);
            	}
            	if (keysPressed.d) {
                	player.sideMove(-player.moveStep);
            	}
            	if (keysPressed.ArrowUp) {
                	player.verticalLook(-player.lookStepV);
            	}
            	if (keysPressed.ArrowDown) {
                	player.verticalLook(player.lookStepV);
            	}
            	if (keysPressed.ArrowLeft) {
                	player.sideLook(player.lookStepH);
            	}
            	if (keysPressed.ArrowRight) {
                	player.sideLook(-player.lookStepH);
            	}
        	}
    	};
    	class Boundary {
        	constructor(x1, y1, x2, y2, hue="100", opacity=1, height0=0, height1=500) {
            	// console.log(Math.round(x1), Math.round(y1), Math.round(x2), Math.round(y2));
            	this.pos = {
                	'x': x1,
                	'y': y1
            	};
            	this.header = {
                	'x': x2 - x1,
                	'y': y2 - y1,
            	};
            	wallCount++;
            	this.index = wallCount -1;
            	this.length = Math.sqrt((this.header.x) * (this.header.x) + (this.header.y) * (this.header.y));
 
            	this.rotation = getRotation(this.pos, this.header);
            	this.hue = hue; //colorpicker element in main.js
            	this.opacity = opacity;
 
            	this.height0 = height0;
            	this.height1 = height1;
 
            	 
        	}
 
        	draw() {
            	set2Dctx();
            	line(this.pos.x, this.pos.y, this.pos.x + this.header.x, this.pos.y + this.header.y, "hsl(" + this.hue + ", 100%, 50%)", 3);
            	ellipse(this.pos.x, this.pos.y, 5, 5, 'green');
            	ellipse(this.pos.x + this.header.x, this.pos.y + this.header.y, 5, 5, 'red');
            	// ellipse(this.pos.x, this.pos.y, 2, 2, 'white');  // green
            	// ellipse(this.pos.x + this.header.x, this.pos.y + this.header.y, 2, 2, 'white'); // red
            	if (showWallNums) {
                	ctx.save();
                	ctx.setTransform(1, 0, 0, 1, 0, 0);
                	ctx.font = "30px Arial";
                	ctx.fillStyle = 'white';
                	ctx.fillText(this.index, (this.pos.x*2 + this.header.x)/2 - 10, canvas2D.height - (this.pos.y*2 + this.header.y)/2 - 10);
                	ctx.restore();
            	}
            	set3Dctx();
        	}
 
        	isInsideFOV() {
            	this.p = {  // Creating vector going from player to wall's first vertex
                	'x': this.pos.x - player.pos.x,
                	'y': this.pos.y - player.pos.y
            	};
 
            	this.h = {  // Creating vector going from player to wall's first vertex
                	'x': (this.pos.x + this.header.x) - player.pos.x,
                	'y': (this.pos.y + this.header.y) - player.pos.y
            	};
 
            	if ((isIntersectionFovW(player.fov.v1, this) || isIntersectionFovW(player.fov.v2, this)) ||
                	(isClockwiseOrder(player.fov.v1.header, this.p) && !isClockwiseOrder(player.fov.v2.header, this.p) &&
                	isClockwiseOrder(player.fov.v1.header, this.h) && !isClockwiseOrder(player.fov.v2.header, this.h))
            	) return true;
        	}
 
        	processFOV() {
            	// make sure v1 is always to the left of v2
            	if (!isClockwiseOrder(this.p, this.h)) {
                	let vtemp = this.p;
                	this.p = this.h;
                	this.h = vtemp;
            	}
 
            	//  redefine wall if it intersects with LEFT fov ray
            	if (!isClockwiseOrder(player.fov.v1.header, this.p) && isClockwiseOrder(player.fov.v1.header, this.h)) {
                	this.p = intersectionFovW(player.fov.v1, this);
                	this.p.x -= player.pos.x;
                	this.p.y -= player.pos.y;
            	}
 
            	//  redefine wall if it intersects with RIGHT fov ray
            	if (!isClockwiseOrder(player.fov.v2.header, this.p) && isClockwiseOrder(player.fov.v2.header, this.h)) {
                	this.h = intersectionFovW(player.fov.v2, this);
                	this.h.x -= player.pos.x;
                	this.h.y -= player.pos.y;
            	}
            	this.p.dist = Math.sqrt((this.p.x) ** 2 + (this.p.y) ** 2);
            	this.h.dist = Math.sqrt((this.h.x) ** 2 + (this.h.y) ** 2);
 
            	// debugging  2D Representation
            	if (show2D2) {
                	set2Dctx();
                	ellipse(player.pos.x + this.p.x, player.pos.y + this.p.y, 10, 10, 'yellow');
                	line(player.pos.x, player.pos.y, player.pos.x + this.p.x, player.pos.y + this.p.y, 'purple', 5);
                	ellipse(player.pos.x + this.h.x, player.pos.y + this.h.y, 10, 10, 'cyan');
                	line(player.pos.x, player.pos.y, player.pos.x + this.h.x, player.pos.y + this.h.y, 'purple', 5);
                	set3Dctx();
            	}
            	return true;
        	}
 
        	calculate3D() {
            	const fovamount = player.fov.xamount;
 
            	this.p = vectorNormalize(this.p);
            	this.h = vectorNormalize(this.h);
            	const header = vectorNormalize(player.header, Math.sqrt((player.header.y) ** 2 + (player.header.x) ** 2));
 
            	let v1xangle = Math.acos(vectorDotProduct(this.p, header));    	// get angle between header and v1   vectors are normalized so the dotproduct will give a value between -1 and 1
            	let v2xangle = Math.acos(vectorDotProduct(this.h, this.p));   	// get angle between v1 and v2
                                                                                	// angles are calculated using | adjacent / hypothenuse
                                                                                	// hypothenuse is 1 because v1/v1 was normalized (no denominator)
                                                                                	// adjacent is v1/v1 projected onto the header for the adjacent side of the triangle (or relative to the other v1/v2)
 
            	if (!isClockwiseOrder(header, this.p)) v1xangle = -v1xangle;  // correct sign depending on side of v1/v2
            	if (!isClockwiseOrder(this.p, this.h)) v2xangle = -v2xangle;
 
            	v2xangle = v2xangle + v1xangle; // make v2 relative to v1
 
            	this.x1 = degrees(v1xangle) * canvas.width / fovamount;
            	this.h1 = this.calculateHeight(this.p);
 
            	this.x2 = degrees(v2xangle) * canvas.width / fovamount;
            	this.h2 = this.calculateHeight(this.h);
        	}
 
        	//works by supposing a 2d side view of the player looking at the wall and using trigonometry to find the angle of the top and bottom of the wall
        	calculateHeight(v) {
            	const header = vectorCreate(v.dist, 0);
            	const h0 = vectorCreate(v.dist, this.height0 - player.height);
            	const h1 = vectorCreate(v.dist, this.height1 - player.height);
            	 
            	const floor = vectorCreate(v.dist, -player.height);
            	let floorAngle =	Math.acos((vectorDotProduct(header, floor)) / (vectorDist(floor.x, floor.y) * v.dist));
            	 
            	let anglev1 =   	Math.acos((vectorDotProduct(header, h0)) / (vectorDist(h0.x, h0.y) * v.dist));
            	let anglev2 = Math.acos((vectorDotProduct(header, h1)) / (vectorDist(h1.x, h1.y) * v.dist));
 
            	if (isClockwiseOrder(header, floorAngle)) floorAngle = -floorAngle;
            	if (isClockwiseOrder(header, h0)) anglev1 = -anglev1;
            	if (isClockwiseOrder(header, h1)) anglev2 = -anglev2;
            	if (floorAngle == anglev1) console.log("aa")
            	return {
                	'floor': 1 * degrees(floorAngle) * canvas.height / player.fov.yamount * 2,
                	'h0': 1 * degrees(anglev1) * canvas.height / player.fov.yamount * 2,
                	'h1': 1 * degrees(anglev2) * canvas.height / player.fov.yamount * 2,
                	'sat': 1,
                	'dist': v.dist
            	};
        	}
        	display3D() {
            	const minh = 25;
            	const maxh = 50;
            	const ver = maxh - minh;
            	const hor = 450;
            	const a = -ver/hor;
            	// function determined with https://math.stackexchange.com/questions/2170013/looking-for-a-decreasing-function-which-initially-decreases-slowly-and-then-decr
            	let L1 = this.p.dist * a + maxh;
            	if (L1 < minh) L1 = minh;
            	if (L1 > maxh) L1 = maxh;
 
            	let L2 = this.h.dist * a + maxh;
            	if (L2 < minh) L2 = minh;
            	if (L2 > maxh) L2 = maxh;
 
            	// if (!this.x1 || !this.x2) {console.log("aha"); return; }
            	const grd = ctx.createLinearGradient(this.x1 + canvas.width / 2, canvas.height / 2,
                        	this.x2 + canvas.width / 2, canvas.height / 2);
 
            	grd.addColorStop(0, `hsla(${this.hue}, 100%, ${L1}%, 1)`);
            	grd.addColorStop(1, `hsla(${this.hue}, 100%, ${L2}%, 1)`);
            	ctx.fillStyle = grd;
            	 
            	let tmpalpha = ctx.globalAlpha;
            	ctx.globalAlpha = this.opacity;
            	 
            	polygon([   this.x1 + canvas.width / 2, this.h1.floor + canvas.height /2,
                    	this.x2 + canvas.width / 2, this.h2.floor + canvas.height /2,
                    	this.x2 + canvas.width / 2, this.h2.floor - canvas.height,
                    	this.x1 + canvas.width / 2, this.h1.floor - canvas.height,
            	], "#969696", 0); // `hsla(1, 50%, 50%, 0.5)`s
 
            	polygon([this.x1 + canvas.width / 2, this.h1.h0 + canvas.height / 2,
            	this.x1 + canvas.width / 2, this.h1.h1 + canvas.height /2,
            	this.x2 + canvas.width / 2, this.h2.h1 + canvas.height /2,
            	this.x2 + canvas.width / 2, this.h2.h0 + canvas.height /2
            	], `grd`, 2); // `hsla(1, 50%, 50%, 0.5)`
 
            	ctx.globalAlpha = tmpalpha;
        	}
        	setAngle(angle) {
            	this.header.x = Math.cos(angle) * this.length;
            	this.header.y = Math.sin(angle) * this.length;
            	this.rotation = getRotation(this.pos, this.header);
        	}
    	}
    	function isClockwiseOrder(v1, v2) {  // Tests if the cross product with z=0, returns positive or negative (clockwise or anticlockwise)
        	// const crossProduct = v1.x*v2.y - v1.y*v2.x;
        	return v1.x * v2.y - v1.y * v2.x <= 0;
    	}
 
    	function vectorDist(x, y) { // returns distance of a vector
        	return Math.sqrt(x ** 2 + y ** 2);
    	}
 
    	function vectorDotProduct(v1, v2) {
        	// const dot = v1.x*v2.x + v1.y*v2.y;
        	return v1.x * v2.x + v1.y * v2.y;
    	}
 
    	function vectorCreate(headerx, headery) {
        	return {
            	'x': headerx,
            	'y': headery
        	};
    	}
 
    	function vectorNormalize(v, dist = v.dist) {
        	v.x = v.x / dist;
        	v.y = v.y / dist;
        	return v;
    	}
 
    	function vectorAdd(A, B) {
        	return {
            	"x": A.x + B.x,
            	"y": A.y + B.y
        	}
    	}
    	function isIntersectionVectors(v1, v2) {
        	const x1 = v1.pos.x;
        	const y1 = v1.pos.y;
        	const x2 = x1 + v1.header.x;
        	const y2 = y1 + v1.header.y;
 
        	const x3 = v2.pos.x;
        	const y3 = v2.pos.y;
        	const x4 = x3 + v2.header.x;
        	const y4 = y3 + v2.header.y;
 
        	const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        	if (den == 0) return false;
        	const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        	const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
 
        	// if t and u are between 0 and 1 then the intersection falls between v1 and v2
        	return u >= 0 && u <= 1 && t >= 0 && t <= 1;
    	}
 
    	function intersectionVectors(v1, v2) {
        	if (!isIntersectionVectors(v1, v2)) return;
 
        	const x1 = v1.pos.x;
        	const y1 = v1.pos.y;
        	const x2 = x1 + v1.header.x;
        	const y2 = y1 + v1.header.y;
 
        	const x3 = v2.pos.x;
        	const y3 = v2.pos.y;
        	const x4 = x3 + v2.header.x;
        	const y4 = y3 + v2.header.y;
 
        	const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        	const u = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / den;
 
        	const xint = x3 + u * (x4 - x3);
        	const yint = y3 + u * (y4 - y3);
        	const intersection = {
            	'x': xint,
            	'y': yint,
            	'dist': Math.sqrt((y1 - yint) ** 2 + (x1 - xint) ** 2)
        	};
        	return intersection;
    	}
 
    	// condensed version of intersection() but only the conditional
    	function isIntersectionFovW(w1, w2) {
        	const x1 = w1.pos.x; // meant for fov rays
        	const y1 = w1.pos.y;
        	const x2 = x1 + w1.header.x * w1.header.length;
        	const y2 = y1 + w1.header.y * w1.header.length;
 
        	const x3 = w2.pos.x; // meant for wall objects
        	const y3 = w2.pos.y;
        	const x4 = x3 + w2.header.x;
        	const y4 = y3 + w2.header.y;
 
        	const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        	if (den == 0) return false;
        	const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        	const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
 
        	// if t and u are between 0 and 1 then the intersection falls between v1 and v2
        	return u >= 0 && u <= 1 && t >= 0 && t <= 1;
    	}
 
    	function intersectionFovW(w1, w2) {
        	if (!isIntersectionFovW(w1, w2)) return;
 
        	const x1 = w1.pos.x;
        	const y1 = w1.pos.y;
        	const x2 = x1 + w1.header.x * w1.header.length;
        	const y2 = y1 + w1.header.y * w1.header.length;
 
        	const x3 = w2.pos.x;
        	const y3 = w2.pos.y;
        	const x4 = x3 + w2.header.x;
        	const y4 = y3 + w2.header.y;
 
        	const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        	const u = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / den;
 
        	const xint = x3 + u * (x4 - x3);
        	const yint = y3 + u * (y4 - y3);
        	const intersection = {
            	'x': xint,
            	'y': yint,
            	'dist': Math.sqrt((y1 - yint) ** 2 + (x1 - xint) ** 2)
        	};
        	return intersection;
    	}
    	class Graph {
        	constructor() {
            	this.adjacencyList = new Map();
            	this.edges = []
        	}
 
        	// add vertex to the graph
        	addVertex(vertex) {
            	if (!this.adjacencyList.get(vertex)) {
                	this.adjacencyList.set(vertex, []);
            	}
        	}
 
        	// add edge to the graph
        	addEdge(source, destination) {
            	if (!this.adjacencyList.get(source)) {
                	this.addVertex(source);
            	}
            	if (!this.adjacencyList.get(destination)) {
                	this.addVertex(destination);
            	}
            	this.edges.push([source, destination])
            	this.adjacencyList.get(source).push(destination);
        	}
 
        	// Prints the vertex and adjacency list
        	printGraph() {
            	// get all the vertices
            	var get_keys = this.adjacencyList.keys();
            	let final = "";
            	// iterate over the vertices
            	for (var i of get_keys) {
                	// get the corresponding adjacency list for the vertex
                	var get_values = this.adjacencyList.get(i);
                	var conc = "";
 
                	// iterate over the adjacency list and concatenate the values into a string
                	for (var j of get_values) {
                    	conc += j + " ";
                	}
                	// print the vertex and its adjacency list
                	final = final + i + " -> " + conc + "\n";
            	}
            	if (showGraph) {
                	console.log(final);
                	showGraph = false;
            	}
        	}
 
        	/*/ // // Non-recursive DFS // // /*/
        	topologicalSort() {
            	let G = this.adjacencyList
            	let distance = new Map();
            	for (let v of G.keys()) {
                	if (!distance.has(v)) {
                    	distance.set(v, 0);
                    	this.dfs(v, distance, G)
                	}
            	}
            	// console.log(distance)
            	let vertices = []
            	let i = 0;
            	while (distance.size > 0) {
                	for (let v of G.keys()) {
                    	if (distance.get(v) == i) {
                        	vertices.push(v)
                        	distance.delete(v)
                    	}
                	}
                	i += 1
            	}
            	return vertices;
        	}
        	dfs(s, distance, G) {
            	let counter = new Map();
            	let nodes_to_visit = [s]
 
            	while (nodes_to_visit.length > 0) {
                	let currentnode = nodes_to_visit.shift();
                	if (counter.has(currentnode)) {
                    	let curcount = counter.get(currentnode);
                    	counter.set(currentnode, curcount + 1)
                    	if (curcount > 1000) {
                        	console.log(currentnode);
                        	this.printGraph();
                        	break;
                    	}
                	} else {
                    	counter.set(currentnode, 1)
                	}
                	let currentDepth = distance.get(currentnode);
                	G.get(currentnode).forEach(node => {
                    	if (!distance.has(node) || distance.get(node) < currentDepth + 1) {
                        	distance.set(node, currentDepth + 1);
                        	nodes_to_visit.unshift(node);
                    	}
                	})
 
            	}
        	}
    	}
    	function wallsToGraph(w) {
        	if (w.length < 2) return [];
 
        	const g = new Graph();
        	for (let i = 0; i < w.length - 1; i++) {
            	for (let j = i + 1; j < w.length; j++) {
                	if (v1HigherThanv2(w[i], w[j])) {
                    	g.addEdge(j, i);
                	} else if (v1HigherThanv2(w[j], w[i])) {
                    	g.addEdge(i, j);
                	} else {
                    	g.addVertex(i);
                    	g.addVertex(j);
                	}
            	}
        	}
 
        	g.printGraph();
        	let final = g.topologicalSort().reverse()
 
        	return final;
    	}
 
    	// returns true if v1 is higher than v2
    	function v1HigherThanv2(w1, w2) {
 
        	const W1p = {
            	"x": player.pos.x + w1.p.dist * w1.p.x,
            	"y": player.pos.y + w1.p.dist * w1.p.y
        	}
        	const W1h = {
            	"x": player.pos.x + w1.h.dist * w1.h.x,
            	"y": player.pos.y + w1.h.dist * w1.h.y
        	}
        	const W2p = {
            	"x": player.pos.x + w2.p.dist * w2.p.x,
            	"y": player.pos.y + w2.p.dist * w2.p.y
        	}
        	const W2h = {
            	"x": player.pos.x + w2.h.dist * w2.h.x,
            	"y": player.pos.y + w2.h.dist * w2.h.y
        	}
 
        	// V2 Just the wall vector (v1header - v1pos)
        	// Creating the vector is different so that we can check for intersections
        	const W2ptoW2h = {
            	"pos": {
                	"x": player.pos.x + w2.p.x * w2.p.dist,
                	"y": player.pos.y + w2.p.y * w2.p.dist
            	},
            	"header": {
                	"x": w2.h.x * w2.h.dist - w2.p.x * w2.p.dist,
                	"y": w2.h.y * w2.h.dist - w2.p.y * w2.p.dist
            	}
        	};
 
        	const PltoW1P = {
            	"pos": {
                	"x": player.pos.x,
                	"y": player.pos.y
            	},
            	"header": {
                	"x": w1.p.x * w1.p.dist,
                	"y": w1.p.y * w1.p.dist
            	}
        	};
        	const PltoW1H = {
            	"pos": {
                	"x": player.pos.x,
                	"y": player.pos.y
            	},
            	"header": {
                	"x": w1.h.x * w1.h.dist,
                	"y": w1.h.y * w1.h.dist
            	}
        	};
 
        	return isIntersectionVectors(PltoW1P, W2ptoW2h) || isIntersectionVectors(PltoW1H, W2ptoW2h) ||
            	ptInTriangle(W2p, player.pos, W1p, W1h) || ptInTriangle(W2h, player.pos, W1p, W1h)
    	}
 
    	function ptInTriangle(p, p0, p1, p2) {
        	var A = 1 / 2 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y);
        	var sign = A < 0 ? -1 : 1;
        	var s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign;
        	var t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign;
 
        	return s > 0.0 && t > 0.0 && (s + t) < 2.0 * A * sign;
    	}
    	// Canvas declared in interface.js
    	handlers.updateCanvasSize();
    	ctx.translate(0, canvas.height);
    	ctx.scale(1, -1);
 
    	ctx2D.translate(0, canvas2D.height);
    	ctx2D.scale(1, -1);
 
    	const player = new Player(canvas2D.width / 2, canvas2D.height - canvas2D.height / 1.4, 90);
    	player.fov.xamount = 90;
 
    	player.setFOV();
 
    	let wallCount = 0
    	const walls = [];
    	let renderWalls = [];
 
    	let showGraph = false;
 
    	// let tmp = ""
    	// walls.forEach(w => {
    	// 	tmp = tmp + "walls.push(new Boundary(" + w.pos.x + ", " + w.pos.y + ", " +
    	//                                     	(w.pos.x + w.header.x) + ", " + (w.pos.y + w.header.y) + ", " + w.hue + "));\n"
    	// });
    	// console.log(tmp);
 
    	function exampleScene() {
        	renderWalls.splice(0, renderWalls.length);
        	wallCount = 0;
        	walls.splice(0, walls.length);
        	walls.push(new Boundary(430, canvas2D.height - 270, 530, canvas2D.height - 270));
        	walls.push(new Boundary(339, canvas2D.height - 118, 232, canvas2D.height - 192));
        	walls.push(new Boundary(157, canvas2D.height - 197, 113, canvas2D.height - 387));
        	walls.push(new Boundary(201, canvas2D.height - 417, 289, canvas2D.height - 321));
        	walls.push(new Boundary(354, canvas2D.height - 427, 488, canvas2D.height - 495));
        	walls.push(new Boundary(615, canvas2D.height - 464, 702, canvas2D.height - 417));
        	walls.push(new Boundary(790, canvas2D.height - 200, 694, canvas2D.height - 59));
        	walls.push(new Boundary(429, canvas2D.height - 20, 304, canvas2D.height - 32));
        	walls.push(new Boundary(148, canvas2D.height - 58, 39, canvas2D.height - 95));
        	walls.push(new Boundary(488, canvas2D.height - 115, 613, canvas2D.height - 157));
        	walls.push(new Boundary(912, canvas2D.height - 251, 931, canvas2D.height - 409));
        	walls.push(new Boundary(762, canvas2D.height - 345, 815, canvas2D.height - 472));
    	}
 
    	exampleScene();
 
    	let show2D = true;
    	let show2D2 = false;
    	let showWallNums = false;
    	let rainbowMode = false;
 
    	gameLoop();
    	function gameLoop() {
        	ctx.clearRect(0, 0, canvas.width, canvas.height);
        	ctx2D.clearRect(0, 0, canvas2D.width, canvas2D.height);
 
 
 
        	background();
        	playerHandler.movement();
        	set2Dctx();
        	player.draw();
        	set3Dctx();
        	renderWalls.splice(0, renderWalls.length)
        	walls.forEach(wall => {
            	if (rainbowMode) {
                	if (wall.hue >= 255) wall.hue = -1;
                	wall.hue += 1;
            	}
            	if (show2D) {
                	set2Dctx();
                	wall.draw();
            	}
            	if (wall.isInsideFOV()) {
                	wall.processFOV();
                	wall.calculate3D();
                	renderWalls.push(wall);
            	}
        	});
 
        	if (renderWalls.length >= 1) {
            	let sorted = wallsToGraph(renderWalls);
            	if (sorted.length <= 1) sorted = [0]
            	sorted.forEach(index => {
                	renderWalls[index].display3D();
            	});
        	}
 
        	drawing.start();
        	touchControls();
 
        	requestAnimationFrame(gameLoop);
    	}
 
    	// background terrain
    	function background() {
        	// ctx.fillStyle = '#00d2ff';
        	ctx.fillStyle = "#64a7ff";
        	ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height);
        	ctx.fillStyle = "#969696";
        	ctx.fillRect(0, -canvas.height / 2, canvas.width, canvas.height);
 
        	ctx2D.fillStyle = 'gray';
        	ctx2D.fillRect(0, 0, canvas2D.width, canvas2D.height);
 
    	}
	</script>
</body>
</html>


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     Raycasting. Wikipédia : l’encyclopédie libre [en ligne]. Dernière modification de la page le 22 juillet 2021 à 22:17.
    [Consulté le 2 octobre 2021]. Disponible à l’adresse : [https://fr.wikipedia.org/wiki/Raycasting](https://fr.wikipedia.org/wiki/Raycasting)

[^2]:
     SHIFFMAN Daniel, 2019 Coding Challenge #146 : Rendering Raycasting _[enregistrement vidéo]_. _YouTube_ [en ligne]. Disponible à l’adresse : [https://youtu.be/vYgIKn7iDH8](https://youtu.be/vYgIKn7iDH8). 

[^3]:
     Plan 2D du joueur entouré d’obstacles ; image générée à partir de mon code, HAMELINK Marcus, 2021.

[^4]:
     Le développement de la formule mathématique de l’intersection se trouve en Annexe a)

[^5]:
<p>
     Plan 2D avec les points d’intersections de 18 rayons calculés ; image générée à partir de mon code, HAMELINK Marcus, 2021

[^6]:
<p>
     Plan 2D avec les points d’intersections de 90 rayons calculés ; image générée à partir de mon code, HAMELINK Marcus, 2021

[^7]:
     Il existe un guide complet pour réaliser cette méthode, Raycasting, Lode Vandevenne, 2004-2020, Disponible à l’adresse : [https://lodev.org/cgtutor/raycasting.html](https://lodev.org/cgtutor/raycasting.html)

[^8]:
     Voir point b) de l’Annexe pour une explication détaillée de cette fonction

[^9]:
     La fonction _isIntersection()_ dont l’explication se trouve dans l’Annexe a)

[^10]:
     Visualisation des obstacles intersectant avec les vecteurs de champ de vision par des points (jaune pour l’extrémité gauche de l’obstacle, et bleu pour l’extrémité droite); image générée à partir de mon code, HAMELINK Marcus, 2021

[^11]:
     Line-line intersection. Wikipédia : l’encyclopédie libre [en ligne]. Dernière modification de la page le 6 octobre 2021 à 21:04. [Consulté le 9 octobre 2021]. Disponible à l’adresse:  [https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection)

[^12]:
     Représentation de l'anti commutativité du produit vectoriel, (auteur inconnu), 2008, Disponible à l’adresse : [https://commons.wikimedia.org/wiki/File:Cross_product_vector.svg](https://commons.wikimedia.org/wiki/File:Cross_product_vector.svg)
