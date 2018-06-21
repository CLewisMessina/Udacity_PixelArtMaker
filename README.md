
# Pixel Art Maker

This <a href="https://www.netflix.com/title/80057281" target="_blank">*Stranger Things*</a> themed program enables users to create pixel art based on a grid size of their specification.

![](https://raw.githubusercontent.com/CLewisMessina/Udacity_PixelArtMaker/master/pixel_art_maker/img/PAM.png)

**Code base:** HTML, CSS, JavaScript, jQuery, JSON

**JS Libraries:** jQuery, SnapSVGAnimator

**Visual Components:** .SVG

**Code Tools:** MS Visual Studio Code, Affinity Designer, Adobe Animate CC

**Working Example:** https://clewismessina.com/pixel_art_maker/




## REFACTOR NOTES

This was a final project for Part 1 of Udacity's Front End Development Course. At the time, some things were beyond my current capabilities. Here are some code points I'd refactor:

### HEADER
I really wanted the header to animate as it does in the Stranger Things opening credits. This required the use of a special (i.e. non-system) font: ITC Benguiat Standard. This meant, I couldn't use or import a font-library and move the letters via CSS animation. I had to create the graphics as an SVG, convert text to curves and then find some way to animate each letter.

I wasn't as proficient with SVG animation as I am now, so I did what anyone would: I read everything I could on the topic, created a very good SVG, then tried my hand at it using Adobe Animate CC. Animate is a beast posing as a housepet. Finessing working SVG animations from it requires a lot of patience and, perhaps, a priest. I did get it working. The resulting code required an SVG library (SNAPSvg), a really crazy JSON file and is not very responsive (i.e. it remains in a predefined SVG canvas object).

If I were to refactor, I'd animate the SVG curves through pure CSS and add media queries so that it responded with different view ports and wasn't bloated with the additional JSON and SNAPSvg library.


### CROSS BROWSER COMPATIBILITY
The code uses the input type "color" for users to select the color they'd like to apply to their grid art. This works great... in Chrome. Unfortunately, it's only supported in moble on Android 4.4, and it's desktop support varies by browser (as always, Internet Explorer hates it).

I don't see this as a flaw in the code, so much as an issue with the project specifications, but this is also a learning issue. When a client (in this case, Udacity) asks you to make something reliant on browser technology, it's always a good idea to see if there are cross-browser compatibility issues. caniuse.com and Mozilla's <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docs</a> and <a href="https://caniuse.com/" target="_blank">caniuse.com</a> are great sources to check for that.


### PROJECT JOYS
Since the app requires so little functionality, there weren't many places to create an interface that reflected the Stranger Things theme without being unintrusive, unneccessary or simply garrish. Seeing the header work as hoped was very exciting- particularly after the crash course in SVG, Adobe Animate CC and the SVG Snap library. 

Another exciting part was conceptualizing and realizing the form buttons. When you hover, they change to dispay words. In this app, the bat transforms to a 'submit' button and the bear trap transforms to a 'reset'. A bat with nails sticking through it is an apt way to make something 'submit'. The bat image I've created references the bat Steve used to fend back the alien monster. The bear trap was used in same scene, and seems a fitting 'reset' object, considering one resets traps.

I tried many different methods to make them, but these buttons are SVG's, layered over one another on css cards. Hovering hides the main image and shows the other (e.g. bat to submit wording). This took a lot of work to get right, but I did and am very proud of the result.

Lastly, I was really excited when I saw how a simple loop can be used to create a table (see the main.js file). The table is created by looping through a couple of html tr's and td's. I had no idea one could even do that before this project. This concept is essential to teplating languages (e.g. EJS, PUG, Jade) and makes for a lot of exciting possibilities from the server side. 

