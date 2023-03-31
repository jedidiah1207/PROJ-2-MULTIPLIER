const x = Math.ceil(Math.random() * 10);
const y = Math.ceil(Math.random() * 10);
const ans = x * y;
let score = JSON.parse(localStorage.getItem("score"));
const qele = document.getElementById("question");
const uele = document.getElementById("input");
qele.innerText = `What is ${x} multiplied by ${y}?`;
const formEle = document.getElementById("form");
const scorEle = document.getElementById("score");
if (!score) {
  score = 0;
}
scorEle.innerText = `score: ${score}`;
formEle.addEventListener("submit", () => {
  const uans = +uele.value;
  if (ans === uans) {
    score++;

    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
