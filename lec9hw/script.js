"use strict";

// 1) Create a Car class with properties make, model, and year,
//  then make instance of electric car which have battery level

// 2) Create a Library class that stores a list of books (as an array) which have following methods addBook(),
//  removeBook(), listBooks()

// 3) Create a class Employee with a method calculateSalary() that calculates salary based on hours
// worked and hourly rate.

// 4) Create a class ShoppingCart that holds a list of items.
//  methods, addItem(), deleteItem(), updateItem(), calculateTotal()

// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars

//////////////////////////

// 1
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  carInfo() {
    console.log(
      `car brand: ${this.make}, model: ${this.model}, production starting from: ${this.year}`
    );
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  }
  electricCarInfo() {
    console.log(`tesla model 3: Battery level ${this.batteryLevel}%`);
  }
}

const car1 = new Car("nissan", "r" + 32, 1989);
const car2 = new Car("ferrari", 812 + "sf", 2017);
const elCar = new ElectricCar("Tesla", "Model 3", 2021, 85);

car1.carInfo();
car2.carInfo();
elCar.electricCarInfo();
// --------------------

// 2
class Library {
  constructor(initialBooks = []) {
    this.books = initialBooks;
  }
  addBook(titles) {
    this.books.push(titles);
  }
  removeBook(titles) {
    this.books.splice(titles);
  }
  listBooks() {
    this.books.forEach((book) => {
      console.log(book);
    });
  }
}

const lib1 = new Library([
  "The Great Gatsby",
  "1984",
  "To Kill a Mockingbird",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Moby Dick",
  "War and Peace",
  "The Hobbit",
  "Fahrenheit 451",
  "The Lord of the Rings",
]);

lib1.addBook("GoT");
lib1.removeBook(5, 1);
lib1.listBooks();
// --------------------

// 3
class Employee {
  constructor(hours, day) {
    this.hours = hours;
    this.day = day;
  }

  getSalary() {
    return this.hours * this.day;
  }
}

const calc = new Employee(50, 3);

console.log(calc.getSalary());
// --------------------

// 4
class ShoppingCart {
  constructor(initialItems = []) {
    this.cart = initialItems;
  }

  addItem(item) {
    this.cart.push(item);
  }

  deleteItem(item) {
    const index = this.cart.findIndex((el) => el.title === item);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  updateItem(oldItem, newItem) {
    const index = this.cart.findIndex((el) => el.title === oldItem);
    if (index !== -1) {
      this.cart[index] = newItem;
    }
  }

  calculateTotal() {
    return this.cart.reduce((tot, cur) => tot + cur.price, 0);
  }
  listItems() {
    return this.cart;
  }
}
const cart = new ShoppingCart([
  { name: "Apple", price: 1.0 },
  { name: "Banana", price: 0.5 },
  { name: "Orange", price: 0.75 },
  { name: "Milk", price: 2.0 },
  { name: "Bread", price: 1.5 },
  { name: "Eggs", price: 3.0 },
  { name: "Chicken", price: 5.0 },
  { name: "Rice", price: 2.25 },
  { name: "Pasta", price: 1.75 },
  { name: "Cheese", price: 4.0 },
]);

cart.addItem({ name: "book", price: 200 });
cart.deleteItem({ name: "Eggs", price: 3.0 });
cart.updateItem("Banana", { title: "Banana", price: 3.7 });

console.log(cart.listItems());
console.log(cart.calculateTotal());
// --------------------

// 5
class CarFactory {
  constructor(initial = []) {
    this.factory = initial;
  }

  addCar(car) {
    this.factory.push(car);
  }

  deleteCar(car) {
    const index = this.factory.findIndex((el) => el.title === car);
    if (index !== -1) {
      this.factory.splice(index, 1);
    }
  }

  updateCar(oldCar, newCar) {
    const index = this.factory.findIndex((el) => el.title === oldCar);
    if (index !== -1) {
      this.factory[index] = newCar;
    }
  }

  getAllCars() {
    return this.factory;
  }
  listCars() {
    return this.factory;
  }
}

const carBrands = new CarFactory([
  "Toyota",
  "Ford",
  "Honda",
  "Chevrolet",
  "Nissan",
  "BMW",
  "Mercedes-Benz",
  "Volkswagen",
  "Hyundai",
  "Kia",
]);

carBrands.addCar("Porsche");
carBrands.deleteCar("BMW");
carBrands.updateCar("Kia", "Nissan");

console.log(carBrands.listCars());
console.log(carBrands.getAllCars());
