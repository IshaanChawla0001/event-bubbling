"use strict";

//1. capture phase
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     print("Grandparent click event in capture");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     print("Parent click event in capture");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     print("Child click event in capture");
//   },
//   true
// );

// document.querySelector("#btn").addEventListener(
//   "click",
//   () => {
//     print("button as target in capture");
//   },
//   true
// );

// var outputText = document.querySelector("#output-text");

// function print(text) {
//   outputText.innerHTML += text + "<br/>";
// }

// document.querySelector("#output-button").addEventListener("click", () => {
//   outputText.textContent = "";
// });

// //2.  bubble phase
// document.querySelector("#grandparent").addEventListener("click", () => {
//   print("Grandparent click event in bubble");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   print("Parent click event in bubble");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   print("Child click event in bubble");
// });

// document.querySelector("#btn").addEventListener("click", () => {
//   print("btn clicked target in in bubble");
// });

// // output;

// var outputText = document.querySelector("#output-text");

// function print(text) {
//   outputText.innerHTML += text + "<br/>";
// }

// document.querySelector("#output-button").addEventListener("click", () => {
//   outputText.textContent = "";
// });

//3.  complete flow

document.querySelector("#grandparent").addEventListener("click", (e) => {
  print(EVENT_PHASE[e.eventPhase] + ": Grandparent click event");
});

document.querySelector("#parent").addEventListener("click", (e) => {
  print(EVENT_PHASE[e.eventPhase] + ": Parent click event");
});

document.querySelector("#child").addEventListener("click", (e) => {
  print(EVENT_PHASE[e.eventPhase] + ": Child click event");
});

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    print(EVENT_PHASE[e.eventPhase] + ": Grandparent click event");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    print(EVENT_PHASE[e.eventPhase] + ": Parent click event");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    print(EVENT_PHASE[e.eventPhase] + ": Child click event");
  },
  true
);

document.querySelector("#btn").addEventListener(
  "click",
  (e) => {
    print(EVENT_PHASE[e.eventPhase] + ": button click event");
  },
  true
);

var outputText = document.querySelector("#output-text");

function print(text) {
  outputText.innerHTML += text + "<br/>";
}

document.querySelector("#output-button").addEventListener("click", () => {
  outputText.textContent = "";
});

var EVENT_PHASE = ["NONE", "CAPTURING_PHASE", "AT_TARGET", "BUBBLING_PHASE"];
