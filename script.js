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

  // Меняем текст
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Плавно увеличиваем кнопку "Да" — но ограничиваем максимум
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  const newSize = Math.min(currentSize * 1.25, 40); // максимум 40px
  yesButton.style.fontSize = `${newSize}px`;

  // Мобильное смещение кнопки "Нет"
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Диапазоны меньше, чем были раньше — чтобы кнопка не улетала за экран
  const maxX = screenWidth < 600 ? 80 : 120;
  const maxY = screenHeight < 600 ? 50 : 70;

  const x = Math.random() * maxX * 2 - maxX;
  const y = Math.random() * maxY * 2 - maxY;

  noButton.style.transition = "transform 0.2s ease";
  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
