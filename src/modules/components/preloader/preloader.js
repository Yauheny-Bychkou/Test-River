import './style.scss';

class Preloader {
  element = document.createElement('div');
  constructor() {
    this.element.classList.add('load');
    this.addContent();
  }
  addContent() {
    this.element.innerHTML = `
     <div class="center">
      <div class="sk-cube-grid">
        <div class="sk-cube sk-cube-1"></div>
        <div class="sk-cube sk-cube-2"></div>
        <div class="sk-cube sk-cube-3"></div>
        <div class="sk-cube sk-cube-4"></div>
        <div class="sk-cube sk-cube-5"></div>
        <div class="sk-cube sk-cube-6"></div>
        <div class="sk-cube sk-cube-7"></div>
        <div class="sk-cube sk-cube-8"></div>
        <div class="sk-cube sk-cube-9"></div>
      </div>
    `;
  }
  //  <h1 class="preloader-title">ITBOAT</h1>
  // <div class="load-wrapper">

  //       <div class="preloader"></div>
  //     </div>
  stopPreloader() {
    const center = document.querySelector('.center');
    const loader = document.querySelector('.load');
    center.classList.add('load-hidden');
    loader.classList.add('load-hidden');
  }
  removePreloader() {
    const center = document.querySelector('.center');
    const loader = document.querySelector('.load');
    center.classList.add('load-none');
    loader.classList.add('load-none');
  }
}
export default Preloader;
