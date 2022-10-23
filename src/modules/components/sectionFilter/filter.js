import './style.scss';

class Filter {
  element = document.createElement('section');
  constructor() {
    this.element.classList.add('filter');
    this.addContent();
  }
  addContent() {
    this.element.innerHTML = `
     <div class="filter-container">
      <div class="filter-block">
        <h3 class="filter-block__name">Тип судна</h3>
        <div class="filter-block__select">
          <div class="filter-block__panel filter-block__panel-type">
            <span class="filter-block__span filter-block__span-type">Любой</span>
            <button class="filter-block__button">
              <svg class="filter-block__button-arrow" width="11" height="7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m.506 1.008 4.67 4.67 4.668-4.67" stroke="#22282D" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <ul class="filter-block__list filter-block__list-type">
            <li class="filter-block__item">Любой</li>
            <li class="filter-block__item">Любой1</li>
            <li class="filter-block__item">Любой2</li>
          </ul>
        </div>
      </div>
      <div class="filter-block">
        <h3 class="filter-block__name">Категории</h3>
        <div class="filter-block__select">
          <div class="filter-block__panel filter-block__panel-category">
            <span class="filter-block__span filter-block__span-category">Введите название</span>
            <button class="filter-block__button filter-block__button-category">
              <svg class="filter-block__button-arrow" width="11" height="7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m.506 1.008 4.67 4.67 4.668-4.67" stroke="#22282D" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <ul class="filter-block__list filter-block__list-category">
            <li class="filter-block__item">Введите название</li>
            <li class="filter-block__item">Введите название1</li>
            <li class="filter-block__item">Введите название2</li>
          </ul>
        </div>
      </div>


      <div class="filter-block">
      <h3 class="filter-block__name">Цена</h3>
      <div class="filter-block__price-content">
        <div class="filter-block__price">
          <div class="filter-block__price-from">
            <span class="filter-block__span-price">от </span><span class="filter-block__span-from"> 0</span>
          </div>
          <div class="filter-block__price-to">
            <span class="filter-block__span-price">до </span><span class="filter-block__span-to"> 44 231 321</span>
          </div>
        </div>
        <div class="filter-block__buttons">
          <button class="filter-block__button-price filter-block__button-dol filter-block__button-price-active">
            <div class="filter-block__button-price-overlay"></div>
            <svg class="filter-block__button-svg-active" width="8" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.828 10.29c0-.48-.17-.884-.508-1.212-.333-.328-.898-.625-1.695-.89-1.11-.339-1.92-.78-2.43-1.32C.69 6.32.437 5.627.437 4.788c0-.854.248-1.555.743-2.101.5-.547 1.185-.873 2.054-.977V0h1.164v1.719c.875.12 1.555.487 2.04 1.101.49.615.734 1.456.734 2.524H5.734c0-.735-.174-1.318-.523-1.75-.349-.433-.82-.649-1.414-.649-.62 0-1.094.162-1.422.485-.328.317-.492.763-.492 1.336 0 .53.172.955.515 1.273.35.313.92.599 1.711.86.797.255 1.417.538 1.86.851.448.307.776.667.984 1.078.214.412.32.893.32 1.445 0 .88-.265 1.589-.796 2.125-.526.537-1.266.855-2.22.954v1.492H3.103v-1.492c-.97-.089-1.73-.433-2.282-1.032C.273 11.716 0 10.898 0 9.867h1.445c0 .724.19 1.281.57 1.672.38.39.92.586 1.618.586.682 0 1.219-.164 1.61-.492.39-.328.585-.776.585-1.344Z"
                 />
             </svg>
          </button>
          <button class="filter-block__button-price filter-block__button-rub">
            <div class="filter-block__button-price-overlay"></div>
            <svg class="filter-block__button-svg-noactive" width="11" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.25 7.54H.43V6.311h5.82c.568 0 1.034-.09 1.398-.273.365-.182.633-.44.805-.773.177-.334.266-.727.266-1.18 0-.37-.084-.724-.25-1.063-.162-.338-.425-.617-.79-.836-.359-.218-.835-.328-1.429-.328H3.547V12h-1.5V.625H6.25c.86 0 1.583.148 2.172.445.588.292 1.034.698 1.336 1.22.307.515.46 1.108.46 1.78 0 .73-.153 1.354-.46 1.875-.302.516-.748.912-1.336 1.188-.589.27-1.313.406-2.172.406Zm-.094 1.07v1.234H.43V8.609h5.726Z"
              />
            </svg>
          </button>
          <button class="filter-block__button-price filter-block__button-eu">
            <div class="filter-block__button-price-overlay"></div>
            <svg class="filter-block__button-svg-noactive" width="9" height="13" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.367 10.938c.302 0 .597-.024.883-.07.286-.048.56-.113.82-.196l.157 1.25c-.292.073-.597.13-.915.172a7.394 7.394 0 0 1-.96.062 4.95 4.95 0 0 1-1.704-.281 3.691 3.691 0 0 1-1.335-.852 3.92 3.92 0 0 1-.876-1.414c-.203-.567-.304-1.229-.304-1.984V5.023c0-.76.101-1.424.304-1.992a3.826 3.826 0 0 1 .868-1.422A3.57 3.57 0 0 1 4.633.758a4.854 4.854 0 0 1 1.71-.29c.329 0 .644.024.946.071.307.042.62.099.938.172L8.07 1.969a5.403 5.403 0 0 0-.82-.196 5.056 5.056 0 0 0-.89-.078c-.417 0-.795.068-1.133.203-.334.136-.62.339-.86.61-.234.27-.414.614-.539 1.031-.125.417-.187.906-.187 1.469v2.617c0 .563.062 1.052.187 1.469.13.416.315.76.555 1.031.24.27.526.474.86.61.338.135.713.203 1.124.203Zm.274-6.18v.976H.742v-.976h5.899Zm0 2.039v.969H.742v-.97h5.899Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="container-range">
          <div class="slider-track"></div>
          <input type="range" min="0" max="44231321" value="0" id="slider-1" />
          <input type="range" min="0" max="44231321" value="44231321" id="slider-2" />
        </div>
      </div>


    <div class="filter-block">
        <button class="filter-block__button-search">Найти</button>
      </div>

    </div>
    </div>
    <div class="filter-line"></div>
    `;
  }
}
export default Filter;