//*****************************ARRAY ASSIGNMENT***********************

// Create
const fruits = ["Apple", "Banana", "Mango"];

// Access first Element
console.log(fruits[0]);

// Access last Element
console.log(fruits[fruits.length - 1]);

// Replacing an Array "Banana" with "Orange"
fruits[fruits.indexOf('Banana')] = "Orange"
console.log(fruits)

//Adding "Pineapple" at end
fruits.push("Pineapple")
console.log(fruits);

//Removing first element
fruits.shift()
console.log(fruits);

//creation of new array with the length of each fruit name using map method
const fruitsLength = fruits.map((e) => {
    return e.length
})
console.log(fruitsLength);

//creation of new array that have more than 5 letters using filter method
const fivePlus = fruits.filter((e) => {
    return e.length > 5
})
console.log(fivePlus);

//Sorting fruits array in alphabetical order
console.log("Before Sorting:", fruits);
fruits.sort()
console.log("After Sorting:", fruits);

//Reversing the sorted array
console.log("Reverse array", fruits.reverse());

//find to get the first fruit that contains the letter "g"
console.log(fruits.find((e) => {
    return e.includes('g')
}));

//find the index of Mango
console.log(fruits.indexOf('Mango'));

//Array Tranformation with "map" and "filter"
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//creating new array which is squared of each number using map
const squared = numbers.map((e) => {
    return e ** 2
})
console.log("squared array ", squared);

//creating a new array contains even number only from numbers array using filter
const even = numbers.filter((e) => {
    return e % 2 === 0
})
console.log("even array ", even);

//Reduce Method
//total amount spent
const expenses = [{ amount: 50, category: 'Groceries' }, { amount: 20, category: 'Transportation' }, { amount: 100, category: 'Entertainment' }, { amount: 80, category: 'Groceries' }, { amount: 30, category: 'Transportation' }];
const totalAmount = expenses.reduce((acc, curr) => {
    acc = acc + curr.amount
    return acc
}, 0)
console.log("Total expenses ", totalAmount);

//Expenses by Category
const totalAmountForEachCategory = expenses.reduce((acc, curr) => {
    // acc[curr.category]=(acc[curr.category]||0) + curr.amount
    if (acc[curr.category]) {
        acc[curr.category] += curr.amount
    }
    else {
        acc[curr.category] = curr.amount
    }
    return acc
}, {})
console.log(totalAmountForEachCategory);


//Array Flattening
//create a nested array
const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]]
console.log(nestedArray.flat(3));


//*****************************OBJECT ASSIGNMENT***********************

//Create and Access Properties:
//Create an Object car with properties: make,model,and year

const car = {
    make: "Mercedes-Benz",
    model: "M-Class",
    year: 2000
}

//Accessing make and year
console.log("make:", car["make"]);
console.log("year:", car.year);

//Modify Object Properties:
//change model to Camry
console.log("model:", car.model = "Camry");

//add new property color with value "blue"
car["color"] = "blue"
console.log(car);

//for...in loop to log each key-value pair
for (const key in car) {
    console.log(key + " : " + car[key]);
}

//Nested Object
//Create
let person = {
    firstName: "Minhaj",
    lastName: "Haider",
    address: {
        street: "parkStreet",
        city: "Muzaffarpur",
        zipCode: 842001
    }
}

//Array of Objects:
//Create
let students = [{
    name: "Alex",
    grade: 10
},
{
    name: "Alexa",
    grade: 11
},
{
    name: "Alexander",
    grade: 12
},
]

//forEach to print name and grade
students.forEach((e) => {
    console.log("Name:", e.name, " Grade:", e.grade);
})

//Destructuring
//extract make and model from car Object
let { make, model } = car
console.log("make:", make, "model:", model);

//extract first two fruits from fruits Array
let [fruit1, fruit2] = fruits
console.log("fruit1:", fruit1, " fruit2:", fruit2);

//Merge Objects:
//Merge both object using spread operator
let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    b: 3,
    c: 4
}
console.log({ ...obj1, ...obj2 });