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
     <div class="header-mobile-menu">
      <div class="header-mobile-menu__head">
        <div class="header-panel__user-block header-panel__user-block-mobile">
          <div class="header-user-image">
            <img class="header-user-avatar" src="./ava.jpg" alt="user-avatar" />
          </div>
          <h3 class="header-panel__user-name header-panel__user-name-mobile">Алина Шрайдер</h3>
        </div>
        <div class="header-panel__buttons-marks header-panel__buttons-marks-mobile">
          <button class="header-panel__button-favorites header-panel__button-marks">
            <svg class="header-panel__button-marks-svg header-panel__button-marks-svg-mobile" width="17" height="21" xmlns="http://www.w3.org/2000/svg">
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
            <span class="header-panel__button-compare-count header-panel__button-compare-count-mobile">4</span>
            <svg class="header-panel__button-marks-svg header-panel__button-marks-svg-mobile" width="22" height="23" xmlns="http://www.w3.org/2000/svg">
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
        <div class="header-mobile-menu__close"></div>
      </div>
      <div class="header-mobile-menu__body">
        <div class="header-mobile-menu__body__hidden">
          <div class="header-mobile-menu__body__hidden-top">
            <div class="header-mobile-menu__body__hidden-back">
              <svg width="6" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1 1 4l4 3" stroke="#909396" stroke-linecap="round" />
              </svg>
            </div>
            <h3 class="header-mobile-menu__body__hidden-title">журнал</h3>
          </div>
          <ul class="header-mobile-menu__body-list header-mobile-menu__body-list-hidden">
            <li class="header-mobile-menu__body-item">
              <a class="header-mobile-menu__body-link" href="">все</a>
            </li>
            <li class="header-mobile-menu__body-item">
              <a class="header-mobile-menu__body-link" href="">стиль жизни</a>
            </li>
            <li class="header-mobile-menu__body-item">
              <a class="header-mobile-menu__body-link" href="">люди</a>
            </li>
            <li class="header-mobile-menu__body-item">
              <a class="header-mobile-menu__body-link" href="">техника</a>
            </li>
            <li class="header-mobile-menu__body-item">
              <a class="header-mobile-menu__body-link" href="">яхты</a>
            </li>
            <li class="header-mobile-menu__body-item">
              <a class="header-mobile-menu__body-link" href="">Premium</a>
            </li>
          </ul>
        </div>
        <ul class="header-mobile-menu__body-list">
          <li class="header-mobile-menu__body-item header-mobile-menu__body-item-journal">
            <a class="header-mobile-menu__body-link" href="">журнал</a>
            <div class="header-mobile-menu__body-item-button">
              <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m1.008 10.518 4.67-4.67-4.67-4.669" stroke="#22282D" stroke-linecap="round" />
              </svg>
            </div>
          </li>
          <li class="header-mobile-menu__body-item">
            <a class="header-mobile-menu__body-link" href="">каталог</a>
          </li>
          <li class="header-mobile-menu__body-item">
            <a class="header-mobile-menu__body-link" href="">маркет</a>
          </li>
          <li class="header-mobile-menu__body-item">
            <a class="header-mobile-menu__body-link" href="">события</a>
          </li>
          <li class="header-mobile-menu__body-item">
            <a class="header-mobile-menu__body-link" href="">о нас</a>
          </li>
        </ul>
      </div>
      <div class="header-mobile-menu__footer">
        <div class="header-mobile-menu__footer-social">
          <ul class="header-mobile-menu__footer-social-list">
            <li class="header-mobile-menu__footer-social-item">
              <a class="header-mobile-menu__footer-social-link" href="">
                <svg width="10" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.239 16V8.702h2.449l.367-2.845H6.239V4.041c0-.823.228-1.384 1.41-1.384l1.505-.001V.111A20.41 20.41 0 0 0 6.96 0C4.788 0 3.302 1.326 3.302 3.76v2.097H.846v2.845h2.456V16h2.937Z"
                    fill="#7A8084"
                  />
                </svg>
              </a>
            </li>
            <li class="header-mobile-menu__footer-social-item">
              <a class="header-mobile-menu__footer-social-link" href="">
                <svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 2.039a6.839 6.839 0 0 1-1.89.518A3.262 3.262 0 0 0 15.553.744a6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 5.078v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 13.5c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 2.039Z"
                    fill="#7A8084"
                  />
                </svg>
              </a>
            </li>
            <li class="header-mobile-menu__footer-social-item">
              <a class="header-mobile-menu__footer-social-link" href="">
                <svg width="16" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.857 8.579c-.043-.072-.309-.65-1.589-1.839-1.34-1.244-1.16-1.042.454-3.193.983-1.31 1.376-2.11 1.253-2.452-.117-.326-.84-.24-.84-.24l-2.404.014s-.178-.024-.31.055c-.13.078-.213.258-.213.258s-.38 1.014-.889 1.876c-1.071 1.82-1.5 1.915-1.675 1.802-.407-.263-.305-1.058-.305-1.622 0-1.763.267-2.498-.521-2.688C8.556.487 8.364.445 7.695.438 6.837.428 6.11.44 5.699.642c-.274.134-.485.433-.356.45.159.021.519.097.71.357.247.335.238 1.09.238 1.09s.142 2.074-.331 2.332c-.325.177-.77-.184-1.725-1.835-.49-.845-.86-1.78-.86-1.78s-.07-.174-.198-.267C3.023.876 2.807.84 2.807.84L.521.854s-.343.01-.469.159c-.112.133-.009.407-.009.407s1.79 4.187 3.817 6.298c1.859 1.936 3.969 1.809 3.969 1.809h.956s.289-.032.436-.191c.136-.146.13-.42.13-.42s-.018-1.284.578-1.473c.587-.186 1.341 1.24 2.14 1.79.604.415 1.063.324 1.063.324l2.137-.03s1.118-.07.588-.948Z"
                    fill="#7A8084"
                  />
                </svg>
              </a>
            </li>
            <li class="header-mobile-menu__footer-social-item">
              <a class="header-mobile-menu__footer-social-link" href="">
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#a)" fill="#7A8084">
                    <path
                      d="M4.331 0h7.338A4.336 4.336 0 0 1 16 4.331v7.338A4.336 4.336 0 0 1 11.669 16H4.331A4.336 4.336 0 0 1 0 11.669V4.331A4.336 4.336 0 0 1 4.331 0ZM8 12.375A4.38 4.38 0 0 0 12.375 8 4.38 4.38 0 0 0 8 3.625 4.38 4.38 0 0 0 3.625 8 4.38 4.38 0 0 0 8 12.375ZM3.52 4.657c.713 0 1.293-.58 1.293-1.293s-.58-1.293-1.292-1.293c-.713 0-1.293.58-1.293 1.293s.58 1.293 1.293 1.293Z"
                    />
                    <path
                      d="M8 4.563A3.44 3.44 0 0 1 11.437 8 3.44 3.44 0 0 1 8 11.437 3.44 3.44 0 0 1 4.563 8 3.44 3.44 0 0 1 8 4.563ZM3.52 3.01a.355.355 0 1 1 0 .71.355.355 0 0 1 0-.71Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a"><path fill="#fff" transform="matrix(-1 0 0 1 16 0)" d="M0 0h16v16H0z" /></clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="header-mobile-menu__footer-button">
          <svg width="276" height="49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.833 5.464C1.008 2.796 2.976 0 5.768 0H270.42c2.739 0 4.697 2.698 3.954 5.335C272.914 10.515 271 18.458 271 24.5c0 6.041 1.914 13.985 3.373 19.165.743 2.637-1.215 5.335-3.954 5.335H5.769c-2.793 0-4.761-2.796-3.936-5.464C3.433 38.362 5.5 30.512 5.5 24.5c0-6.012-2.068-13.863-3.667-19.036Z"
              fill="#8E9FBC"
            />
          </svg>
        </div>
      </div>
    </div>
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
  initMobileMenu() {
    const body = document.querySelector('body');
    const burgerButton = document.querySelector('.header-user__burger');
    const button = document.querySelector('.header-mobile-menu__body-item-button');
    const menuHidden = document.querySelector('.header-mobile-menu__body__hidden');
    const backButton = document.querySelector('.header-mobile-menu__body__hidden-back');
    const menu = document.querySelector('.header-mobile-menu');
    const buttonClose = document.querySelector('.header-mobile-menu__close');

    buttonClose.addEventListener('click', () => {
      console.log(menu);
      menu.classList.remove('header-mobile-menu-visible');
      body.classList.remove('scroll--hidden');
    });
    burgerButton.addEventListener('click', () => {
      menu.classList.add('header-mobile-menu-visible');
      body.classList.add('scroll--hidden');
    });
    button.addEventListener('click', () => {
      menuHidden.classList.add('header-mobile-menu__body__visible');
    });
    backButton.addEventListener('click', () => {
      menuHidden.classList.remove('header-mobile-menu__body__visible');
    });
  }
  initScrollTop() {
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.logo-link-svg-header');
    const headerLink = document.querySelectorAll('.header-panel__nav-link');
    const headerButtonBorder = document.querySelector('.panel__button-border-header');
    const headerButtonsMark = document.querySelectorAll('.header-panel__button-marks-svg');
    const headerSpanCount = document.querySelectorAll('.header-panel__button-compare-count')[1];
    const userName = document.querySelectorAll('.header-panel__user-name')[1];
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
        console.log(headerSpanCount);
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
    // const button = document.querySelector('.header-user__burger');
    // button.addEventListener('click', () => {
    //   button.classList.toggle('header-user__burger-active');
    // });
  }
}
export default Header;
