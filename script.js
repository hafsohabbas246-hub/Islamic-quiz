/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================
   RESULT COUNTER
========================= */

const resultButton =
  document.getElementById("resultButton");

const score =
  document.getElementById("score");

const progress =
  document.getElementById("progress");

let hasRevealed = false;


resultButton.addEventListener("click", () => {

  if (hasRevealed) {
    return;
  }

  hasRevealed = true;

  resultButton.textContent = "Alhamdulillah ✦";

  let current = 0;

  const target = 24;

  const counter = setInterval(() => {

    current++;

    score.textContent = current;

    if (current >= target) {

      clearInterval(counter);

    }

  }, 55);


  setTimeout(() => {

    progress.style.width = "96%";

  }, 200);

});


/* =========================
   BUTTON MICRO-INTERACTION
========================= */

const button =
  document.querySelector(".primary-button");


button.addEventListener("click", () => {

  button.style.transform = "translateY(2px)";

  setTimeout(() => {

    button.style.transform = "";

  }, 150);

});