import Header from '../components/header/header';
import Main from '../components/main/main';

class MainPage {
  constructor() {
    this.header = new Header();
    this.main = new Main();
    this.addContent();
    this.addEventListenerToHeader();
  }
  addContent() {
    const body = document.querySelector('body');
    body.append(this.header.element, this.main.element);
  }
  addEventListenerToHeader() {
    this.header.addEventListenerToHeader((e) => {
      // console.log(e);
    });
  }
}
export default MainPage;
