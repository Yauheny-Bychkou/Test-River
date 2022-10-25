import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Main from '../components/main/main';

class MainPage {
  constructor() {
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
    this.addContent();
    this.initHeader();
    this.initFilter();
    this.initJournalContent();
    this.initFooter();
  }
  addContent() {
    const body = document.querySelector('body');
    body.append(this.header.element, this.main.element, this.footer.element);
  }
  initHeader() {
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
