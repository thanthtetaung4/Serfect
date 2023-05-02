main();
function main() {
  const hotelChoices = document.getElementsByClassName("hotel-choice");
  const placeChoices = document.getElementsByClassName("place-choice");
  const restaurantChoices =
    document.getElementsByClassName("restaurant-choice");
  const chineseRestaurant = document.querySelector("#chinese-restaurant");
  const thaiRestaurant = document.querySelector("#thai-restaurant");
  const indianRestaurant = document.querySelector("#indian-restaurant");
  const vegenRestaurant = document.querySelector("#vegen-restaurant");
  const chosenHotel = document.querySelector("#chosen-hotel");
  const chosenRestaurant = document.querySelector("#chosen-restaurant");
  const chosenPlace = document.querySelector("#chosen-place");
  const hotelCost = document.querySelector("#hotel-cost");
  const restaurantCost = document.querySelector("#restaurant-cost");
  const placeCost = document.querySelector("#place-cost");
  const totalCost = document.querySelector("#total-cost");
  console.log(hotelChoices);
  console.log(placeChoices);
  console.log(restaurantChoices);
  console.log(chineseRestaurant);
  console.log(thaiRestaurant);
  console.log(indianRestaurant);
  console.log(vegenRestaurant);
  console.log(chosenHotel);
  console.log(chosenRestaurant);
  console.log(chosenPlace);
  console.log(hotelCost);
  console.log(restaurantCost);
  console.log(placeCost);
  console.log(totalCost);

  // Create a new MutationObserver instance
  const hotelObserver = new MutationObserver((mutations) => {
    // Iterate over each mutation
    mutations.forEach((mutation) => {
      // Check if the mutation was caused by a change to the innerHTML
      if (mutation.type === "childList" && mutation.target === hotelCost) {
        // Do something
        changedCost(totalCost, hotelCost, restaurantCost, placeCost);
      }
    });
  });

  // Start observing the element for changes
  hotelObserver.observe(hotelCost, { childList: true });

  const restaurantObserver = new MutationObserver((mutations) => {
    // Iterate over each mutation
    mutations.forEach((mutation) => {
      // Check if the mutation was caused by a change to the innerHTML
      if (mutation.type === "childList" && mutation.target === restaurantCost) {
        // Do something
        changedCost(totalCost, hotelCost, restaurantCost, placeCost);
      }
    });
  });

  // Start observing the element for changes
  restaurantObserver.observe(restaurantCost, { childList: true });

  const placeObserver = new MutationObserver((mutations) => {
    // Iterate over each mutation
    mutations.forEach((mutation) => {
      // Check if the mutation was caused by a change to the innerHTML
      if (mutation.type === "childList" && mutation.target === placeCost) {
        // Do something
        changedCost(totalCost, hotelCost, restaurantCost, placeCost);
      }
    });
  });

  // Start observing the element for changes
  placeObserver.observe(placeCost, { childList: true });

  for (let i = 0; i < hotelChoices.length; i++) {
    // console.log("haha");
    hotelChoices[i].addEventListener("change", function () {
      hotelChoice(hotelChoices[i], chosenHotel, hotelCost);
    });
  }
  for (let i = 0; i < restaurantChoices.length; i++) {
    // console.log("hahaha");
    // console.log(restaurantChoices[i]);
    restaurantChoices[i].addEventListener("change", function () {
      restaurantChoice(restaurantChoices[i], chosenRestaurant, restaurantCost);
    });
  }
  for (let i = 0; i < placeChoices.length; i++) {
    placeChoices[i].addEventListener("change", function () {
      placeChoice(placeChoices[i], chosenPlace, placeCost);
    });
  }
}
function hotelChoice(hotel, chosenHotel, hotelCost) {
  let labelTxt = document.querySelector(`label[for=${hotel.id}]`).innerHTML;
  if (hotel.checked === true) {
    console.log();
    chosenHotel.innerHTML = "<p class='plan-txt'>" + labelTxt + "</p>";
    switch (hotel.value) {
      case "Hotel-1":
        hotelCost.innerHTML = 118;
        break;
      case "Hotel-2":
        hotelCost.innerHTML = 152;
        break;
      case "Hotel-3":
        hotelCost.innerHTML = 201;
        break;
      case "Hotel-4":
        hotelCost.innerHTML = 261;
        break;
      case "Hotel-5":
        hotelCost.innerHTML = 267;
        break;
      case "Hotel-6":
        hotelCost.innerHTML = 374;
        break;
      case "Hotel-7":
        hotelCost.innerHTML = 384;
        break;
      case "Hotel-8":
        hotelCost.innerHTML = 535;
        break;
      case "Hotel-9":
        hotelCost.innerHTML = 628;
        break;
      case "Hotel-10":
        hotelCost.innerHTML = 1320;
        break;
    }
  }
}
function restaurantChoice(restaurant, chosenRestaurant, restaurantCost) {
  let labelTxt = document.querySelector(
    `label[for=${restaurant.id}]`
  ).innerHTML;
  console.log(labelTxt);
  if (restaurant.checked === true) {
    // console.log(restaurant);
    let restaurantID = "";
    if (chosenRestaurant.innerHTML === "No Restaurant Chosen") {
      chosenRestaurant.innerHTML =
        "<p class='plan-txt-restaurant'>" + labelTxt + "</p>";
    } else {
      chosenRestaurant.innerHTML =
        chosenRestaurant.innerHTML +
        "<p class='plan-txt-restaurant'>" +
        labelTxt +
        "</p>";
    }
    switch (restaurant.value) {
      case "Restaurant-1":
        restaurantID = restaurant.id;
        restaurantID = restaurantID.slice(0, restaurantID.length - 2);
        console.log(restaurantID);
        switch (restaurantID) {
          case "chinese-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 12;
            break;
          case "thai-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 7;
            break;
          case "indian-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 11;
            break;
          case "vegen-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 7;
            break;
        }
        break;
      case "Restaurant-2":
        restaurantID = restaurant.id;
        restaurantID = restaurantID.slice(0, restaurantID.length - 2);
        console.log(restaurantID);
        switch (restaurantID) {
          case "chinese-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 15;
            break;
          case "thai-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 8;
            break;
          case "indian-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 11;
            break;
          case "vegen-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 12;
            break;
        }
        break;
      case "Restaurant-3":
        restaurantID = restaurant.id;
        restaurantID = restaurantID.slice(0, restaurantID.length - 2);
        console.log(restaurantID);
        switch (restaurantID) {
          case "chinese-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 18;
            break;
          case "thai-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 8;
            break;
          case "indian-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 15;
            break;
          case "vegen-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 15;
            break;
        }
        break;
      case "Restaurant-4":
        restaurantID = restaurant.id;
        restaurantID = restaurantID.slice(0, restaurantID.length - 2);
        console.log(restaurantID);
        switch (restaurantID) {
          case "chinese-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 38;
            break;
          case "thai-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 13;
            break;
          case "indian-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 31;
            break;
          case "vegen-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) + 15;
            break;
        }
        break;
    }
  }
  if (restaurant.checked === false) {
    let txt = chosenRestaurant.innerHTML;
    // console.log(txt);
    let needToRm = document.querySelectorAll(".plan-txt-restaurant");
    console.log(needToRm);
    switch (restaurant.value) {
      case "Restaurant-1":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenRestaurant.innerHTML = txt.replace(labelTxt, "");
        // restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 100;
        restaurantID = restaurant.id;
        restaurantID = restaurantID.slice(0, restaurantID.length - 2);
        console.log(restaurantID);
        switch (restaurantID) {
          case "chinese-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 12;
            break;
          case "thai-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 7;
            break;
          case "indian-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 11;
            break;
          case "vegen-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 7;
            break;
        }
        break;
      case "Restaurant-2":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenRestaurant.innerHTML = txt.replace(labelTxt, "");

        restaurantID = restaurant.id;
        restaurantID = restaurantID.slice(0, restaurantID.length - 2);
        console.log(restaurantID);
        switch (restaurantID) {
          case "chinese-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 15;
            break;
          case "thai-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 8;
            break;
          case "indian-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 11;
            break;
          case "vegen-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 12;
            break;
        }
        break;
      case "Restaurant-3":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        restaurantID = restaurant.id;
        restaurantID = restaurantID.slice(0, restaurantID.length - 2);
        console.log(restaurantID);
        // chosenRestaurant.innerHTML = txt.replace(labelTxt, "");
        switch (restaurantID) {
          case "chinese-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 18;
            break;
          case "thai-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 8;
            break;
          case "indian-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 15;
            break;
          case "vegen-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 15;
            break;
        }
        break;
      case "Restaurant-4":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenRestaurant.innerHTML = txt.replace(labelTxt, "");
        restaurantID = restaurant.id;
        restaurantID = restaurantID.slice(0, restaurantID.length - 2);
        console.log(restaurantID);
        switch (restaurantID) {
          case "chinese-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 38;
            break;
          case "thai-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 13;
            break;
          case "indian-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 31;
            break;
          case "vegen-restaurant":
            restaurantCost.innerHTML = parseInt(restaurantCost.innerHTML) - 15;
            break;
        }
        break;
    }
  }
  if (chosenRestaurant.innerHTML === "") {
    chosenRestaurant.innerHTML = "No Restaurant Chosen";
  }
}

