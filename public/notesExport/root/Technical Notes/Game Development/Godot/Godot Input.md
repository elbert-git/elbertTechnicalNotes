# Godot Input
The input map
-------------

In the menu bar Go to project>project setttings. then go to the input map tab. here you can set the buttons to input names. like click to shoot or space for jump

Listening for mouse inputs
--------------------------

Use the `_unhandled_input(event)` function. this listen to mouse inputs

```text-plain
func _unhandled_input(event):
	# check if is mouse input
	if event is InputEventMouseMotion:	

		_rotation_input = -event.relative.x
		_tilt_input = -event.relative.y
```

### Mouse modes

You can set mouse modes, like locking mouse in center 

```text-plain
Input.mouse_mode = Input.MOUSE_MODE_CAPTURED # lock to center and make invisible
# input.MOUSE_MODE_VISIBLE # cursor visible
# input.MOUSE_MODE_HIDDEN # hide cursor
# input.MOUSE_MODE_CAPTURED # lock to center and invisible
# input.MOUSE_MODE_CONFINED # lock mouse to game window
# input.MOUSE_MODE_CONFINED_HIDDEN # lock mouse to game window and hide mouse
```

Listening to button events
--------------------------

Getting it by input input name

```text-plain
Input.is_action_pressed("input_name") # bool for button is pressed
Input.is_action_just_pressed("input_name") # one time event button down
Input.is_action_just_released("input_name") # one time event button up
```

Input Vector
------------

Useful shorthand from creating input vectors for movement

```text-plain
var input_dir = Input.get_vector("move_left", "move_right", "move_forward" ,"move_backward")
```