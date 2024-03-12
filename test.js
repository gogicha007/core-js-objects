const cssSelectorBuilder = {
  result: '',
  sequence: {
    element: 1,
    id: 2,
    class: 3,
    attribute: 4,
    pseudoCla: 5,
    pseudoEl: 6,
  },
  lastWord: '',

  currentState() {
    this.result += this.lastWord;
  },

  element(value) {
    this.lastWord = value;
    this.currentState();
    return this;
  },

  id(value) {
    this.lastWord = `#${value}`;
    this.currentState();
    return this;
  },

  class(value) {
    this.lastWord = `.${value}`;
    this.currentState();
    return this;
  },

  attr(value) {
    this.lastWord = `[${value}]`;
    this.currentState();
    return this;
  },

  pseudoClass(value) {
    this.lastWord = `:${value}`;
    this.currentState();
    return this;
  },

  pseudoElement(value) {
    this.lastWord = `::${value}`;
    this.currentState();
    return this;
  },

  combine(selector1, combinator, selector2) {
    this.lastWord = `${selector1} ${combinator} ${selector2}`;
    this.currentState();
    return this;
  },
  stringify() {
    this.lastWord = this.result;
    this.result = '';
    return this.lastWord;
  },
};

const builder = cssSelectorBuilder;

console.log(builder.element('div').id('nav-bar').stringify());
console.log(builder.element('div').id('nav-bar').stringify());
console.log( builder
  .combine(
    builder.element('p').pseudoClass('focus'),
    '>',
    builder.element('a').attr('href$=".png"')
  )
  .stringify());
