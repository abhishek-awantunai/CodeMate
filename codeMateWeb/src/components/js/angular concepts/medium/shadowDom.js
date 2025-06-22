/**

  DOM - It is a in memory representation of our HTML in the form of Objects.

  Shadow DOM - It is like a parallel DOM tree hosted inside a component(an HTML element, not to be confused with Angular components), hidden away from the main DOM tree which has their own, isolated scope for the element they represent.
  It is the implementation of the Shadow DOM standard that allows view, style, and behavior encapsulation
  It lets us create custom components or in other words create scoped DOM Trees inside our elements.Css in HTML won't affect css in shadow DOM.

  Virtual DOM - It is an abstraction on top of the actual DOM where an ideal, or "virtual" representation of a UI is kept in memory and synced with the real DOM.  


  Shadow vs Virtual
  Both create a separate instance of the Document Object Model; besides this, both concepts are different. Virtual DOM is creating a copy of the whole DOM object, and Shadow DOM creates small pieces of the DOM object which has their own, isolated scope for the element they represent.

*/
