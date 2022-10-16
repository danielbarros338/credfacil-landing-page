const btnDropdown = document.querySelectorAll(".btn-dropdown");
const text = document.querySelectorAll(".accordeon article");

btnDropdown.forEach((btn, indexBtn) => {
  btn.addEventListener("click", () => {
    if (text[indexBtn].style.display === "block") {
      setSlideInUp(text[indexBtn].children[0].classList);
      setTimeout(() => {
        text[indexBtn].style.display = "none";
      }, 1000);
    } else {
      setSlideInDown(text[indexBtn].children[0].classList);
      text[indexBtn].style.display = "block";
    }
  });
});

function setSlideInDown(classes) {
  classes.forEach((cl) => {
    if (cl === "animate__slideOutUp") {
      classes.remove("animate__slideOutUp");
      classes.remove("animate__animated");
    }
  });

  classes.add("animate__animated");
  classes.add("animate__slideInDown");
}

function setSlideInUp(classes) {
  classes.forEach((cl) => {
    if (cl === "animate__slideInDown") {
      classes.remove("animate__slideInDown");
      classes.remove("animate__animated");
    }
  });

  classes.add("animate__animated");
  classes.add("animate__slideOutUp");
}
