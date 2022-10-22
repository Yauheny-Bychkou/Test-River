import './style.scss';

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
            <div class="logo">
        <a href="" class="logo-link">
          <h1 class="header-title">itboat</h1>
        </a>
      </div>
      <div class="header-panel">
        <nav class="header-panel__nav">
          <ul class="header-panel__nav-list">
            <li class="header-panel__nav-item">
              <a href="" class="header-panel__nav-link">журнал</a>
            </li>
            <li class="header-panel__nav-item">
              <a href="" class="header-panel__nav-link">каталог</a>
            </li>
            <li class="header-panel__nav-item">
              <a href="" class="header-panel__nav-link">маркет</a>
            </li>
            <li class="header-panel__nav-item">
              <a href="" class="header-panel__nav-link">события</a>
            </li>
            <li class="header-panel__nav-item">
              <a href="" class="header-panel__nav-link">о нас</a>
            </li>
          </ul>
        </nav>
        <button class="header-panel__button">
          <svg class="header-panel__button-border" xmlns="http://www.w3.org/2000/svg">
          <path  d="M5.768.5H209.42c2.393 0 4.13 2.367 3.473 4.7-1.46 5.18-3.392 13.183-3.392 19.3 0 6.117 1.932 14.12 3.392 19.3.657 2.333-1.08 4.7-3.473 4.7H5.769c-2.44 0-4.189-2.454-3.459-4.816C3.91 38.51 6 30.595 6 24.5c0-6.095-2.09-14.009-3.69-19.184C1.58 2.954 3.33.5 5.768.5Z"  /></svg>
        </button>
        <div class="header-panel__buttons-marks">
          <button class="header-panel__button-favorites header-panel__button-marks">
            <svg class="header-panel__button-marks-svg" width="17" height="21"  xmlns="http://www.w3.org/2000/svg">
              <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path clip-rule="evenodd" d="m8.179 16.632-5.684 3.25a.927.927 0 0 1-1.264-.394 1.08 1.08 0 0 1-.114-.467V4.623c0-2.746 1.799-3.845 4.386-3.845h6.08c2.508 0 4.385 1.026 4.385 3.662V19.02c0 .26-.099.509-.275.693a.92.92 0 0 1-1.12.167l-5.719-3.249a.685.685 0 0 0-.675 0Z"/>
                <path d="M5.02 7.322h6.992"/>
              </g>
            </svg>
          </button>
          <button class="header-panel__button-compare header-panel__button-marks">
            <span class="header-panel__button-compare-count">4</span>
            <svg class="header-panel__button-marks-svg" width="22" height="23" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.201 9.502v6.86M10.868 6.22v10.142M15.458 13.127v3.235" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path clip-rule="evenodd" d="M15.515 1.3H6.144C2.877 1.3.83 3.612.83 6.885v8.83c0 3.273 2.038 5.585 5.314 5.585h9.371c3.277 0 5.315-2.312 5.315-5.585v-8.83c0-3.273-2.038-5.585-5.315-5.585Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="header-panel__user">
          <div class="header-panel__user-image">
            <img class="header-panel__user-avatar" src="./ava.jpg" alt="user-avatar">
          </div>
          <h3 class="header-panel__user-name">Алина Шрайдер</h3>
          </div>
        </div>
        </div>
      </div>
    `;
  }
  addEventListenerToHeader(func) {
    this.element.addEventListener('click', func);
  }
}
export default Header;
