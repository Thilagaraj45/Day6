class Person {
    constructor(firstName, lastName, age, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getAddress() {
      return this.address;
    }
  
    setAddress(address) {
      this.address = address;
    }
  }
  const person = new Person("John", "Doe", 30, "123 Main St");
console.log(person.getFullName()); 
console.log(person.getAge()); 
console.log(person.getAddress()); 
person.setAddress("456 Oak Ave");
console.log(person.getAddress());



// 2. wirte a class to get a uber price


class uber {
  constructor(rate, distance){
    this.rate = rate;
    this.distance = distance;
  }
  getAmount() {
    return this.rate * this.distance;
  }
}
let UberPrice = new uber(12,3);
console.log('UberPrice:', UberPrice.getAmount());
