let content = '';
// var error = '';
// var opDiv = document.querySelector('#output');
// var opErrDiv = document.querySelector('#opError');

const person = {
  name: 'Alice',
  age: 25,
  state: null,

  currentState() {
    content += 'The current state: ' + JSON.stringify(this.state) + '<br>';
  },

  eatFood() {
    this.state = 'Eating food.';
    this.currentState();
    return this;
  },
  playCricket() {
    this.state = 'Playing Cricket';
    this.currentState();
    return this;
  },
  sleep() {
    this.state = 'Now Sleeping.';
    this.currentState();
    return this;
  },
  jump() {
    this.state = 'Jumping High.';
    this.currentState();
    return this;
  },
  walk() {
    this.state = 'Morning Walking.';
    this.currentState();
    return this;
  },
  doWork() {
    this.state = 'Doing my work.';
    this.currentState();
    return this;
  },
  stringify(){
    return content
  }
};

console.log(person.sleep().walk().jump().eatFood().doWork().sleep().stringify())
