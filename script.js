let messageIndex = 0;

const messages = [
   "Этот вариант не рекомендуется 💫",
  "Выбор не найден… ❌",
  "Ошибка: сердце не согласно 💔",
  "Подожди… что-то не так 👁️",
  "Пересчитать судьбу? 🔮",
  "Этот путь закрыт 🚧",
  "А если по-другому? 🎲"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.3}px`;

  // лёгкое смещение кнопки NO
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
