import './style.scss';

class Preloader {
  element = document.createElement('div');
  constructor() {
    this.element.classList.add('load');
    this.addContent();
  }
  addContent() {
    this.element.innerHTML = `
      <h1 class="preloader-title">ITBOAT</h1>
      <div class="preloader"></div>
    `;
  }
  stopPreloader() {
    const loader = document.querySelector('.load');
    loader.classList.add('load-hidden');
  }
}
export default Preloader;
