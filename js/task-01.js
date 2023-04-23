const ulMainRef = document.querySelector("#categories");
const listMainLi = [...ulMainRef.children];

console.log(`Number of categories: ${listMainLi.length}`);

listMainLi.forEach((li) => {
  let liParentRef = li.children;
  let ulChildrenRef = liParentRef[1];

  console.log(`Category: ${liParentRef[0].textContent}
      Elements: ${ulChildrenRef.children.length}`);
});
// ---------------
const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}.`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const itemCount = item.querySelectorAll("li").length;

  console.log(`Category: ${title} \nElements: ${itemCount}`);
});