const avatarOne = document.querySelector("#avatar-1");
const avatarTwo = document.querySelector("#avatar-2");
const avatarThree = document.querySelector("#avatar-3");
const avatarFour = document.querySelector("#avatar-4");
const avatarFive = document.querySelector("#avatar-5");
console.log(avatarOne);
avatarOne.addEventListener("click", function () {
  // console.log("Avatar 1 clicked");
  avatarOne.classList.add("bot-open");
  avatarTwo.classList.remove("bot-open");
  avatarThree.classList.remove("bot-open");
  avatarFour.classList.remove("bot-open");
  avatarFive.classList.remove("bot-open");
  const name = avatarOne.querySelector("h3").innerHTML;
  // console.log(name[name.length - 1]);
  const textID = "#person-" + name[name.length - 1];
  // console.log(textID);
  const details = document.querySelector(textID);
  // console.log(details);
  details.classList.add("show");
  for (let i = 1; i < 6; i++) {
    if (i != name[name.length - 1]) {
      const textID = "#person-" + i;
      // console.log(textID);
      let details = document.querySelector(textID);
      details.classList.remove("show");
    }
  }
});
avatarTwo.addEventListener("click", function () {
  avatarOne.classList.remove("bot-open");
  avatarTwo.classList.add("bot-open");
  avatarThree.classList.remove("bot-open");
  avatarFour.classList.remove("bot-open");
  avatarFive.classList.remove("bot-open");
  // console.log("Avatar 2 clicked");
  const name = avatarTwo.querySelector("h3").innerHTML;
  // console.log(name[name.length - 1]);
  const textID = "#person-" + name[name.length - 1];
  // console.log(textID);
  const details = document.querySelector(textID);
  // console.log(details);
  details.classList.add("show");
  for (let i = 1; i < 6; i++) {
    if (i != name[name.length - 1]) {
      const textID = "#person-" + i;
      // console.log(textID);
      let details = document.querySelector(textID);
      details.classList.remove("show");
    }
  }
});
avatarThree.addEventListener("click", function () {
  avatarOne.classList.remove("bot-open");
  avatarTwo.classList.remove("bot-open");
  avatarThree.classList.add("bot-open");
  avatarFour.classList.remove("bot-open");
  avatarFive.classList.remove("bot-open");
  // console.log("Avatar 3 clicked");
  const name = avatarThree.querySelector("h3").innerHTML;
  // console.log(name[name.length - 1]);
  const textID = "#person-" + name[name.length - 1];
  // console.log(textID);
  const details = document.querySelector(textID);
  // console.log(details);
  details.classList.add("show");
  for (let i = 1; i < 6; i++) {
    if (i != name[name.length - 1]) {
      const textID = "#person-" + i;
      // console.log(textID);
      let details = document.querySelector(textID);
      details.classList.remove("show");
    }
  }
});
avatarFour.addEventListener("click", function () {
  avatarOne.classList.remove("bot-open");
  avatarTwo.classList.remove("bot-open");
  avatarThree.classList.remove("bot-open");
  avatarFour.classList.add("bot-open");
  avatarFive.classList.remove("bot-open");
  // console.log("Avatar 4 clicked");
  const name = avatarFour.querySelector("h3").innerHTML;
  // console.log(name[name.length - 1]);
  const textID = "#person-" + name[name.length - 1];
  // console.log(textID);
  const details = document.querySelector(textID);
  // console.log(details);
  details.classList.add("show");
  for (let i = 1; i < 6; i++) {
    if (i != name[name.length - 1]) {
      const textID = "#person-" + i;
      // console.log(textID);
      let details = document.querySelector(textID);
      details.classList.remove("show");
    }
  }
});
avatarFive.addEventListener("click", function () {
  avatarOne.classList.remove("bot-open");
  avatarTwo.classList.remove("bot-open");
  avatarThree.classList.remove("bot-open");
  avatarFour.classList.remove("bot-open");
  avatarFive.classList.add("bot-open");
  const name = avatarFive.querySelector("h3").innerHTML;
  const textID = "#person-" + name[name.length - 1];
  const details = document.querySelector(textID);
  details.classList.add("show");
  for (let i = 1; i < 6; i++) {
    if (i != name[name.length - 1]) {
      const textID = "#person-" + i;
      // console.log(textID);
      let details = document.querySelector(textID);
      details.classList.remove("show");
    }
  }
});
