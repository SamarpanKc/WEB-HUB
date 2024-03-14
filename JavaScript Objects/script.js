// Object 
const product ={
    name : 'Smart Phone',
    price : 'Rs.22000'
};
console.log(product);

// Accessing specific value
console.log(product.price);

// Change value of property
product.name = 'Refrigerator';
console.log(product.name);

// Adding new property and value
product .date = 'March, 2024';
console.log(product);

// Delete property
delete product.date;
console.log(product);