# Animations
Animations Node
---------------

This is the main animation controller. 

### Creating animations. 

Literally just create a clip you can create animations by keyframing stuff

Controlling animations by code
------------------------------

```text-plain
AnimPlayer.play("clip_name")

# you can also control playback speed
AnimPlayer.play(clip, -1, speed)
# idk what the negative 1 is for but it's the second argument so.....
```

Using animation for complicated events
--------------------------------------

Sometimes when an event happens in the game. you want a series of things to happen in time. main benefit of this si that you can time the events

### Changing variables in the inspector

you can just add tracks and keyframe every variable that you can change in the inspector

### Calling our custom functions

To do this just go to the animation window and add an event track to the window. and you can call an function