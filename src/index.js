import MainPage from './modules/pages/mainPage';
import AOS from 'aos';
import './global.scss';
import './normalize.scss';
import './aos.scss';

AOS.init({
  disable: 'phone',
  duration: '1500',
});
new MainPage();
