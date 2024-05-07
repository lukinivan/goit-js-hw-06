class Test {
  constructor(obj) {
    this.name = obj.name;
    this.numbers = obj.numbers;
  }

  getName() {
    return this;
  }

  concatName(value) {
    return this.name + ' ' + value;
  }

  setName(newName) {
    this.name = newName;
  }
}

const newTest = new Test({ name: 'Admin', numbers: [5, 3, 56, 6, 8] });

console.log(newTest.concatName('User'));
