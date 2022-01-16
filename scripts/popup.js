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
const popupDonate = document.querySelector('.popup_type_donate');
const closeDonateButton = popupDonate.querySelector('.popup__close-button');
const sumOfMoneyButton = popupDonate.querySelectorAll('.popup__sum-of-money');
const inputSum = popupDonate.querySelector('.popup__sum-of-money-input');
const donateFormElement = document.querySelector('.popup__form');
const headerMain = document.querySelector('.header');
const email = document.querySelector('.popup__email-input');
const freePrice = document.querySelector('.popup__sum-of-money-input');
const paymentMetod = popupDonate.querySelectorAll('.popup__payment-method');
const metod = popupDonate.querySelectorAll('.popup__payment-method-label');
const buttonDecr = document.querySelector('.popup__ticket-btn-decr');
const buttonIncr = document.querySelector('.popup__ticket-btn-incr');
const inputQty = document.querySelector('.popup__ticket-qty');
const totalSum = document.querySelector('#popup__ticket-price');
const ticketForm = document.querySelector('#ticket');
const price = 500;

function openPopup(popup) {
  popup.classList.add('popup_opened');
  headerMain.classList.remove('header_sticky');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  headerMain.classList.add('header_sticky');
}

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

let price = '';

sumOfMoneyButton.forEach(function (item) {
  item.addEventListener('click', function () {
    sumOfMoneyButton.forEach(function (item) {
      item.classList.remove('popup__sum-of-money_active');
    });
    price = item.textContent;
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
  if(price) {
    console.log('сумма:' + price);
  } else {
    console.log(freePrice.value + " р");
  }
  console.log('email: ' + email.value);
  console.log('способ оплаты: ' );
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
    typePayment: ticketForm.querySelector('input[name="payment"]:checked').value
  }
  console.log(formInfo);
});
