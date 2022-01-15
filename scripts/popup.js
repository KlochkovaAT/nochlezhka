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
const donateFormElement = document.querySelector('.popup__donate-form');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

sumOfMoneyButton.forEach(function (item) {
  item.addEventListener('click', function () {
    sumOfMoneyButton.forEach(function (item) {
      item.classList.remove('popup__sum-of-money_active');
    });
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
  closePopup(popupDonate);
  donateFormElement.reset();
});
