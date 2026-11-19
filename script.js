// Заповніть перед публікацією. Номер телефону вкажіть у форматі +380XXXXXXXXX.
const business = {
  phone: '',
  address: '',
  hours: '',
};

if (business.phone) {
  const phoneLink = document.createElement('a');
  phoneLink.href = `tel:${business.phone}`;
  phoneLink.textContent = business.phone;
  document.querySelector('[data-phone]').replaceChildren(phoneLink);
  document.querySelectorAll('[data-call]').forEach((link) => {
    link.href = phoneLink.href;
  });
}

if (business.address) {
  document.querySelector('[data-address]').textContent = business.address;
}

if (business.hours) {
  document.querySelector('[data-hours]').textContent = business.hours;
}
