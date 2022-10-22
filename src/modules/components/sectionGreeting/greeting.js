import './style.scss';

class Greeting {
  element = document.createElement('section');
  constructor() {
    this.element.classList.add('greeting');
    this.addContent();
  }
  addContent() {
    this.element.innerHTML = `
    <div class="greeting-wrapper">
      <div class="greeting-wrapper__block">
        <h2 class="greeting-wrapper__title">
          <span class="greeting-wrapper__title-gray">Выберите</span> вашу новую яхту
        </h2>
      </div>
      <h3 class="greeting-wrapper__description">
        Ищите, сравнивайте и покупайте лодки с помощью нашего каталого и проверенных экспертов
      </h3>
    </div>
    `;
  }
}
export default Greeting;
