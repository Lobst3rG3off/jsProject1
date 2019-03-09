

const coffeeBeverages = [
    'drip coffee', 'latte', 'macciatio' , 'flat white'
];


for (let i = 0; i < coffeeBeverages.length; i = i + 1) {
//for loop in array
}console.log(coffeeBeverages[i])

//doesn't make a new array
coffeeBeverages.forEach((item , i) => { 
console.log(item);
});

//map makes a new array
const capitalizedCoffees = coffeeBeverages.map(item => {
    return item.toUpperCase();
});





//dom manipulation


//document.querySelector or only picks up the first instance
const firstParagraph (document.querySelector ('p'));


//selects all paragraphs in chosen document
const allParagraphs = document.querySelectorAll('p');








