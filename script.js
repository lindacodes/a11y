const currentDate = new Date();
document.querySelector('footer').innerHTML = `&copy; ${currentDate.getFullYear()} Linda Connolly`;

const buttons = document.querySelectorAll('.accordion button');
const lastButtonIndex = buttons.length - 1;

buttons.forEach((button, idx) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const accordionPanel = button.parentElement.nextElementSibling;

    button.setAttribute('aria-expanded', !isExpanded);
    accordionPanel.classList.toggle('hidden');
  });

  button.addEventListener('keydown', (e) => {
    if (idx < lastButtonIndex && e.key === 'ArrowDown') {
      buttons[idx + 1].focus();
    }

    if (idx > 0 && e.key === 'ArrowUp') {
      buttons[idx - 1].focus();
    }

    if (e.key === 'Home') {
      buttons[0].focus();
    }

    if (e.key === 'End') {
      buttons[lastButtonIndex].focus();
    }
  });
});
