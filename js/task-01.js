const categories = document.querySelector("#categories");
const items = [...categories.children];

console.log(`Number of categories: ${items.length}.`);

items.forEach((item) => {
  const title = item.children;
  const itemCount = title[1];

  console.log(`Category: ${title[0].textContent} \nElements: ${itemCount.children.length}`);
});