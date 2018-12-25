var buttons = document.querySelectorAll(".question__button");

buttons.forEach(button => {
  addClick(button);
});

function addClick(el) {
  el.addEventListener("click", () => {
    var answer = el.nextSibling;
    if (answer.classList.contains("question__answer--show")) {
      answer.classList.remove("question__answer--show");
      el.textContent = "Answer";
    } else {
      answer.classList.add("question__answer--show");
      el.textContent = "Hide";
    }
  });
}
