// const filterSeeMoreBtn = document.querySelector(".filter-see-btn-container");
// console.log(filterSeeMoreBtn);
// const filterArea = document.querySelector(".filter-container");
// let isFilterAreaOpen = false;
// filterSeeMoreBtn.addEventListener("click", toggleFilterArea);
const pdfButton = document.querySelector("#pdf-button");
console.log(pdfButton);
pdfButton.addEventListener("click", printToPDF);

// function printToPdf() {
//   // create a new jsPDF instance
//   const doc = new jsPDF({
//     orientation: "portrait",
//     unit: "mm",
//     format: "a4",
//   });

//   // get the HTML content to print
//   const content = document.querySelector(".print-area");
//   console.log(content);
//   //content.classList.add("to-print");
//   // render the HTML content to a canvas
//   html2canvas(content, {
//     allowTaint: true,
//     useCORS: true,
//   }).then((canvas) => {
//     // add the canvas as an image to the PDF document
//     const imgData = canvas.toDataURL("image/png");
//     doc.addImage(imgData, "PNG", 0, 0, 210, 500);

//     // save the PDF file and open it in a new tab
//     doc.save("your-plan.pdf");
//   });
//   //content.classList.remove("to-print");
// }

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

function printToPDF() {
  const yourPlan = document.querySelector(".print-area");
  const style = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      @page {
        size: A4;
        margin: 0;
        
      }
      body {
        margin: 0;
        background-color: #0f4471;
      }
      
      .print-area {
        font-family: "montserrat", sans-serif;
        background-color: #0f4471;
        width: 100%;
        max-width: 800px;
        padding: 20px;
        color: #000;
        font-size: 16px;
        page-break-inside: avoid;
        page-break-after: always;
      }
      .cost-divider{
        width: 100%;
        border: 1px solid #000;
        margin-bottom: 20px;
      }
      #chosen-restaurant,#chosen-place{
        font-size: 1.2rem;
        margin-bottom: 10px;
      }
      .plan-txt-restaurant, .plan-txt-place{
        font-size: 1.2rem;
        margin-bottom: 5px;
      }
      .customize-plan-container {
       display: grid;
       grid-template-columns: 50% 50%;
       /* margin-top: 50px; */
      }
      .cost-container{
        
      }
      .cost {
        margin-bottom: 30px;
        padding: 0 20px;
        display: flex;
        flex-direction: row;  
        justify-content: space-between;
      }
      .cost > div {
        font-size: 1.2rem;
      }
      .choice-heading {
        margin: 20px 0;
      }
      .choice-type {
        font-size: 2rem;
      }
    </style>
  `;

  const content = yourPlan.outerHTML;
  console.log(content);
  const printWindow = window.open("print", "print", "height=600,width=800");
  printWindow.document.write(`${content}${style}`);
  printWindow.document.close();
  printWindow.print();

  printWindow.close();
}
