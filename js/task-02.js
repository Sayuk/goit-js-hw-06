const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("ul#ingredients");
const markup = ingredients.map((ingredient) => {
  let itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  return itemEl;
});
listEl.append(...markup);
console.log(listEl);
