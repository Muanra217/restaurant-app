import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-to.css';
import '../styles/like.css';
import './drawer';
import './component/app-bar';
import './component/foot-er';
import App from './app';
import swRegister from './sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const skipToContent = document.querySelector('.skip-to');
skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#mainContent').focus();
});
