

// Use For loop first , Foreach loop and for of loop
// 1)Use above mentioned loop to print the name of fruits  in console:

const Fruits = [
    { name: "Apple", cost: "200" },
    { name: "Guava", cost: "100" },
    { name: "Mango", cost: "200" },
];
//for loop
for (let i = 0; i < Fruits.length; i++) {
    console.log(Fruits[i].name);
}
//forEach loop
Fruits.forEach((fruit) => {
    console.log(fruit.name);
});
//for of loop
for (let fruit of Fruits) console.log(fruit.name);

// 2)Use above fruits array and change the value of name to console the output

//changing value
Fruits[0].name = "Grapes";
Fruits[1].name = "Watermelon";
Fruits[2].name = "Banana";

Fruits.forEach((fruit2) => {
    console.log(fruit2.name);
});


//3)Given an array that may contain duplicates, print all elements and their frequencies.

const arr = [10, 20, 20, 10, 10, 20, 5, 20];
const resultArray = [];

for (let i = 0; i < arr.length; i++) {
    if (resultArray.includes(arr[i])) {
        continue;
    } else {
        resultArray.push(arr[i]);
    }
    let count = 0;
    for (let j = i; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    console.log(`${arr[i]} ${count}`);
}
// 4) 
const arr2=[10,20,20]
const resultArray2 = [];

for (let i = 0; i < arr2.length; i++) {
    if (resultArray2.includes(arr2[i])) {
        continue;
    } else {
        resultArray2.push(arr2[i]);
    }
    let count2 = 0;
    for (let j = i; j < arr2.length; j++) {
        if (arr[i] === arr[j]) {
            count2++;
        }
    }
    console.log(`${arr2[i]} ${count2}`);}