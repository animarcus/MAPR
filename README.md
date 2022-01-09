# Ray casting

This project was done for my high school graduation and it's inspired by a habitual way of creating a 3D first-person perspective of a player dropped into a map who is surrounded by walls.
[Lodev has a great tutorial that goes much further than me into his engine](https://lodev.org/cgtutor/raycasting.html) but I had a specific way I wanted to do the rendering and I wanted it to work in any web browser (including on mobile).

### A different approach to 3D rendering

In my last year of high school, I had to give in a report as a graduation project. I was fascinated by the use of Ray casting for use in a rendering engine, just like what the first 3D games like [Wolfenstein 3D](https://en.wikipedia.org/wiki/Wolfenstein_3D) did.
My plan was to use an exisiting method to create my own 3D rendering engine that would make it easy for anyone to create levels in which one could explore from a first person perspective. However, after implementing it, I didn't like how pixelated it looked and the fact that if you wanted more detail you would need to greatly increase the number of rays, which most likely lowers performance. [A demonstration can be found here](http://mhamelink.com/raycasting-v2) or the code can be found on my github page [under the raycasting-v2 repository](https://github.com/animarcus/raycasting-v2)

So I went to work to create a new algorithm to fix my problem. By drawing polygons for the walls, I can have much more detail without having to generate any rays in-between because I'm using the wall's vertices for the calculations.

After a year of work, I was finally able to get the features I had in my original implementation working with my new algorithm.
If I had the time, I would create a full javascript library where one could easily draw out levels and play inside them.
Maybe my plan isn't possible due to performance limitations, or maybe it is not interesting enough to make a game with this.
Nonetheless, I have learned a lot from building this project especially in math.

I was able to apply what I had learned throughout the year in math class on vector geometry and I also discovered the use of Graphs for POSETs (Partially Ordered Sets for which we use DFS to sort).