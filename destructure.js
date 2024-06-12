const person = {
    name: "Joseph",
    lname: "Kamau"
    age: 22,
    county: "Kiambu",
    school: {
        name: "St. Martins ",
        location: "Northern",
        level: "National"
    }
}
//let name = person.name
//let age = person.age
//let county = person.county

const { name, age, county, fullname = `${name} ${lname}` } = person

let salary = person.salary ? person.salary : 10,000

let salary = age > 50 ? 10,0000 : 20,000


cars = [{color: "blue", make:"Audi", cc: 1800},
    {color:"pink", make:"Isuzu", cc: 1500}
]

cars.forEach({color, make, cc} => {
    console.log(`The car is a ${color} ${make} with ${cc} power`)
    
});