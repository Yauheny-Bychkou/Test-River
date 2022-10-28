import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Main from '../components/main/main';
import Preloader from '../components/preloader/preloader';

class MainPage {
  constructor() {
    this.preloader = new Preloader();
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
    this.addContent();
    this.initPreloader();
    this.initHeader();
    this.initFilter();
    this.initJournalContent();
    this.initFooter();
  }
  initPreloader() {
    window.onload = () => {
      Promise.resolve()
        .then(() => {
          setTimeout(() => {
            this.preloader.stopPreloader();
          }, 500);
        })
        .then(() => {
          setTimeout(() => {
            this.preloader.removePreloader();
          }, 1500);
        });
    };
  }
  addContent() {
    const body = document.querySelector('body');
    body.append(this.preloader.element, this.header.element, this.main.element, this.footer.element);
    if (window.innerWidth < 1300) {
      document.querySelector('.filter').removeAttribute('data-aos');
      document.querySelector('.filter').removeAttribute('data-aos-duration');
      document.querySelector('.journal-wrapper__goto').removeAttribute('data-aos');
      document.querySelector('.journal-wrapper__goto').removeAttribute('data-aos-duration');
      document.querySelector('.journal-wrapper__title').removeAttribute('data-aos');
      document.querySelector('.journal-wrapper__title').removeAttribute('data-aos-duration');
      document.querySelector('.journal-content').removeAttribute('data-aos');
      document.querySelector('.journal-content').removeAttribute('data-aos-duration');
      document.querySelector('.footer').removeAttribute('data-aos');
      document.querySelector('.footer').removeAttribute('data-aos-duration');
    }
  }
  initHeader() {
    this.header.initMobileMenu();
    this.header.initScrollTop();
    this.header.addEventListenerToBurgerButton();
  }
  initFilter() {
    this.main.filter.initSelectType();
    this.main.filter.initSelectCategory();
    this.main.filter.initInputRange();
    this.main.filter.initButtonsChangeCurrency();
  }
  initJournalContent() {
    this.main.journal.initContent();
    this.main.journal.addEventListenerToWrapperTabs();
    this.main.journal.addEventListenerToWrapperTabsTablet();
  }
  initFooter() {
    this.footer.addEventListenerToCheckBlock();
    this.footer.addEventListenerToWrapperMenu();
  }
}
export default MainPage;
