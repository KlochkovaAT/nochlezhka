const menuButton = document.querySelector('.header__menu-button');
const popupMenu = document.querySelector('.popup_type_menu');
const changeCityButton = popupMenu.querySelector('.popup__change-city-button');
const popupChangeCity = document.querySelector('.popup_type_change-city');
const backButton = popupChangeCity.querySelector('.popup__back-button');
const formChangeCity = popupChangeCity.querySelector('.popup__change-city-form');
const labelCity = formChangeCity.querySelectorAll('.popup__form-radio');
const cityName = popupMenu.querySelector('.popup__city-name');
const openDonateButtonInPopup = popupMenu.querySelector('.popup__open-donate-button');
const openDonateButtonInHeader = document.querySelector('.header__donate-button');
const donateFormElement = document.querySelector('.popup__form');
const headerMain = document.querySelector('.header');
const freePrice = document.querySelector('.popup__sum-of-money-input');
const ticketForm = document.querySelector('#ticket');
const getPriceTicket = document.querySelector('.events__card-image');

const popupDonate = document.querySelector('.popup_type_donate');
const closeDonateButton = popupDonate.querySelector('.popup__close-button');
const sumOfMoneyButton = popupDonate.querySelectorAll('.popup__sum-of-money');
const inputSum = popupDonate.querySelector('.popup__sum-of-money-input');


const popupTicket = document.querySelector('.popup_type_ticket');
const closePriceTicket = popupTicket.querySelector('.popup__close-button');
const buttonDecr = popupTicket.querySelector('.popup__ticket-btn-decr');
const buttonIncr = popupTicket.querySelector('.popup__ticket-btn-incr');
const inputQty = popupTicket.querySelector('.popup__ticket-qty');
const totalSum = popupTicket.querySelector('#popup__ticket-price');

const price = 500;

function openPopup(popup) {
  popup.classList.add('popup_opened');
  headerMain.classList.remove('header_sticky');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  headerMain.classList.add('header_sticky');
}

getPriceTicket.addEventListener('click', function () {
  openPopup(popupTicket);
});

closePriceTicket.addEventListener('click', function () {
  closePopup(popupTicket);
});


menuButton.addEventListener('click', function () {
  popupMenu.classList.toggle('popup_opened');
  if (popupChangeCity.classList.contains('popup_opened')) {
    closePopup(popupChangeCity);
    closePopup(popupMenu);
    getCheckedRadio();
  }
  if (popupDonate.classList.contains('popup_opened')) {
    closePopup(popupDonate);
    closePopup(popupMenu);
  }
});

changeCityButton.addEventListener('click', function () {
  closePopup(popupMenu);
  openPopup(popupChangeCity);
});

backButton.addEventListener('click', function () {
  openPopup(popupMenu);
  closePopup(popupChangeCity);
  getCheckedRadio();
});

function getCheckedRadio() {
  labelCity.forEach(function (item) {
    if (item.checked) {
      cityName.textContent = item.value;
    }
  });
}

openDonateButtonInPopup.addEventListener('click', function () {
  closePopup(popupMenu);
  openPopup(popupDonate);
});

openDonateButtonInHeader.addEventListener('click', function () {
  openPopup(popupDonate);
});

closeDonateButton.addEventListener('click', function () {
  closePopup(popupDonate);
});

let donateSum = '';

sumOfMoneyButton.forEach(function (item) {
  item.addEventListener('click', function () {
    sumOfMoneyButton.forEach(function (item) {
      item.classList.remove('popup__sum-of-money_active');
    });
    donateSum = item.textContent;
    item.classList.add('popup__sum-of-money_active');
  });
});

inputSum.addEventListener('click', function () {
  sumOfMoneyButton.forEach(function (item) {
    item.classList.remove('popup__sum-of-money_active');
  });
});

donateFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(!donateSum) {
    donateSum = freePrice.value + " ₽";
  }
  const formInfo = {
    sum : donateSum,
    email: donateFormElement.querySelector('#email').value,
    typePayment: donateFormElement.querySelector('input[name="payment"]:checked').value
  }
  console.log(formInfo);
  closePopup(popupDonate);
  location.href = 'pageForHelp.html';
  donateFormElement.reset();
});

function recalculateSum() {
  totalSum.textContent = inputQty.value * price;
}

buttonDecr.addEventListener('click', function () {
  if (inputQty.value > 1) {
    inputQty.value--;
  }
  recalculateSum();
});

buttonIncr.addEventListener('click', function () {
  inputQty.value++;
  recalculateSum();
});

inputQty.addEventListener('change', recalculateSum);

ticketForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formInfo = {
    count: inputQty.value,
    sum : totalSum.textContent,
    email: ticketForm.querySelector('#email-ticket').value,
    typePayment: ticketForm.querySelector('input[name="payment-ticket"]:checked').value
  }
  console.log(formInfo);
});
