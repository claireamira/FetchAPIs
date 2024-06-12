class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
    }
}

let person1 = new Person("John", 44)
let person2 = new Person("Luke", 47)

person1.introduce()
person2.introduce()



class Rectangle {
    constructor(width, length) {
        this.width = width
        this.length = length
    }
    getArea() {
        let area = this.width * this.length
        return area

    }
    getPerimeter() {
        let perimeter = ((this.width + this.length) * 2)
        return perimeter
    }

}
let myRectangle = new Rectangle(20, 30)


console.log(myRectangle.getArea())
console.log(myRectangle.getPerimeter())


class Animal {
    constructor(type, modeofMovement) {
        this.type = type
        this.modeofMovement = modeofMovement
    }
    produceSound() {
        console.log("Barking")
    }
}
class Dog extends Animal {
    constructor(type, modeofMovement, breed) {
        super(type, modeofMovement)
        this.breed = breed
    }
}

let newAnimal = new Animal("Mammal", "Walks")
newAnimal.produceSound()

let newDog = new Dog("Mammal", "Walks", "Husky")
newDog.produceSound()

class Cat extends Animal {
    constructor(type, modeofMovement, breed, furColor) {
        super(type, modeofMovement)
        this.breed = breed
        this.furColor = furColor
    }
    produceSound() {
        console.log("Purr")
    }
}


let newCat = new Cat("Mammal", "Walks", "Persian", "White")
newCat.produceSound()

{
    class Vehicle {
        constructor(make, model, year) {
            this.make = make
            this.model = model
            this.year = year
        }
        getDetails() {
            console.log(`Make: ${this.make} Model: ${this.model} Year: ${this.year}`)
        }
    }
    class Car extends Vehicle {
        constructor(make, model, year, fuelType) {
            super(make, model, year)
            this.fuelType = fuelType
        }
        getDetails() {
            console.log(`Make: ${this.make} Model: ${this.model} Year: ${this.year} Fuel type: ${this.fuelType}`)

        }
    }
    let myVehicle = new Vehicle("Porche", "Cayenn", 2020,)
    let myCar = new Car("Ford", "Ranger", 2019, "petrol")

    myVehicle.getDetails()
    myCar.getDetails()
}