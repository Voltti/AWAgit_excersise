function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.hello = () => {
    console.log(
      `Hello! I am ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`
    );
  };
}
