export const handleOpenMobileMenu = (modal_ID = '', target_ID = '', translate = '') => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    document.body.classList.add('overflow-hidden');
    document.body.style.paddingRight = `${scrollBarCompensation}px`;

    const modal = document.querySelector(`#${modal_ID}`);
    modal.classList.replace('hidden', 'fixed');

    const mobileNav = document.querySelector(`#${target_ID}`);
    mobileNav.classList.remove(translate);
    mobileNav.classList.remove('opacity-0');
};

export const handleCloseMobileMenu = (modal_ID = '', target_ID = '', translate = '') => {
    document.body.classList.remove('overflow-hidden');
    document.body.style.paddingRight = `0px`;

    const modal = document.querySelector(`#${modal_ID}`);
    modal.classList.replace('fixed', 'hidden');

    const mobileNav = document.querySelector(`#${target_ID}`);
    mobileNav.classList.add(translate);
    mobileNav.classList.add('opacity-0');
};

// https://blog.logrocket.com/create-advanced-scroll-lock-react-hook/
