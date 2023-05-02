// const filterSeeMoreBtn = document.querySelector(".filter-see-btn-container");
// console.log(filterSeeMoreBtn);
// const filterArea = document.querySelector(".filter-container");
// let isFilterAreaOpen = false;
// filterSeeMoreBtn.addEventListener("click", toggleFilterArea);
const pdfButton = document.querySelector("#pdf-button");
console.log(pdfButton);
pdfButton.addEventListener("click", printToPdf);

function printToPdf() {
  // create a new jsPDF instance
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // get the HTML content to print
  const content = document.querySelector(".print-area");
  console.log(content);
  content.classList.add("to-print");
  // render the HTML content to a canvas
  html2canvas(content, {
    allowTaint: true,
    useCORS: true,
  }).then((canvas) => {
    // add the canvas as an image to the PDF document
    const imgData = canvas.toDataURL("image/png");
    doc.addImage(imgData, "PNG", 0, 0, 210, 297);

    // save the PDF file and open it in a new tab
    doc.save("your-plan.pdf");
  });
  content.classList.remove("to-print");
}

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
