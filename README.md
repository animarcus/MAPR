# MAPR

Stands for **M**arcus' **A**lgorithm for **P**seudo-3D **R**endering

---

This project was created for a high school graduation project and it's based on a pseudo-3D way of rendering called [Raycasting](https://en.wikipedia.org/wiki/Ray_casting). While I started out implementing it, I ended up not liking the way it looked so I set out to create my own technique for rendering. I also decided to create a cool acronym for it, because it is a whole new method I have yet to come across. Hence, the name MAPR. ([Also the domain name for the web site](https://mapr.me/))

I wrote a full report about how all the features work in french. [It can be found here](https://github.com/animarcus/raycasting/tree/main/dossierEcrit). The folder includes a markdown file that I used to convert into a pdf with Pandoc. I plan on translating the whole document but I do not have the time yet.

---

## A different approach to 3D rendering

In my last year of high school, I had to give in a report as a graduation project. I was fascinated by the use of Raycasting for use in a rendering engine, just like what the first 3D games like [Wolfenstein 3D](https://en.wikipedia.org/wiki/Wolfenstein_3D) did.
My plan was to use an exisiting method to create my own 3D rendering engine that would make it easy for anyone to create levels in which one could explore from a first person perspective. However, after implementing it, I didn't like how pixelated it looked and the fact that if you wanted more detail you would need to greatly increase the number of rays, which most likely lowers performance. [A demonstration can be found here](http://mhamelink.com/raycasting-v2) or the code can be found on my github page [under the raycasting-v2 repository](https://github.com/animarcus/raycasting-v2)

So I went to work to create a new algorithm to fix my problem. By drawing polygons for the walls, I can have much more detail without having to generate any rays in-between because I'm using the wall's vertices for the calculations.

I was able to apply what I had learned throughout the year in math class on vector geometry and I also discovered the use of Graphs for POSETs (Partially Ordered Sets for which we use DFS to sort).
