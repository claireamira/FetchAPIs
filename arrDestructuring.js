cars = [{color: "blue", make:"Audi", cc: 1800},
    {color:"pink", make:"Isuzu", cc: 1500}
]

cars.forEach(({color, make, cc}) => {
    console.log(`The car is a ${color} ${make} with ${cc} power`)
    
});