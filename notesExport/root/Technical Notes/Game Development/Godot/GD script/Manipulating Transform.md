# Manipulating Transform
This is weirdly a confusing thing to do. So I want to make notes of it

Basis vectors![](Manipulating Transform_image.p)
------------------------------------------------

every transform has a basis vector. They are 3 vector3s. each corresponding to a local xyz direction of the object.  You commonly use this to get the local vector directions

```text-plain
transform.basis # are 3 vector3s
tranform.basis.z # is the local forward vector
```

Positions, Rotation and Scale
-----------------------------

They are obvious, you just go object.rotation or scale or positions as per your intuition

### Rotate object

```text-plain
rotate(axis:vec3, amount:number)
```