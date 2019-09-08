window.onload = event => {
  setActiveClass();
  toggleSubMenu();
};

function setActiveClass() {
  const allMenus = document.querySelectorAll('.menu a');

  allMenus.forEach(item => {
    item.addEventListener('click', event => {
      removeAllActiveMenu();
      item.classList.toggle('active');
    });
  });

  function removeAllActiveMenu() {
    allMenus.forEach(menu => {
      menu.classList.remove('active');
    });
  }
}

function toggleSubMenu() {
  const subMenus = document.querySelectorAll('.submenu');

  console.log(subMenus);
  subMenus.forEach(submenu => {
    submenu.addEventListener('click', evt => {
      removeAllSubMenuShow(submenu);
      submenu.classList.toggle('show');
      console.log('estou dentro do show');
    });
  });

  function removeAllSubMenuShow(activeSubMenu) {
    subMenus.forEach(submenu => {
      submenu.classList.remove('show');
    });
  }
}
