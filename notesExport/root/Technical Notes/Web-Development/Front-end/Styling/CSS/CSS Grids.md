# CSS Grids
**CSS Grid**
------------

#### **Generally**

Dividing a div into a grid to place it's children

🌐 [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)

#### Grid vs flexbox

flexbox is more _flex_ible. The layout reacts to number of children and their sizes. Think of the pinterest laytout. Grid is a lot more static and defined. The parent div defines the layout rather than the children

##### Using grid and flexbox

Most of the time you layout sections of a site with grid. Then inside each section is laid out by flex box.

#### **Usage**

##### Making a grid

in html

```text-plain
<div class="parentContainer">
  <div class="childElement"/>
  <div class="childElement"/>
  <div class="childElement"/>
</div>
```

in css put below

```text-plain
.parentContainer{
  display: grid;
}
```

##### Setting rows and columns

every measurement is one extra cell

```text-plain
.parentContainer{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; //defines width of columns
  grid template rows: 50px auto 70px; // define heigth of rows
}
```

Handling gaps between grid cells

```text-plain
.parentContainer{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; //defines width of columns
  grid template rows: 50px auto 70px; // define heigth of rows
 
  /*setting grid*/
  gap: {row-gap} {column gap}
  column-gap: 10px;
  row-gap: 1em;
}
```

##### Placing children in the the rows and columns

```text-plain
/*define where grid children goes*/
.parentContainer{
  display: grid;
  grid-template-areas: 
  "topbar  topbar   topbar"
  "ads     content  sidebar"
  "footer  footer   footer"
}

/*label children classes*/
.header{grid-area: topbar;}
.aside{grid-area: ads;}
.article{grid-area: content;}
.nav{grid-area: footer;}
.footer{grid-area: footer;}
```

#### **Aligning and Justify children**

*   in parent (applies to all cells)

```text-plain
.parentContainer{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; //defines width of columns
  grid template rows: 50px auto 70px; // define heigth of rows
 
  align-content: /*works just like flexbox but in children class*/
  justify-content: /*works just like flexbox but in children class*/
}
```

*   in children (applies to one children class)

```text-plain
.childrenClass{
  align-self: /*works just like flexbox but in children class*/
  justify-self: /*works just like flexbox but in children class*/
}
```