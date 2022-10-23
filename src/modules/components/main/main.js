import Filter from '../sectionFilter/filter';
import Greeting from '../sectionGreeting/greeting';

class Main {
  element = document.createElement('main');
  constructor() {
    this.element.classList.add('main');
    this.greeting = new Greeting();
    this.filter = new Filter();
    this.addContent();
  }
  addContent() {
    this.element.append(this.greeting.element, this.filter.element);
  }
}
export default Main;
