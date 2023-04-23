const ulMainRef = document.querySelector("#categories");
const listMainLi = [...ulMainRef.children];

console.log(`Number of categories: ${listMainLi.length}`);

listMainLi.forEach((li) => {
  let liParentRef = li.children;
  let ulChildrenRef = liParentRef[1];

  console.log(`Category: ${liParentRef[0].textContent}
      Elements: ${ulChildrenRef.children.length}`);
});
