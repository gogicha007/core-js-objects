const cssSelectorBuilder = {
  answer: '',

  element: function(value) {
      this.error(1);
      let obj = Object.create(cssSelectorBuilder);
      obj.i = 1;
      obj.answer = this.answer + value;
      return obj;
  },

  id: function(value) {
      this.error(2);
      let obj = Object.create(cssSelectorBuilder);
      obj.i = 2;
      obj.answer = this.answer + '#' + value;
      return obj;
  },

  class: function(value) {
      this.error(3);
      let obj = Object.create(cssSelectorBuilder);
      obj.i = 3;
      obj.answer = this.answer + '.' + value;
      return obj;
  },

  attr: function(value) {
      this.error(4);
      let obj = Object.create(cssSelectorBuilder);
      obj.i = 4;
      obj.answer = this.answer + '[' + value + ']';
      return obj;
  },

  pseudoClass: function(value) {
      this.error(5);
      let obj = Object.create(cssSelectorBuilder);
      obj.i = 5;
      obj.answer = this.answer + ':' + value;
      return obj;
  },

  pseudoElement: function(value) {
      this.error(6);
      let obj = Object.create(cssSelectorBuilder);
      obj.i = 6;
      obj.answer = this.answer + '::' + value;
      return obj;
  },

  combine: function(selector1, combinator, selector2) {
      let obj = Object.create(cssSelectorBuilder);
      obj.answer = selector1.answer + ' ' + combinator + ' ' + selector2.answer;
      return obj;
  },

  stringify: function() {
      return this.answer;
  },

  error: function(newi) {
      if (this.i > newi) throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
      if (this.i == newi && (newi == 1 || newi == 2 || newi == 6)) throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
  },
};


const builder = cssSelectorBuilder;

console.log(builder.element('div').id('nav-bar').stringify());
console.log(builder.element('li').id('main').stringify());
console.log(
  builder
    .combine(
      builder.element('p').pseudoClass('focus'),
      '>',
      builder.element('a').attr('href$=".png"')
    )
    .stringify()
);
