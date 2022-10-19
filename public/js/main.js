const btnDropdown = document.querySelectorAll(".btn-dropdown");
const text = document.querySelectorAll(".accordeon article");
const chevron = document.querySelectorAll(".accordeon span i");
const fromSim = document.querySelector("#form-simulator");
const input = document.querySelector("#wpp-simulator-inp");

btnDropdown.forEach((btn, indexBtn) => {
  btn.addEventListener("click", () => {
    if (text[indexBtn].style.display === "block") {
      setSlideInUp(text[indexBtn].children[0].classList);

      chevron[indexBtn].style.rotate = "0deg";

      setTimeout(() => {
        text[indexBtn].style.display = "none";
      }, 1000);
    } else {
      setSlideInDown(text[indexBtn].children[0].classList);
      chevron[indexBtn].style.rotate = "180deg";
      text[indexBtn].style.display = "block";
    }
  });
});

input.addEventListener("input", (e) => {
  let value = e.target.value;

  if (value.length === 1) {
    value = `00.0${value}`;
    input.value = value;
    return;
  }

  if (value.length > 1) {
    value = value.split(".").join("");
    const finalValue = value.slice(-2);
    const front = value.slice(0, -2);
    value = `${front}.${finalValue}`;

    if (value.charAt(0) === "0") value = value.substr(1);

    input.value = value;

    return;
  }
});

fromSim.addEventListener("submit", (e) => {
  e.preventDefault();
  const wppUrl =
    "https://wa.me/558173166645?text=Gostaria%20de%20realizar%20uma%20simulação%20de%20Empréstimo%20com%20Garantia%20do%20Saque%20Aniversário%20do%20FGTS%20no%20valor%20de%20R$%20" +
    input.value;
  window.open(wppUrl);
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
