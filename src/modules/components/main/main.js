import Greeting from '../sectionGreeting/greeting';

class Main {
  element = document.createElement('main');
  constructor() {
    this.element.classList.add('main');
    this.greeting = new Greeting();
    this.addContent();
  }
  addContent() {
    this.element.append(this.greeting.element);
  }
}
export default Main;
