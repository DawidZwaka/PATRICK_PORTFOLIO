"use strict";

//nav
document.addEventListener('DOMContentLoaded', function () {
  //main menu
  var open = document.querySelector('.open');
  var close = document.querySelector('.close');
  var nav = document.querySelector('.main-content');
  var navItems = nav.querySelector('ul');
  var aboutMe = document.querySelector('.aboutMe__content');
  var contact = document.querySelector('.contact');
  if (open) open.addEventListener('click', function () {
    nav.classList.add('nav-open');
    navItems.classList.add('slideIn');
    navItems.classList.remove('slideOut');
    if (aboutMe) aboutMe.classList.add('nav-open');
    if (contact) contact.classList.add('nav-open');
  });
  if (close) close.addEventListener('click', function () {
    nav.classList.remove('nav-open');
    navItems.classList.remove('slideIn');
    navItems.classList.add('slideOut');
    if (aboutMe) aboutMe.classList.remove('nav-open');
    if (contact) contact.classList.remove('nav-open');
  }); //modal

  var modal = document.querySelector('.modal');
  var modalContainer = document.querySelector('.modal__container');
  var modalImage = document.querySelector('.modal__image');

  var openModal = function openModal(imageSrc) {
    modal.classList.add('active');
    modalImage.setAttribute('src', imageSrc);
  };

  var closeModal = function closeModal() {
    modal.classList.remove('active');
  }; //gallery modal


  var galleryItems = document.querySelectorAll('.box__image');
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function (ev) {
      if (nav.classList.contains('nav-open')) return;
      var image = ev.target;
      var src = image.getAttribute('src');
      openModal(src);
    });
  });
  if (modal) modal.addEventListener('click', function () {
    closeModal();
  });
});