function main() {
  const burgerButton = document.querySelector('.burger-button');
  const burgerMenu = document.querySelector('.burger-menu');
  let burgerIsActive = burgerButton.classList.contains('burger-button_active');

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-button_active');
    burgerMenu.classList.toggle('burger-menu_active');
    burgerIsActive = !burgerIsActive;

    if (burgerIsActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  });
}

main();
