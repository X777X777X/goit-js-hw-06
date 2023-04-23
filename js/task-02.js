const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulMainRef = document.querySelector("#ingredients");

let result = ingredients.map((ingredient) => {
  let liRef = document.createElement("li");
  liRef.textContent = ingredient;

  liRef.classList.add("item");
  return liRef;
});

ulMainRef.append(...result);

// ------

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  return itemEl;
});

console.log(ingredients);

list.append(...items);