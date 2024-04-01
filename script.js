"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const rainingHeart = document.querySelector(".heart");
const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! Hẹn em ở SG nhaaa :3 <br> Nhớ giữ sức khỏe nhaaa :))";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  startRainingHeart(); // Thêm dòng này để bắt đầu hiệu ứng raining heart
}

function startRainingHeart() {
  rainingHeart.classList.add("MoveDown"); // Thêm lớp "animation" để kích hoạt hiệu ứng raining heart
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Em chac chuaaaa?",
    "Cho chọn lại đóo",
    "Đừng say no mà :(",
    "You're breaking my heart",
    "Cho chọn lần cúi :))",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
