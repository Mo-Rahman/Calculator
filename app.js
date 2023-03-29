"use strict";

document.querySelectorAll("input").forEach((element) => {
  element.addEventListener("click", function () {
    if (element.value === "AC") {
      display.value = "";
    } else if (element.value === "DE") {
      display.value = display.value.toString().slice(0, -1);
    } else if (element.value != "=") {
      display.value += element.value;
    } else if (element.value === "=") {
      display.value = eval(display.value);
    }
  });
});
