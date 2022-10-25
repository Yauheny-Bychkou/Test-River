import './style.scss';
import './media.scss';

class Footer {
  element = document.createElement('footer');
  constructor() {
    this.element.classList.add('footer');
    this.addContent();
  }
  addContent() {
    this.element.innerHTML = `
      <div class="footer-container">
      <div class="footer-wrapper">
        <div class="footer-left">
          <div class="logo">
            <a href="" class="logo-link">
              <svg class="logo-link-svg-footer" width="120" height="25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.888 24V.576h4.791V24H.888Zm15.443 0V4.906H8.843V.576h19.803v4.33h-7.524V24h-4.79Zm33.609-6.885c0 2.01-.722 3.667-2.165 4.969C46.33 23.36 44.485 24 42.238 24H31.804V.576h8.305c2.176 0 3.951.615 5.323 1.846 1.396 1.206 2.094 2.768 2.094 4.684 0 1.728-.58 3.135-1.739 4.224 2.769 1.017 4.153 2.945 4.153 5.785ZM39.718 4.693h-3.3v5.36h3.3c.97 0 1.716-.238 2.236-.71.544-.474.816-1.136.816-1.988 0-.828-.272-1.479-.816-1.952-.52-.473-1.266-.71-2.236-.71Zm5.501 12.244c0-.899-.295-1.609-.887-2.13-.591-.543-1.408-.815-2.449-.815h-5.465v5.891h5.465c1.041 0 1.858-.26 2.45-.78.59-.521.886-1.243.886-2.166Zm7.28-4.649c-.048-3.336 1.159-6.21 3.62-8.624C58.602 1.25 61.536.079 64.92.15c3.384-.07 6.318 1.1 8.802 3.514 2.508 2.413 3.738 5.288 3.691 8.624.047 3.336-1.183 6.21-3.691 8.624-2.484 2.414-5.418 3.585-8.802 3.514-3.383.07-6.317-1.1-8.802-3.514-2.46-2.413-3.667-5.288-3.62-8.624Zm19.98 0c0-2.224-.72-4.058-2.164-5.501-1.42-1.467-3.206-2.2-5.36-2.2-2.176 0-3.974.721-5.394 2.164-1.42 1.444-2.13 3.29-2.13 5.537 0 2.248.71 4.093 2.13 5.537 1.42 1.443 3.218 2.165 5.395 2.165 2.153 0 3.94-.722 5.359-2.165 1.443-1.444 2.165-3.29 2.165-5.537ZM96.07 24l-1.313-3.052h-9.582L83.86 24h-5.147L89.184.15h1.597L101.216 24H96.07Zm-2.98-6.992-3.124-7.914-3.123 7.914h6.246ZM107.033 24V4.906h-7.489V.576h19.804v4.33h-7.524V24h-4.791Z"
                />
              </svg>
            </a>
          </div>
          <p class="footer-left__description">
            Все права защищены. Журнал зарегистрирован в Федеральной службе по надзору в сфере связи и массовых
            коммуникаций.
          </p>
          <div class="footer-left__social">
            <a class="footer-left__social-fb footer-left__social-link" href="">
              <svg class="footer-left__social-link-svg" width="10" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.24 16V8.702h2.448l.367-2.845H6.239V4.041c0-.823.228-1.384 1.41-1.384l1.505-.001V.111A20.41 20.41 0 0 0 6.96 0C4.79 0 3.302 1.326 3.302 3.76v2.097H.846v2.845h2.456V16h2.937Z"
                />
              </svg>
            </a>
            <a class="footer-left__social-twit footer-left__social-link" href="">
              <svg class="footer-left__social-link-svg" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 2.039a6.839 6.839 0 0 1-1.89.518A3.262 3.262 0 0 0 15.553.744a6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 5.078v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 13.5c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 2.039Z"
                />
              </svg>
            </a>
            <a class="footer-left__social-vk footer-left__social-link" href="">
              <svg class="footer-left__social-link-svg" width="16" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.857 8.578c-.042-.072-.308-.65-1.589-1.838-1.34-1.244-1.16-1.042.454-3.193.984-1.31 1.377-2.11 1.254-2.452-.118-.326-.84-.24-.84-.24L12.73.869s-.178-.024-.31.055c-.13.078-.213.258-.213.258s-.38 1.014-.889 1.876c-1.07 1.82-1.5 1.915-1.675 1.802-.407-.263-.305-1.058-.305-1.622 0-1.763.267-2.498-.521-2.688C8.556.487 8.364.445 7.695.438 6.837.428 6.11.44 5.699.642c-.274.134-.485.433-.356.45.159.02.519.097.71.357.247.335.238 1.089.238 1.089s.142 2.075-.331 2.333c-.325.177-.77-.184-1.725-1.835-.49-.845-.86-1.78-.86-1.78s-.07-.174-.197-.267c-.154-.113-.37-.15-.37-.15L.52.855s-.343.01-.469.159c-.112.133-.009.407-.009.407s1.79 4.187 3.817 6.298c1.859 1.936 3.969 1.809 3.969 1.809h.956s.289-.032.436-.191c.136-.146.131-.42.131-.42s-.019-1.284.577-1.473c.587-.186 1.341 1.24 2.14 1.79.604.415 1.063.324 1.063.324l2.138-.03s1.117-.07.588-.949Z"
                />
              </svg>
            </a>
            <a class="footer-left__social-inst footer-left__social-link" href="">
              <svg class="footer-left__social-link-svg" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#a)">
                  <path
                    d="M4.331 0h7.338A4.336 4.336 0 0 1 16 4.331v7.338A4.336 4.336 0 0 1 11.669 16H4.331A4.336 4.336 0 0 1 0 11.669V4.331A4.336 4.336 0 0 1 4.331 0ZM8 12.375A4.38 4.38 0 0 0 12.375 8 4.38 4.38 0 0 0 8 3.625 4.38 4.38 0 0 0 3.625 8 4.38 4.38 0 0 0 8 12.375ZM3.52 4.657c.713 0 1.293-.58 1.293-1.293s-.58-1.293-1.292-1.293c-.713 0-1.293.58-1.293 1.293s.58 1.293 1.293 1.293Z"
                  />
                  <path
                    d="M8 4.563A3.44 3.44 0 0 1 11.437 8 3.44 3.44 0 0 1 8 11.437 3.44 3.44 0 0 1 4.563 8 3.44 3.44 0 0 1 8 4.563ZM3.52 3.01a.355.355 0 1 1 0 .71.355.355 0 0 1 0-.71Z"
                  />
                </g>
                <defs>
                  <clipPath id="a"><path transform="matrix(-1 0 0 1 16 0)" d="M0 0h16v16H0z" /></clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-links">
          <div class="footer-links__wrapper">
            <div class="footer-links__block">
              <h3 class="footer-links__block-name">
                <span class="footer-links__block-name-underline">Каталог</span>
              </h3>
              <ul class="footer-links__block-list">
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Каталог судов</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Верфи</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Ссылка 3</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Ссылка 4</a>
                </li>
              </ul>
            </div>
            <div class="footer-links__block">
              <h3 class="footer-links__block-name"><span class="footer-links__block-name-underline">Маркет</span></h3>
              <ul class="footer-links__block-list">
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Маркет судов</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Компании по продаже лодок</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Ссылка 3</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Ссылка 4</a>
                </li>
              </ul>
            </div>
            <div class="footer-links__block">
              <h3 class="footer-links__block-name"><span class="footer-links__block-name-underline">Журнал</span></h3>
              <ul class="footer-links__block-list">
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Подписка</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">О нас</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Категория 3</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Категория 5</a>
                </li>
              </ul>
            </div>
            <div class="footer-links__block">
              <h3 class="footer-links__block-name">
                <span class="footer-links__block-name-underline">Пользователю</span>
              </h3>
              <ul class="footer-links__block-list">
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">События</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Категория 2</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Категория 3</a>
                </li>
                <li class="footer-links__block-item">
                  <a href="" class="footer-links__block-link">Категория 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-subscribe">
          <h3 class="footer-subscribe__title">Подписка на рассылку</h3>
          <div class="footer-subscribe__mail">
            <input class="footer-subscribe__input-mail" type="mail" placeholder="Email..." />
            <svg class="footer-subscribe__svg-mail" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m17.268 9.061-4.266 3.434a2.223 2.223 0 0 1-2.746 0L5.954 9.061"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                clip-rule="evenodd"
                d="M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 0 1 1.326 3.704v6.528a5.017 5.017 0 0 1-1.326 3.704 4.957 4.957 0 0 1-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="footer-subscribe__agree">
            <div class="footer-subscribe__agree-check">
              <svg
                class="footer-subscribe__agree-check-svg"
                width="22"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.335 6.227c-2.9 3.425-5.279 6.226-5.286 6.223a316.63 316.63 0 0 1-1.766-2.075L3.53 8.307l-1.766 2.085L0 12.476l3.527 4.163 3.526 4.165 7.047-8.322 7.05-8.323-1.762-2.08A262.327 262.327 0 0 0 17.618 0c-.005 0-2.382 2.803-5.282 6.227Z"
                  fill="#000"
                />
              </svg>
            </div>
            <p class="footer-subscribe__agree-description">Согласие на обработку <span>персональных данных</span></p>
          </div>
          <button class="footer-subscribe__button">
            <svg class="footer-subscribe__button-svg" width="269" height="49" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.833 5.464C1.008 2.796 2.976 0 5.768 0H262.92c2.739 0 4.697 2.698 3.954 5.335-1.459 5.18-3.373 13.123-3.373 19.165 0 6.041 1.914 13.985 3.373 19.165.743 2.637-1.215 5.335-3.954 5.335H5.769c-2.793 0-4.761-2.796-3.936-5.464C3.433 38.362 5.5 30.512 5.5 24.5c0-6.012-2.068-13.863-3.667-19.036Z"
              />
              <path
                d="M5.768.5H262.92c2.393 0 4.13 2.367 3.473 4.7-1.46 5.18-3.392 13.183-3.392 19.3 0 6.117 1.932 14.12 3.392 19.3.657 2.333-1.08 4.7-3.473 4.7H5.769c-2.44 0-4.189-2.454-3.459-4.816C3.91 38.51 6 30.595 6 24.5c0-6.095-2.09-14.009-3.69-19.184C1.58 2.954 3.33.5 5.768.5Z"
                stroke-opacity=".2"
              />
            </svg>
          </button>
          <div class="footer-subscribe__menu">
            <div class="footer-subscribe__menu-block">
              <div class="footer-subscribe__menu-block-overlay"></div>
              <div class="footer-subscribe__menu-block-content">
                <button class="footer-subscribe__menu-block-button">
                  <svg
                    class="footer-subscribe__menu-block-svg"
                    width="11"
                    height="7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m1 1.008 4.67 4.67 4.668-4.67" stroke-linecap="round" />
                  </svg>
                </button>
                <h3 class="footer-subscribe__menu-block-name">Каталог</h3>
              </div>
              <div class="footer-subscribe__menu-contaiter">
                <ul class="footer-subscribe__menu-list">
                  <li class="footer-subscribe__menu-item">
                    <a class="footer-subscribe__menu-link" href="">point1</a>
                  </li>
                  <li class="footer-subscribe__menu-item">
                    <a class="footer-subscribe__menu-link" href="">point2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-subscribe__menu-block">
              <div class="footer-subscribe__menu-block-overlay"></div>
              <div class="footer-subscribe__menu-block-content">
                <button class="footer-subscribe__menu-block-button">
                  <svg
                    class="footer-subscribe__menu-block-svg"
                    width="11"
                    height="7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m1 1.008 4.67 4.67 4.668-4.67" stroke-linecap="round" />
                  </svg>
                </button>
                <h3 class="footer-subscribe__menu-block-name">Маркет</h3>
              </div>
              <div class="footer-subscribe__menu-contaiter">
                <ul class="footer-subscribe__menu-list">
                  <li class="footer-subscribe__menu-item">
                    <a class="footer-subscribe__menu-link" href="">point1</a>
                  </li>
                  <li class="footer-subscribe__menu-item">
                    <a class="footer-subscribe__menu-link" href="">point2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-subscribe__menu-block">
              <div class="footer-subscribe__menu-block-overlay"></div>
              <div class="footer-subscribe__menu-block-content">
                <button class="footer-subscribe__menu-block-button footer-subscribe__menu-block-button-visible">
                  <svg
                    class="footer-subscribe__menu-block-svg"
                    width="11"
                    height="7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m1 1.008 4.67 4.67 4.668-4.67" stroke-linecap="round" />
                  </svg>
                </button>
                <h3 class="footer-subscribe__menu-block-name">Журнал</h3>
              </div>
              <div class="footer-subscribe__menu-contaiter">
                <ul class="footer-subscribe__menu-list">
                  <li class="footer-subscribe__menu-item">
                    <a class="footer-subscribe__menu-link" href="">point1</a>
                  </li>
                  <li class="footer-subscribe__menu-item">
                    <a class="footer-subscribe__menu-link" href="">point2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-subscribe__menu-block">
              <div class="footer-subscribe__menu-block-overlay"></div>
              <div class="footer-subscribe__menu-block-content">
                <button class="footer-subscribe__menu-block-button">
                  <svg
                    class="footer-subscribe__menu-block-svg"
                    width="11"
                    height="7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m1 1.008 4.67 4.67 4.668-4.67" stroke-linecap="round" />
                  </svg>
                </button>
                <h3 class="footer-subscribe__menu-block-name">Пользователю</h3>
              </div>
              <div class="footer-subscribe__menu-contaiter">
                <ul class="footer-subscribe__menu-list">
                  <li class="footer-subscribe__menu-item">
                    <a class="footer-subscribe__menu-link" href="">point1</a>
                  </li>
                  <li class="footer-subscribe__menu-item">
                    <a class="footer-subscribe__menu-link" href="">point2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-line"></div>
    <div class="footer-container">
      <div class="footer-breadcrumbs">
        <span class="footer-breadcrumbs__year">© 2014-2022 ITBOAT</span>
        <div><span>Дизайн и разработка: </span><a class="footer-breadcrumbs__link" href="">REKASTUDIO</a></div>
      </div>
    </div>
    `;
  }
  addEventListenerToCheckBlock() {
    const checkBlock = document.querySelector('.footer-subscribe__agree-check');
    const checkSvg = document.querySelector('.footer-subscribe__agree-check-svg');
    checkBlock.addEventListener('click', () => {
      checkSvg.classList.toggle('footer-subscribe__agree-check-svg-visible');
    });
  }
  addEventListenerToWrapperMenu() {
    const wrapperMenu = document.querySelector('.footer-subscribe__menu');
    const collectionOverlay = document.querySelectorAll('.footer-subscribe__menu-block-overlay');
    wrapperMenu.addEventListener('click', (e) => {
      collectionOverlay.forEach((item) => {
        const menu = item.parentNode.children[2];
        const buttonSvg = item.parentNode.children[1].children[0].children[0];
        const button = item.parentNode.children[1].children[0];
        const buttonStyleDispay = window.getComputedStyle(button, null).display;
        if (e.target === item && buttonStyleDispay !== 'none') {
          buttonSvg.classList.toggle('footer-subscribe__menu-block-svg-active');
          menu.classList.toggle('footer-subscribe__menu-contaiter-visible');
        } else {
          menu.classList.remove('footer-subscribe__menu-contaiter-visible');
          buttonSvg.classList.remove('footer-subscribe__menu-block-svg-active');
        }
      });
    });
  }
}
export default Footer;
