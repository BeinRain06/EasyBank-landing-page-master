const doc= document.querySelector('body');

const expandMenuItems= document.querySelectorAll("[aria-expanded]");

const buttonHamburger= document.querySelector('.hamburger');

doc.addEventListener('click', toggleHamburger);

function toggleHamburger(e){
  if(e.target.classList.contains('hamburger') && e.target.getAttribute('aria-expanded') === 'false'){
    expandMenuItems.forEach((itemMenu) => {
      itemMenu.setAttribute("aria-expanded", "true");
    });
    doc.style.setProperty("--shadow-menu", "visible");

  } else if(e.target.classList.contains('hamburger') && e.target.getAttribute('aria-expanded') === 'true'){
    expandMenuItems.forEach((itemMenu) => {
      itemMenu.setAttribute("aria-expanded", "false");
    });
    doc.style.setProperty("--shadow-menu", "hidden");
  }
}