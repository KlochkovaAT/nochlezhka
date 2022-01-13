const eventsCards = document.querySelectorAll('.events__card');

eventsCards.forEach((element) => {
  element.querySelector('.events__like-button').addEventListener('click', (event) => {
    event.target.classList.toggle('events__like-button_active');
  });
});
