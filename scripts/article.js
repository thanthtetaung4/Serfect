// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const backBtn = document.querySelector(".back-btn");
backBtn.addEventListener("click", goBack);
function goBack() {
  window.history.back();
}

function downloadBrochure() {
  var url = "./Brochure.pdf"; // Replace with the URL of your brochure
  var link = document.createElement("a");
  link.download = "brochure.pdf"; // Replace with the desired name of your brochure file
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
