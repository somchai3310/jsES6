// Destructuring

// array
const colors = ["red", "white", "green"];
// const red = colors[0]
// const white = colors[1]
// const green = colors[2]
const [red, white, green] = colors;
// const [,,green] = colors

console.log(red);
console.log(white);
console.log(green);

// obj
const product = {
  productName: "computer",
  price: 30000,
  stock: 10,
};

// old
// const name = product.productName;

// new
const { productName:name , price, stock } = product;
console.log(product);
console.log(name, price, stock);
