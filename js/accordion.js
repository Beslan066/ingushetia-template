document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
      header.addEventListener('click', () => {
          const targetId = header.getAttribute('data-target');
          const drawer = document.getElementById(targetId);
          const icon = header.querySelector('.icon');
          const isOpen = drawer.style.maxHeight && drawer.style.maxHeight !== '0px';

          headers.forEach(h => {
              const d = document.getElementById(h.getAttribute('data-target'));
              const i = h.querySelector('.icon');
              d.style.maxHeight = '0px';
              h.classList.remove('active');
              i.src = '../../img/icons/Plus.svg';
          });

          if (!isOpen) {
              drawer.style.maxHeight = drawer.scrollHeight + 'px';
              header.classList.add('active');
              icon.src = '../../img/icons/Minus.svg';
          } else {
              drawer.style.maxHeight = '0px';
              header.classList.remove('active');
              icon.src = '../../img/icons/Plus.svg';
          }
      });
  });
});
