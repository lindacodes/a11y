const currentDate = new Date();
document.querySelector('footer').innerHTML = `&copy; ${currentDate.getFullYear()} Linda Connolly`;

const buttons = document.querySelectorAll('.accordion button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const accordionPanel = button.parentElement.nextElementSibling;

    button.setAttribute('aria-expanded', !isExpanded);
    accordionPanel.classList.toggle('hidden');
  })
});
