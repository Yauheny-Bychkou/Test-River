import Header from '../components/header/header';
import Main from '../components/main/main';

class MainPage {
  constructor() {
    this.header = new Header();
    this.main = new Main();
    this.addContent();
    this.initSelectType();
    this.initSelectCategory();
    this.initInputRange();
    this.changeCurrent();
  }
  addContent() {
    const body = document.querySelector('body');
    body.append(this.header.element, this.main.element);
  }
  initSelectType() {
    const selectType = document.querySelector('.filter-block__panel-type');
    const optionsWrapperSelectType = document.querySelector('.filter-block__list-type');
    const listSelectType = document.querySelector('.filter-block__list-type');
    const spanSelectType = document.querySelector('.filter-block__span-type');

    selectType.addEventListener('click', (e) => {
      optionsWrapperSelectType.classList.toggle('filter-block__list-visible');
    });
    listSelectType.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-block__item')) {
        optionsWrapperSelectType.classList.remove('filter-block__list-visible');
        spanSelectType.innerHTML = e.target.textContent;
      }
    });
  }
  initSelectCategory() {
    const selectCategory = document.querySelector('.filter-block__panel-category');
    const optionsWrapperSelectType = document.querySelector('.filter-block__list-category');
    const listSelectType = document.querySelector('.filter-block__list-category');
    const spanSelectType = document.querySelector('.filter-block__span-category');
    selectCategory.addEventListener('click', () => {
      optionsWrapperSelectType.classList.toggle('filter-block__list-visible');
    });
    listSelectType.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-block__item')) {
        optionsWrapperSelectType.classList.remove('filter-block__list-visible');
        spanSelectType.innerHTML = e.target.textContent;
      }
    });
  }
  initInputRange() {
    let sliderOne = document.getElementById('slider-1');
    let sliderTwo = document.getElementById('slider-2');
    let displayValOne = document.querySelector('.filter-block__span-from');
    let displayValTwo = document.querySelector('.filter-block__span-to');
    let sliderTrack = document.querySelector('.slider-track');
    let sliderMaxValue = document.getElementById('slider-1').max;
    let minGap = 5;
    fillColor();
    sliderOne.addEventListener('input', () => {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
      }
      displayValOne.textContent = sliderOne.value;
      fillColor();
    });
    sliderTwo.addEventListener('input', () => {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
      }
      displayValTwo.textContent = sliderTwo.value;
      fillColor();
    });
    function fillColor() {
      let percent1 = (sliderOne.value / sliderMaxValue) * 100;
      let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
      sliderTrack.style.background = `linear-gradient(to right, #8E9FBC ${percent1}% , #8E9FBC ${percent1}% , #8E9FBC ${percent2}% , #8E9FBC ${percent2}%)`;
    }
  }
  changeCurrent() {
    const wrapperButtons = document.querySelector('.filter-block__buttons');
    const buttonCollection = document.querySelectorAll('.filter-block__button-price-overlay');
    wrapperButtons.addEventListener('click', (e) => {
      buttonCollection.forEach((item) => {
        if (!e.target.parentNode.classList.contains('filter-block__button-price-active') && e.target === item) {
          item.parentNode.classList.add('filter-block__button-price-active');
          item.parentNode.children[1].classList.remove(item.parentNode.children[1].classList[0]);
          item.parentNode.children[1].classList.add('filter-block__button-svg-active');
        } else {
          item.parentNode.classList.remove('filter-block__button-price-active');
          item.parentNode.children[1].classList.remove(item.parentNode.children[1].classList[0]);
          item.parentNode.children[1].classList.add('filter-block__button-svg-noactive');
        }
      });
    });
  }
}
export default MainPage;
