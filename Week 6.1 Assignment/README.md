This week was massively difficult. Even while creating my project for this, I had to change ideas and concepts multiple times, to an almost exhausting amount. My intial thought was to create a class of moving objects (like the SadFace example), and then allow them to be interacted with in the same way our bricks example was.

First, I created my circles class, setting a number of variables that nearly matched SadFace. Within an hour and a half of messing with the code and fixing bugs, I had gotten a number of circles to move around the canvas, bouncing off the walls and all. I added in the ability to start in a random direction from the starting position and everything sorted out fairly well to begin.

The next challenge was creating the ability to click on the circles to change something. I focused on creating a color change first, and had to try almost four or five times before I realized exactly where I should link all my class functions and such to keep everything running.

Adding the dissapearence of the circles was easy. I just added an else, a visible variable, and created a boolean array to allow me to change the chance of dissapearance would be -- but creating the trueFalse variable as [true, true, true, false], I was able to give the circles a 25% chance of dissapearing with every click, which was about what I wanted. Next up was the reset button.

Creating the button in relation to my height was simple, but despite how much i tried, I couldn't figure out a way to allow for the circles to bounce off of the button as well -- if we could discuss ways to do that (I feel like we had discussed it before), that would be wonderful.

From there, everything was troubleshooting and smooth riding!

And then we were told to add more, and things got... complicated. I created a startup screen where the user can choose the level of difficulty -- i.e., how many circles appear onscreen. To do this, I created different text arguments, then created grey rectangles around them. Then, I created a new mousePressed that checks that. This created the necessity for an if statement throughout the entire function to ensure that the clicks in the start menu would be seperate from the rest of the functions.

I then created a victory screen, and everything was VERY simple -- I was done within five minutes, just creating text with a randomly changing color base. After a few tests, only one new problem had arisen.

My sketch.js had almost 180 lines of code, and was almost impossible to read -- so I created three more .js files, one for each of the main types of screen -- the startup, the game itself, and the victory screen. I did some bug testing as I separated everything, and eventually sorted out the entire function.

I'm massively proud of this week.
