const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

for (let j = ingredients.length - 1; j > 0; j--) {
  console.log(ingredients[j])
}