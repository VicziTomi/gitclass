let fruits = [];

const gyumolcsSzallitmany = (fruitArray) => {
  for (let i = 0; i < fruitArray.length; i++) {
    fruits.push(fruitArray[i]);
  }
}

gyumolcsSzallitmany(['alma', 'barack', 'korte']);

console.log(fruits);
