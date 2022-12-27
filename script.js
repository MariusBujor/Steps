const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle"); // .more then one

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++; // when click incress by one

  if (currentActive > circles.length) { // 4
    // if gets to the end is not passing 4
    currentActive = circles.length; // no more than 4
  }
  update();
  console.log(currentActive);
});

prev.addEventListener("click", () => {
  // this will do back but not less then 1
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1; // this is at the beginning
  }
  update(); // function
});

function update() {
  // will trough with for each
  circles.forEach((circle, idx) => { // [ 0 is less than currentActive]
    if (idx < currentActive) {
      // if index of that circle is less than currentActive
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // until here all circles ca be active 

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%"; // percentage of length 33/66/99 % by adding -1

    // Make the buutons available or not 

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
