const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  const buttons = accordion.querySelectorAll('.accordion button');
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
        e.preventDefault();
      }

      if (idx > 0 && e.key === 'ArrowUp') {
        buttons[idx - 1].focus();
        e.preventDefault();
      }

      if (e.key === 'Home') {
        buttons[0].focus();
        e.preventDefault();
      }

      if (e.key === 'End') {
        buttons[lastButtonIndex].focus();
        e.preventDefault();
      }
    });

  });
});
