

<!-- Start datastructures/ZombieStructure.js -->

# [ZombieStructure.js](ZombieStructure.js)

Model for Zombies. Extends SpotStructure.

a zombie is a spot that will be revealed if the player is near the spot

## pathToPlayer

world points indicating the route to the player
the point that is farest away is the zombie point (spot point)
and the other points are for orientation

## left

left position of zombie

## top

right pos of player

## name

name of spot is zombie

## isMoving

determines whether the zombie is moving or not

## hasAllPoints

a flag if all points are injected

## rotation

current rotation of zombie

## moveX

move value X, if a zombie is moving to a point
this is the value that is added to the current zombies x value

## moveY

move value Y, if a zombie is moving to a point
this is the value that is added to the current zombies y value

## movePointIndex

the index of the current point to which zombie is currently moving to

## takeBreak

if set to true zombie takes a break time of milliseconds defined in
breakTimeout

## breakTimeout

time zombie is taking a break

## isHunting

if this is set to true the zombie has detected the player and will
move to his location

## hitCount

how many bullet hits a zombie took

## placedPointCount

the points that are placed in playground

## dead

whether zombie is dead or not

## bodyParts

body parts of zombie
resistance: a bullet that hits the left arm will be discharged by the resistance
dead: a body part can be dead or not functioning anymore if the resistance is down
isCritical: when this bodypart is critical the first hit results in the immediate
            death of the zombie

<!-- End datastructures/ZombieStructure.js -->