function placeChoice(place, chosenPlace, placeCost) {
  let labelTxt = document.querySelector(`label[for=${place.id}]`).innerHTML;
  if (place.checked === true) {
    // console.log(restaurant);
    if (chosenPlace.innerHTML === "No Place Chosen") {
      chosenPlace.innerHTML = "<p class='plan-txt-place'>" + labelTxt + "</p>";
    } else {
      chosenPlace.innerHTML =
        chosenPlace.innerHTML +
        "<p class='plan-txt-place'>" +
        labelTxt +
        "</p>";
    }
    switch (place.value) {
      case "Place-1":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 0;
        break;
      case "Place-2":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 0;
        break;
      case "Place-3":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 0;
        break;
      case "Place-4":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 0;
        break;
      case "Place-5":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 0;
        break;
      case "Place-6":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 0;
        break;
      case "Place-7":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 0;
        break;
      case "Place-8":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 0;
        break;
      case "Place-9":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 14;
        break;
      case "Place-10":
        placeCost.innerHTML = parseInt(placeCost.innerHTML) + 48;
        break;
    }
  }
  if (place.checked === false) {
    let txt = chosenPlace.innerHTML;
    // console.log("need to remove " + txt);
    let needToRm = document.querySelectorAll(".plan-txt-place");
    // console.log(needToRm[0].innerHTML);
    switch (place.value) {
      case "Place-1":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 0;
        if (chosenPlace.innerHTML === "") {
          chosenPlace.innerHTML = "No Place Chosen";
        }
        break;
      case "Place-2":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 0;
        if (chosenPlace.innerHTML === "") {
          chosenPlace.innerHTML = "No Place Chosen";
        }
        break;
      case "Place-3":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 0;
        break;
      case "Place-4":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 0;
        break;
      case "Place-5":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 0;
        break;
      case "Place-6":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 0;
        break;
      case "Place-7":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 0;
        break;
      case "Place-8":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 0;
        break;
      case "Place-9":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 14;
        break;
      case "Place-10":
        for (let i = 0; i < needToRm.length; i++) {
          if (needToRm[i].innerHTML === labelTxt) {
            needToRm[i].remove();
          }
        }
        // chosenPlace.innerHTML = txt.replace(labelTxt, "");
        placeCost.innerHTML = parseInt(placeCost.innerHTML) - 48;
        break;
    }
  }
}

function changedCost(restaurantCost, hotelCost, chosenRestaurant, placeCost) {
  restaurantCost.innerHTML =
    parseInt(hotelCost.innerHTML) +
    parseInt(chosenRestaurant.innerHTML) +
    parseInt(placeCost.innerHTML);
}
