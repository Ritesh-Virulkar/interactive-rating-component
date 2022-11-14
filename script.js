const button_1 = document.getElementById("one");
const button_2 = document.getElementById("two");
const button_3 = document.getElementById("three");
const button_4 = document.getElementById("four");
const button_5 = document.getElementById("five");

const preSubmitDiv = document.querySelector(".pre-submit");
const postSubmitDiv = document.querySelector(".post-submit");

let score = document.querySelector(".score");

let btns = document.getElementsByClassName("rate-btn");

const submitBtn = document.querySelector(".submit");

let rating = 0;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

submitBtn.onclick = () => {
  score.innerHTML = rating;
  preSubmitDiv.classList.add("hidden");
  postSubmitDiv.classList.remove("hidden");
};

button_1.onclick = () => {
  rating = button_1.innerText;
};
button_2.onclick = () => {
  rating = button_2.innerText;
};
button_3.onclick = () => {
  rating = button_3.innerText;
};
button_4.onclick = () => {
  rating = button_4.innerText;
};
button_5.onclick = () => {
  rating = button_5.innerText;
};
