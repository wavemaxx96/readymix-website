const quoteEmail = '';

const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

menuToggle?.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  primaryNav?.classList.toggle('is-open', !isExpanded);
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  });
});

const quoteForm = document.querySelector('#quote-form');
const formStatus = document.querySelector('#form-status');

quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!quoteEmail) {
    formStatus.textContent = 'Quote requests are not connected yet. Add your company email in script.js before launch.';
    return;
  }

  const formData = new FormData(quoteForm);
  const subject = `Ready-mix quote request from ${formData.get('name')}`;
  const body = [
    `Name: ${formData.get('name')}`,
    `Email: ${formData.get('email')}`,
    '',
    'Project details:',
    formData.get('project'),
  ].join('\n');

  window.location.href = `mailto:${quoteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
