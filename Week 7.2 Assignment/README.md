Normally, when I create something, and something goes wrong, it's fairly easy for me to find the place where my logic is broken, and then fix it. This assignment, however? I wasn't so lucky. I tried to do as much as possible without looking at more code -- so everything here is stuff of my own creation.

Creating the PacMen was easy. Once I had all 7 generating consistently, I proceeded to get them to move. Once again, setting the random movement speed was easy, and building my wallCheck function was nothing new and unusual. Next, I built the timer by using an incremental counter. Now I had PacMen that went in a random direction at random intervals, and would stop when they hit walls. So far, so good -- all of that section was done within 40 minutes, and I moved along.

Changing the pacPack's direction was where my first problems began. For some reason, I had to add the function floor() to my randomizer in line 80 of the pacman.js. Though I know floor() is supposed to make a random only pick integers, I was able to use randoms earlier that needed integers, but weren't -- so I'm a little confused in that regard. However, choosing direction was simple beyond that. I also had some problems getting rotate to work, so I ended up creating a seperate function for fully changing the direction of the pacman.

Next, I tried to get the mouth moving. I was never able to get this section working. My thought was that I remove PI from the variables of startAngle and endAngle, and place that PI in the actual arc() function. From here, I could increment the mouth movement by changing the multiplier. I made all the fractions have the same base of 1/256, because the movement of each angle moving worked if they changed at 1/256 * PI radians each frame was the speed I wanted. The mouth began to close as it was supposed to, but for some reason, the if statement at line 164 of pacman.js refused to work for me. I spent about five hours, but to no avail. I still have everything left in, but I commented out the line that called the pacChews() function -- to see the glory that is a Pacman army with an infanity closing mouth, one can bring back line 50 of the pacman.js

Anyway, the Pacmen interacting.

[Me](https://admin.mashable.com/wp-content/uploads/2013/07/Dr.-Who.gif)

I don't know why it works sometimes and doesn't work others. I set everything up, and it just... doesn't. I spent 5 hours a day for four days trying desperately to find where the error in my logic flow was, if something was just facing the wrong direction... and ended up with this. The Pacmen will sometimes do exactly what I want them to -- but sometimes, they'll just overlap majorly and just sit there, refusing to move again. I checked it against your code and Connor's code, and I had two reactions.

I thought I had done the same thing as Connor, but apparently I hadn't, and I had no idea what was happening in yours. It confused me.

This assignment was massively difficult -- I spent only about 4 hours actually creating what I have, but nearly another 30 trying to figure out what was wrong -- and I still never did.
