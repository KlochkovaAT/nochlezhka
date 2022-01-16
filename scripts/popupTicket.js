const getPriceTicket = document.querySelector('.events__card-image');
const popupTicket = document.querySelector('.popup_type_ticket');
const closePriceTicket = document.querySelector('#closeButton');



function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

getPriceTicket.addEventListener('click', function () {
  openPopup(popupTicket);
});

closePriceTicket.addEventListener('click', function () {
  closePopup(popupTicket);
});

