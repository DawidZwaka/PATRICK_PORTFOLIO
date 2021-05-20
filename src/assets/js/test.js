//nav
document.addEventListener('DOMContentLoaded', () => {
    //main menu
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    const nav = document.querySelector('.main-content');
    const navItems = nav.querySelector('ul');
    const aboutMe = document.querySelector('.aboutMe__content');
    const contact = document.querySelector('.contact');

    if (open)
        open.addEventListener('click', () => {
            nav.classList.add('nav-open');
            navItems.classList.add('slideIn');
            navItems.classList.remove('slideOut');

            if (aboutMe)
                aboutMe.classList.add('nav-open');

            if (contact)
                contact.classList.add('nav-open');
        });

    if (close)
        close.addEventListener('click', () => {
            nav.classList.remove('nav-open');
            navItems.classList.remove('slideIn');
            navItems.classList.add('slideOut');

            if (aboutMe)
                aboutMe.classList.remove('nav-open');

            if (contact)
                contact.classList.remove('nav-open');
        });

    //modal
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal__image');

    const openModal = (imageSrc) => {

        modal.classList.add('active');
        modalImage.setAttribute('src', imageSrc);
    };

    const closeModal = () => {
        modal.classList.remove('active');
    }

    //gallery modal
    const galleryItems = document.querySelectorAll('.box__image');

    galleryItems.forEach((item) => {
        item.addEventListener('click', (ev) => {
            if (nav.classList.contains('nav-open'))
                return;

            const image = ev.target;
            const src = image.getAttribute('src');

            openModal(src);
        });
    });

    if (modal)
        modal.addEventListener('click', () => {
            closeModal();
        });
});