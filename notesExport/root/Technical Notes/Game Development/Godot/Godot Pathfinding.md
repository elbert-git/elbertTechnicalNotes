# Godot Pathfinding
Creating a Nav-Mesh
-------------------

Create a navigation 3d region and parent all the relevant map static bodies under it. Then create a navmesh entry  in the inspector then click `bake navmesh`.

Creating the Navigation Agent
-----------------------------

Parent a Navigation Agent node under a character body then have this script snippet to make it move

```text-plain
$NavigationAgent.target_position = some_vec3_position;
# ...
func navigate():
	var direction = Vector3()
	direction = $NavigationAgent.get_next_path_position()
	direction.normalized()
	velocity = velocity.lerp(direction*speed, accel * delta)
	move_and_slide()
```