// HOME

var overlay = document.querySelector(".popup-overlay");

var popupWriteUs = document.querySelector(".popup-write-us");
var openPopupWriteUs = document.querySelector(".contacts__btn");
var closePopupWriteUs = document.querySelector(".popup-write-us__close-btn");
var nameInputPopupWriteUs = document.querySelector(".feedback-form__user-name");
var emailInputPopupWriteUs = document.querySelector(".feedback-form__user-email");
var submitPopupWriteUs = document.querySelector(".feedback-form__btn");

var popupMap = document.querySelector(".popup-map");
var openPopupMap = document.querySelector(".contacts__map--wrap");
var closePopupMap = document.querySelector(".popup-map__close-btn");

openPopupWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("dis-flex");
  popupWriteUs.classList.add("dis-flex");
  nameInputPopupWriteUs.focus();
});

submitPopupWriteUs.addEventListener("click", function (evt) {
  if (!nameInputPopupWriteUs.value || !emailInputPopupWriteUs.value) {
      evt.preventDefault();
      console.log("Введите");
  } else {
    localStorage.setItem("nameInputPopupWriteUs", nameInputPopupWriteUs.value);
  }
});

closePopupWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("dis-flex");
  popupWriteUs.classList.remove("dis-flex");
});

openPopupMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("dis-flex");
  popupMap.classList.add("dis-flex");
});

closePopupMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("dis-flex");
  popupMap.classList.remove("dis-flex");
});

// CATALOG

var cardProduct = document.querySelector(".card-product");
var overlay = document.querySelector(".popup-overlay");

var PopupAddedProduct = document.querySelector(".popup-added-product");
var openPopupAddedProduct = cardProduct.querySelector(".card-product__btn--buy");
var closePopupAddedProduct = document.querySelector(".popup-added-product__close-button");
var contituePopupAddedProduct = document.querySelector(".popup-added-product__button--contitue");

openPopupAddedProduct.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("dis-flex");
  PopupAddedProduct.classList.add("dis-flex");
});

closePopupAddedProduct.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("dis-flex");
  PopupAddedProduct.classList.remove("dis-flex");
});

contituePopupAddedProduct.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("dis-flex");
  PopupAddedProduct.classList.remove("dis-flex");
});
