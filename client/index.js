/* eslint-disable no-console */
/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

// Inicializando scrip de materialize
document.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.querySelectorAll ('.sidenav');
//eslint-disable-next-line no-undef
M.SideNav.init(sideNav);
});
