const hotelChoices = document.getElementsByClassName("hotel-choice");
const foodChoices = document.getElementsByClassName("food-choice");
const placeChoices = document.getElementsByClassName("place-choice");
const plans = document.querySelector(".plans");
const totalCost = document.querySelector(".total-cost");
// console.log(plans);
// console.log(totalCost);

for (let i = 0; i < hotelChoices.length; i++) {
  //   console.log(hotelChoices[i]);
  hotelChoices[i].addEventListener("change", function () {
    if (hotelChoices[i].checked === true) {
      plans.innerHTML = "<p class='plan-txt'>" + hotelChoices[i].value + "</p>";
      switch (hotelChoices[i].value) {
        case "Hotel-1":
          totalCost.innerHTML = 100 + "$";
          break;
        case "Hotel-2":
          totalCost.innerHTML = 200 + "$";
          break;
        case "Hotel-3":
          totalCost.innerHTML = 300 + "$";
          break;
        case "Hotel-4":
          totalCost.innerHTML = 400 + "$";
          break;
      }
    }
  });
}

for (let i = 0; i < foodChoices.length; i++) {
  //   console.log(foodChoices[i]);
  foodChoices[i].addEventListener("change", function () {
    if (foodChoices[i].checked === true) {
      plans.innerHTML =
        "<p class='plan-txt'>" +
        foodChoices[i].value +
        " Food</p>" +
        plans.innerHTML;
      switch (foodChoices[i].value) {
        case "Chinese":
          totalCost.innerHTML = parseInt(totalCost.innerHTML) + 100 + "$";
          break;
        case "Italian":
          totalCost.innerHTML = parseInt(totalCost.innerHTML) + 200 + "$";
          break;
        case "Indian":
          totalCost.innerHTML = parseInt(totalCost.innerHTML) + 300 + "$";
          break;
        case "Thai":
          totalCost.innerHTML = parseInt(totalCost.innerHTML) + 400 + "$";
          break;
      }
    }
    if (foodChoices[i].checked === false) {
      let txt = plans.innerHTML;
      console.log(txt);
      switch (foodChoices[i].value) {
        case "Chinese":
          plans.innerHTML = txt.replace("Chinese Food", "");
          totalCost.innerHTML = parseInt(totalCost.innerHTML) - 100 + "$";
          break;
        case "Italian":
          plans.innerHTML = txt.replace("Italian Food", "");
          totalCost.innerHTML = parseInt(totalCost.innerHTML) - 200 + "$";
          break;
        case "Indian":
          plans.innerHTML = txt.replace("Indian Food", "");
          totalCost.innerHTML = parseInt(totalCost.innerHTML) - 300 + "$";
          break;
        case "Thai":
          plans.innerHTML = txt.replace("Thai Food", "");
          totalCost.innerHTML = parseInt(totalCost.innerHTML) - 400 + "$";
          break;
      }
    }
  });
}

for (let i = 0; i < placeChoices.length; i++) {
  //   console.log(placeChoices[i]);
}

var button = document.getElementById("pdfButton");
button.addEventListener("click", function () {
  console.log("in");
  var doc = new jsPDF("p", "mm", [300, 300]);
  var makePDF = document.querySelector("#your-plan");
  console.log(makePDF.style);
  // fromHTML Method
  doc.fromHTML(makePDF);
  doc.save("your-plan.pdf");
});
