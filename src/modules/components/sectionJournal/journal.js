import All from './tabsContent/all';
import Yacht from './tabsContent/yacht';
import Technique from './tabsContent/technique';
import Photo from './tabsContent/photo';
import People from './tabsContent/people';
import LifeStyle from './tabsContent/lifeStyle';

import './style.scss';
import './media.scss';

class Journal {
  element = document.createElement('section');
  constructor() {
    this.element.classList.add('journal');
    this.addContent();
  }
  addContent() {
    this.element.innerHTML = `
      <div class="journal-container journal-container-top">
      <div class="journal-wrapper">
        <div data-aos="fade-down" class="journal-wrapper__goto">
          <div class="journal-wrapper__goto-block">
            <h3 class="journal-wrapper__goto-name">перейти в журнал</h3>
            <div class="journal-wrapper__goto-line"></div>
          </div>
          <button class="journal-wrapper__goto-button">
            <svg class="journal-wrapper__goto-button-svg" width="7" height="11" xmlns="http://www.w3.org/2000/svg">
              <path d="m1.49 10.259 4.67-4.67L1.49.92" stroke-linecap="round" />
            </svg>
          </button>
        </div>
        <h2 data-aos="fade-down" class="journal-wrapper__title">журнал</h2>
        <div class="journal-wrapper__slider-block">
          <div class="journal-wrapper__slider-nav">
            <div class="swiper swiper-tabs">
              <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide-tabs swiper-slide-tabs-active">
                  <div class="swiper-slide-tabs__overlay"></div>
                  <a class="swiper-slide-link swiper-slide-link-active" href="">все</a>
                </div>
                <div class="swiper-slide swiper-slide-tabs">
                  <div class="swiper-slide-tabs__overlay"></div>
                  <a class="swiper-slide-link" href="">яхты</a>
                </div>
                <div class="swiper-slide swiper-slide-tabs">
                  <div class="swiper-slide-tabs__overlay"></div>
                  <a class="swiper-slide-link" href="">стиль жизни</a>
                </div>
                <div class="swiper-slide swiper-slide-tabs">
                  <div class="swiper-slide-tabs__overlay"></div>
                  <a class="swiper-slide-link" href="">люди</a>
                </div>
                <div class="swiper-slide swiper-slide-tabs">
                  <div class="swiper-slide-tabs__overlay"></div>
                  <a class="swiper-slide-link" href="">техника</a>
                </div>
                <div class="swiper-slide swiper-slide-tabs">
                  <div class="swiper-slide-tabs__overlay"></div>
                  <a class="swiper-slide-link" href="">фото</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="journal-wrapper__nav">
          <ul data-aos="fade-up" class="journal-wrapper__list">
            <li class="journal-wrapper__item">
              все
              <div class="journal-wrapper__item-overlay"></div>
              <div class="journal-wrapper__item-line journal-wrapper__item-line-active"></div>
            </li>
            <li class="journal-wrapper__item">
              яхты
              <div class="journal-wrapper__item-overlay"></div>
              <div class="journal-wrapper__item-line"></div>
            </li>
            <li class="journal-wrapper__item">
              стиль жизни
              <div class="journal-wrapper__item-overlay"></div>
              <div class="journal-wrapper__item-line"></div>
            </li>
            <li class="journal-wrapper__item">
              люди
              <div class="journal-wrapper__item-overlay"></div>
              <div class="journal-wrapper__item-line"></div>
            </li>
            <li class="journal-wrapper__item">
              техника
              <div class="journal-wrapper__item-overlay"></div>
              <div class="journal-wrapper__item-line"></div>
            </li>
            <li class="journal-wrapper__item">
              фото
              <div class="journal-wrapper__item-overlay"></div>
              <div class="journal-wrapper__item-line"></div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="journal-content">
      <div class="journal-content-add"></div>
    </div>
    `;
  }
  initContent() {
    const tabAll = new All();
    const wrapperContent = document.querySelector('.journal-content');
    wrapperContent.append(tabAll.element);
    tabAll.initHorizontalSlider();
    tabAll.initVerticalSlider();
    tabAll.initPhotoSlider();
    tabAll.initSliderTabs();
    tabAll.initMobileSliders();
  }
  addEventListenerToWrapperTabsTablet() {
    const swiperTabs = document.querySelector('.swiper-tabs');
    const collectionOverlay = document.querySelectorAll('.swiper-slide-tabs__overlay');
    collectionOverlay.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (!e.target.parentNode.classList.contains('swiper-slide-tabs-active')) {
          item.parentNode.children[1].classList.add('swiper-slide-link-active');
          item.parentNode.classList.add('swiper-slide-tabs-active');
          this.switchContent(item.parentNode.children[1].textContent);
          removeActiveClass(item.parentNode);
        }
      });
    });
    function removeActiveClass(activeElement) {
      const collectionTabs = document.querySelectorAll('.swiper-slide-tabs');
      collectionTabs.forEach((item) => {
        if (item !== activeElement) {
          item.children[1].classList.remove('swiper-slide-link-active');
          item.classList.remove('swiper-slide-tabs-active');
        }
      });
    }
  }
  addEventListenerToWrapperTabs() {
    const wrapperTabs = document.querySelector('.journal-wrapper__list');
    const collectionOverlay = document.querySelectorAll('.journal-wrapper__item-overlay');

    wrapperTabs.addEventListener('click', (e) => {
      const textTab = e.target.parentNode.textContent.trim();
      if (!e.target.parentNode.children[1].classList.contains('journal-wrapper__item-line-active')) {
        this.switchContent(textTab);
      }
      collectionOverlay.forEach((item) => {
        const line = item.parentNode.children[1];
        if (e.target === item && !line.classList.contains('journal-wrapper__item-line-active')) {
          line.classList.add('journal-wrapper__item-line-active');
        } else line.classList.remove('journal-wrapper__item-line-active');
      });
    });
  }
  switchContent(textTab) {
    switch (textTab) {
      case 'все':
        {
          const wrapperContent = document.querySelector('.journal-content-add');
          wrapperContent.classList.remove('journal-content-add-visible');
          // const tabAll = new All();
          // this.changeContent(tabAll.element);
          // tabAll.initHorizontalSlider();
          // tabAll.initVerticalSlider();
          // tabAll.initPhotoSlider();
        }
        break;
      case 'яхты':
        {
          this.changeContent(new Yacht().element);
        }
        break;
      case 'стиль жизни':
        {
          this.changeContent(new LifeStyle().element);
        }
        break;
      case 'люди':
        {
          this.changeContent(new People().element);
        }
        break;
      case 'техника':
        {
          this.changeContent(new Technique().element);
        }
        break;
      case 'фото':
        {
          this.changeContent(new Photo().element);
        }
        break;
    }
  }
  changeContent(element) {
    const wrapperContent = document.querySelector('.journal-content-add');
    wrapperContent.classList.add('journal-content-add-visible');
    wrapperContent.innerHTML = '';
    wrapperContent.append(element);
  }
}
export default Journal;
