import Filter from '../sectionFilter/filter';
import Greeting from '../sectionGreeting/greeting';
import Journal from '../sectionJournal/journal';

class Main {
  element = document.createElement('main');
  constructor() {
    this.element.classList.add('main');
    this.greeting = new Greeting();
    this.filter = new Filter();
    this.journal = new Journal();
    this.addContent();
  }
  addContent() {
    this.element.append(this.greeting.element, this.filter.element, this.journal.element);
  }
}
export default Main;
