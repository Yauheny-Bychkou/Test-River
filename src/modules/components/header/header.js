import './style.scss';
import './media.scss';

class Header {
  element = document.createElement('header');
  constructor() {
    this.element.classList.add('header');
    this.addContent();
  }
  addContent() {
    this.element.innerHTML = `
     <div class="container header-container">
      <div class="header-wrapper">
      <div class="header-user-image header-user-image-mobile">
                      <img class="header-user-avatar" src="./ava.jpg" alt="user-avatar" />
                    </div>
        <div class="logo logo-desctop">
          <a href="" class="logo-link">
            <svg class="logo-link-svg-header" width="120" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.888 25.018V.6h4.791v24.418H.888Zm15.443 0V5.114H8.843V.6h19.803v4.514h-7.524v19.904h-4.79Zm33.609-7.177c0 2.096-.722 3.823-2.165 5.18-1.444 1.331-3.29 1.997-5.537 1.997H31.804V.6h8.305c2.176 0 3.951.642 5.323 1.924 1.396 1.258 2.094 2.886 2.094 4.884 0 1.8-.58 3.268-1.739 4.402 2.769 1.061 4.153 3.071 4.153 6.03ZM39.718 4.892h-3.3v5.587h3.3c.97 0 1.716-.247 2.236-.74.544-.494.816-1.184.816-2.072 0-.863-.272-1.542-.816-2.035-.52-.493-1.266-.74-2.236-.74Zm5.501 12.764c0-.937-.295-1.677-.887-2.22-.591-.567-1.408-.85-2.449-.85h-5.465v6.14h5.465c1.041 0 1.858-.27 2.45-.813.59-.543.886-1.295.886-2.257Zm7.28-4.847c-.048-3.477 1.159-6.474 3.62-8.99C58.602 1.303 61.536.082 64.92.156c3.384-.074 6.318 1.147 8.802 3.663 2.508 2.516 3.738 5.513 3.691 8.99.047 3.478-1.183 6.475-3.691 8.99-2.484 2.516-5.418 3.737-8.802 3.663-3.383.074-6.317-1.147-8.802-3.663-2.46-2.515-3.667-5.512-3.62-8.99Zm19.98 0c0-2.318-.72-4.23-2.164-5.734-1.42-1.53-3.206-2.294-5.36-2.294-2.176 0-3.974.752-5.394 2.257-1.42 1.504-2.13 3.428-2.13 5.771 0 2.344.71 4.267 2.13 5.772 1.42 1.504 3.218 2.257 5.395 2.257 2.153 0 3.94-.753 5.359-2.257 1.443-1.505 2.165-3.428 2.165-5.772Zm23.59 12.21-1.313-3.182h-9.582l-1.313 3.181h-5.147L89.184.156h1.597l10.435 24.862H96.07Zm-2.98-7.29-3.124-8.25-3.123 8.25h6.246Zm13.945 7.29V5.113h-7.489V.6h19.804v4.514h-7.524v19.904h-4.791Z"
              />
            </svg>
          </a>
        </div>
        <div class="header-panel">
          <nav class="header-panel__nav">
            <ul class="header-panel__nav-list">
              <li class="header-panel__nav-item">
                <a href="" class="header-panel__nav-link">журнал</a>
                <div class="header-panel__nav-line"></div>
              </li>
              <li class="header-panel__nav-item">
                <a href="" class="header-panel__nav-link">каталог</a>
                <div class="header-panel__nav-line"></div>
              </li>
              <li class="header-panel__nav-item">
                <a href="" class="header-panel__nav-link">маркет</a>
                <div class="header-panel__nav-line"></div>
              </li>
              <li class="header-panel__nav-item">
                <a href="" class="header-panel__nav-link">события</a>
                <div class="header-panel__nav-line"></div>
              </li>
              <li class="header-panel__nav-item">
                <a href="" class="header-panel__nav-link">о нас</a>
                <div class="header-panel__nav-line"></div>
              </li>
            </ul>
          </nav>
          <button class="panel__button panel__button-header">
            <svg class="panel__button-border panel__button-border-header" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.768.5H209.42c2.393 0 4.13 2.367 3.473 4.7-1.46 5.18-3.392 13.183-3.392 19.3 0 6.117 1.932 14.12 3.392 19.3.657 2.333-1.08 4.7-3.473 4.7H5.769c-2.44 0-4.189-2.454-3.459-4.816C3.91 38.51 6 30.595 6 24.5c0-6.095-2.09-14.009-3.69-19.184C1.58 2.954 3.33.5 5.768.5Z"
              />
            </svg>
          </button>
          <div class="header-panel__buttons-marks">
            <button class="header-panel__button-favorites header-panel__button-marks header-panel__button-marks-hidden">
              <svg class="header-panel__button-marks-svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g opacity=".5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M11.492 2.789H7.753c-3.075 0-5.003 2.177-5.003 5.259v8.314c0 3.082 1.92 5.259 5.003 5.259h8.824c3.085 0 5.004-2.177 5.004-5.26v-4.027"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M8.828 10.92 16.3 3.449c.93-.93 2.44-.93 3.37 0l1.218 1.217a2.383 2.383 0 0 1 0 3.37l-7.51 7.51a2.17 2.17 0 0 1-1.534.636H8.099l.094-3.78a2.17 2.17 0 0 1 .635-1.48Z"
                  />
                  <path d="m15.165 4.602 4.566 4.566" />
                </g>
              </svg>
            </button>
            <button class="header-panel__button-favorites header-panel__button-marks">
              <svg class="header-panel__button-marks-svg" width="17" height="21" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path
                    clip-rule="evenodd"
                    d="m8.179 16.632-5.684 3.25a.927.927 0 0 1-1.264-.394 1.08 1.08 0 0 1-.114-.467V4.623c0-2.746 1.799-3.845 4.386-3.845h6.08c2.508 0 4.385 1.026 4.385 3.662V19.02c0 .26-.099.509-.275.693a.92.92 0 0 1-1.12.167l-5.719-3.249a.685.685 0 0 0-.675 0Z"
                  />
                  <path d="M5.02 7.322h6.992" />
                </g>
              </svg>
            </button>
            <button class="header-panel__button-compare header-panel__button-marks">
              <span class="header-panel__button-compare-count">4</span>
              <svg class="header-panel__button-marks-svg" width="22" height="23" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.201 9.502v6.86M10.868 6.22v10.142M15.458 13.127v3.235"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  clip-rule="evenodd"
                  d="M15.515 1.3H6.144C2.877 1.3.83 3.612.83 6.885v8.83c0 3.273 2.038 5.585 5.314 5.585h9.371c3.277 0 5.315-2.312 5.315-5.585v-8.83c0-3.273-2.038-5.585-5.315-5.585Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="header-panel__user">
            <div class="header-panel__overlay">
              <div class="header-popUp">
                <div class="header-popUp-wrapper">
                  <div class="header-popUp__user">
                    <div class="header-user-image">
                      <img class="header-user-avatar" src="./ava.jpg" alt="user-avatar" />
                    </div>
                    <div class="header-popUp__user-info">
                      <h3 class="header-popUp__user-name">Алина Шрайдер</h3>
                      <h4 class="header-popUp__user-description">Личные данные</h4>
                    </div>
                  </div>
                  <nav class="header-popUp__nav">
                    <ul class="header-popUp__list">
                      <li class="header-popUp__item">
                        <a href="" class="header-popUp__link">Мои объявления</a>
                        <span class="header-popUp__count">10</span>
                      </li>
                      <li class="header-popUp__item">
                        <a href="" class="header-popUp__link">Мои презенетации</a>
                        <span class="header-popUp__count">4</span>
                      </li>
                      <li class="header-popUp__item">
                        <a href="" class="header-popUp__link">Компания</a>
                      </li>
                    </ul>
                  </nav>
                  <a href="" class="header-popUp__exit">Выйти</a>
                </div>
              </div>
            </div>
            <div class="header-panel__user-block">
              <div class="header-user-image">
                <img class="header-user-avatar" src="./ava.jpg" alt="user-avatar" />
              </div>
              <h3 class="header-panel__user-name">Алина Шрайдер</h3>
            </div>
          </div>
          <div class="header-user__burger">
          </div>
        </div>
      </div>
    </div>
    `;
  }
  initScrollTop() {
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.logo-link-svg-header');
    const headerLink = document.querySelectorAll('.header-panel__nav-link');
    const headerButtonBorder = document.querySelector('.panel__button-border-header');
    const headerButtonsMark = document.querySelectorAll('.header-panel__button-marks-svg');
    const headerSpanCount = document.querySelector('.header-panel__button-compare-count');
    const userName = document.querySelector('.header-panel__user-name');
    const headerBurger = document.querySelector('.header-user__burger');
    const headerButton = document.querySelector('.panel__button-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        header.classList.add('header-scroll');
        headerLogo.classList.add('header-logo-scroll');
        headerLink.forEach((item) => {
          item.classList.add('header-link-scroll');
        });
        headerButtonBorder.classList.add('header-button-border-scroll');
        headerButtonsMark.forEach((item) => {
          item.classList.add('header-mark-scroll');
        });
        headerSpanCount.classList.add('header-span-scroll');
        userName.classList.add('header-name-scroll');
        headerBurger.classList.add('header-burger-scroll');
        headerButton.classList.add('header-button-scroll');
      } else {
        header.classList.remove('header-scroll');
        headerLogo.classList.remove('header-logo-scroll');
        headerLink.forEach((item) => {
          item.classList.remove('header-link-scroll');
        });
        headerButtonBorder.classList.remove('header-button-border-scroll');
        headerButtonsMark.forEach((item) => {
          item.classList.remove('header-mark-scroll');
        });
        headerSpanCount.classList.remove('header-span-scroll');
        userName.classList.remove('header-name-scroll');
        headerBurger.classList.remove('header-burger-scroll');
        headerButton.classList.remove('header-button-scroll');
      }
    });
  }
  addEventListenerToBurgerButton() {
    const button = document.querySelector('.header-user__burger');
    button.addEventListener('click', () => {
      button.classList.toggle('header-user__burger-active');
    });
  }
}
export default Header;
