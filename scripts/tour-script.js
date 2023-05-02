const filterSeeMoreBtn = document.querySelector(".filter-see-btn-container");
console.log(filterSeeMoreBtn);
const filterArea = document.querySelector(".filter-container");
let isFilterAreaOpen = false;
filterSeeMoreBtn.addEventListener("click", toggleFilterArea);

function toggleFilterArea() {
  // console.log("clicked");
  if (isFilterAreaOpen === false) {
    filterArea.style.cssText = `
      height: 1000px;
    `;
    isFilterAreaOpen = true;
    filterArea.querySelector("h2").innerHTML = "Filters ";
    filterSeeMoreBtn.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
  } else {
    filterArea.style.height = "100px";
    isFilterAreaOpen = false;
    filterArea.querySelector("h2").innerHTML = "Expend to see the filters!";
    filterSeeMoreBtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    scrollTo(0, 0);
  }
}
