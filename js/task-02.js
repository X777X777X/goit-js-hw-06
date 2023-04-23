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
