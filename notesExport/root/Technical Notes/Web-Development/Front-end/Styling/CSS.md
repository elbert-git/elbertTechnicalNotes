# CSS
**\-|- CSS**
------------

**Selectors**
-------------

#### Basics

```text-plain
#idName            // by id
.className         // by class
div                // by element name
*                  // everything
```

#### By hierachy

```text-plain
selector > selector              // by any children
selector selector                // any children/grandchildren
selector, selector               // and
```

#### By relation

```text-plain
selector.selector         // any element that fulfills all selectors
selector+selector         // element that follows first element
selector~selector         // element that precedes first element
```

#### By states

```text-plain
div :: hover
div :: active
div :: focus
```

#### By attributes

```text-plain
selector[attribute=value]  //selects by html attribute
```

### Reliability notes

Debugging css
-------------

[https://www.youtube.com/shorts/ii-lSK2\_Nu4](https://www.youtube.com/shorts/ii-lSK2_Nu4)

Use this to add outlines or a background to everything. This helps you see what's taking space and see all the boxes in sections

```text-plain
*{
	outline: solid 3px rgba(255, 0, 0, 0.3);
	background-color: rgba(255, 0, 0, 0.3);
}
```