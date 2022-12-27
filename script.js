const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle"); // .more then one

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++; // when click incress by one

  if (currentActive > circles.length) {
    // if gets to the end is not passing 4
    currentActive = circles.length;
  }
  // update();
  console.log(currentActive);
});

// prev.addEventListener("click", () => {
//   // this will do back but not less then 1
//   currentActive--;

//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update(); // function
// });

// function update() {
//   // will trough with for each
//   circles.forEach((circle, idx) => {
//     if (idx < currentActive) {
//       // if index of that circle is less than currentActive
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });
// }
