import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

class All {
  element = document.createElement('div');
  constructor() {
    this.element.classList.add('journal-wrapper__all');
    // this.element.setAttribute('data-aos', 'fade-up');
    // this.element.setAttribute('data-aos-duration', '1500');
    this.addContent();
  }
  addContent() {
    this.element.innerHTML = `
      <div class="journal-wrapper-container">
      <div class="journal-wrapper-container__all-top">
        <div class="swiper swiper-mobile-top">
          <div class="slide-mobile-top__buttons">
            <div class="swiper-button-prev-mobile-top swiper-button-horizontal">
              <svg class="slide-svg" width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.061 6l4.242-4.243a.75.75 0 0 0-1.06-1.06L.47 5.47ZM17 5.25H1v1.5h16v-1.5Z"
                />
              </svg>
            </div>
            <div class="swiper-button-next-mobile-top swiper-button-horizontal">
              <svg class="slide-svg" width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.53 6.53a.75.75 0 0 0 0-1.06L11.757.697a.75.75 0 0 0-1.06 1.06L14.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L16.53 6.53ZM0 6.75h16v-1.5H0v1.5Z"
                />
              </svg>
            </div>
          </div>

          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-mobile-top-slide">
                <div class="swiper-mobile-top-slide__img">
                  <img src="./boat.jpg" alt="boat" class="swiper-mobile-top-slide__image" />
                </div>
                <h3 class="swiper-mobile-top-slide-title">Суперяхта Heesen Altea с дизайном от Omega Architects</h3>
                <p class="swiper-mobile-top-slide-description">
                  Genoa Boat Show 2020 стало для индустрии своего рода отдушиной в череде отмен или непривычных многим
                  виртуальных выставок.
                </p>
                <h4 class="swiper-mobile-top-slide-tag"># выставки и регаты</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-mobile-top-slide">
                <div class="swiper-mobile-top-slide__img">
                  <img src="./boat.jpg" alt="boat" class="swiper-mobile-top-slide__image" />
                </div>
                <h3 class="swiper-mobile-top-slide-title">Суперяхта Heesen Altea с дизайном от Omega Architects</h3>
                <p class="swiper-mobile-top-slide-description">
                  Genoa Boat Show 2020 стало для индустрии своего рода отдушиной в череде отмен или непривычных многим
                  виртуальных выставок.
                </p>
                <h4 class="swiper-mobile-top-slide-tag"># выставки и регаты</h4>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-mobile-top-slide">
                <div class="swiper-mobile-top-slide__img">
                  <img src="./boat.jpg" alt="boat" class="swiper-mobile-top-slide__image" />
                </div>
                <h3 class="swiper-mobile-top-slide-title">Суперяхта Heesen Altea с дизайном от Omega Architects</h3>
                <p class="swiper-mobile-top-slide-description">
                  Genoa Boat Show 2020 стало для индустрии своего рода отдушиной в череде отмен или непривычных многим
                  виртуальных выставок.
                </p>
                <h4 class="swiper-mobile-top-slide-tag"># выставки и регаты</h4>
              </div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-mobile"></div>
          <div class="swiper-scrollbar"></div>
        </div>

        <div class="journal-wrapper-container__all-slider-horizontal">
          <div class="slide-boat__buttons">
            <div class="swiper-button-prev-hor swiper-button-horizontal">
              <svg class="slide-svg" width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.061 6l4.242-4.243a.75.75 0 0 0-1.06-1.06L.47 5.47ZM17 5.25H1v1.5h16v-1.5Z"
                />
              </svg>
            </div>
            <div class="swiper-button-next-hor swiper-button-horizontal">
              <svg class="slide-svg" width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.53 6.53a.75.75 0 0 0 0-1.06L11.757.697a.75.75 0 0 0-1.06 1.06L14.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L16.53 6.53ZM0 6.75h16v-1.5H0v1.5Z"
                />
              </svg>
            </div>
          </div>
          <div class="swiper swiper-horizontal">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slide-boat">
                  <img class="slide-boat-img" src="./boat.jpg" alt="boat" />
                  <div class="slide-boat__content">
                    <div class="slide-boat__block">
                      <div class="slide-boat__top">
                        <h3 class="slide-boat__tag"># выставки и регаты</h3>
                      </div>
                      <h3 class="slide-boat__name">Princess F62</h3>
                      <div class="slide-boat__line"></div>
                    </div>
                    <p class="slide-boat__description">
                      В линейке лодок норвежской компании Marex Boats появилась новая модель семейного круизера, которую
                      широкой публике покажут только в следующем году. Но мы кое-что о ней...
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-boat">
                  <img class="slide-boat-img" src="./boat.jpg" alt="boat" />
                  <div class="slide-boat__content">
                    <div class="slide-boat__block">
                      <div class="slide-boat__top">
                        <h3 class="slide-boat__tag"># выставки и регаты</h3>
                      </div>
                      <h3 class="slide-boat__name">Princess F62</h3>
                      <div class="slide-boat__line"></div>
                    </div>
                    <p class="slide-boat__description">
                      В линейке лодок норвежской компании Marex Boats появилась новая модель семейного круизера, которую
                      широкой публике покажут только в следующем году. Но мы кое-что о ней...
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-boat">
                  <img class="slide-boat-img" src="./boat.jpg" alt="boat" />
                  <div class="slide-boat__content">
                    <div class="slide-boat__block">
                      <div class="slide-boat__top">
                        <h3 class="slide-boat__tag"># выставки и регаты</h3>
                      </div>
                      <h3 class="slide-boat__name">Princess F62</h3>
                      <div class="slide-boat__line"></div>
                    </div>
                    <p class="slide-boat__description">
                      В линейке лодок норвежской компании Marex Boats появилась новая модель семейного круизера, которую
                      широкой публике покажут только в следующем году. Но мы кое-что о ней...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="journal-wrapper-container__all-slider-small">
          <div class="slide-small__buttons">
            <div class="swiper-button-prev-small swiper-button-slider-small">
              <svg class="slide-svg" width="18" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.686 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.277 6l4.242-4.243A.75.75 0 1 0 5.46.697L.686 5.47Zm16.53-.22h-16v1.5h16v-1.5Z"
                />
              </svg>
            </div>
            <div class="swiper-button-next-small swiper-button-slider-small">
              <svg class="slide-svg" width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.53 6.53a.75.75 0 0 0 0-1.06L11.757.697a.75.75 0 0 0-1.06 1.06L14.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L16.53 6.53ZM0 6.75h16v-1.5H0v1.5Z"
                />
              </svg>
            </div>
          </div>
          <div class="swiper swiper-small">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slide-small">
                  <img class="slide-small__img" src="./face.jpg" alt="face" />
                  <div class="slide-small__content">
                    <div class="slide-small__top">
                      <h3 class="slide-small__tag"># лица индустрии</h3>
                      <h3 class="slide-small__name">Франсис Лапп</h3>
                    </div>
                    <div class="slide-small__bottom">
                      <p class="slide-small__description">
                        Франсис Лапп — о том, как верфь Sunreef Yachts развивает сегмент роскошных катамаранов...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="journal-wrapper-container__all-top-middle">
        <div class="slide-mobile-middle__buttons">
          <div class="swiper-button-prev-mobile-middle swiper-button-horizontal">
            <svg class="slide-svg" width="17" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.061 6l4.242-4.243a.75.75 0 0 0-1.06-1.06L.47 5.47ZM17 5.25H1v1.5h16v-1.5Z"
              />
            </svg>
          </div>
          <div class="swiper-button-next-mobile-middle swiper-button-horizontal">
            <svg class="slide-svg" width="17" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.53 6.53a.75.75 0 0 0 0-1.06L11.757.697a.75.75 0 0 0-1.06 1.06L14.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L16.53 6.53ZM0 6.75h16v-1.5H0v1.5Z"
              />
            </svg>
          </div>
        </div>
        <div class="swiper swiper-mobile-middle">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-slide-mobile-middle">
                <div class="swiper-slide-mobile-middle__img">
                  <img src="./girl.jpg" alt="girl" class="swiper-slide-mobile-middle__image" />
                </div>
                <p class="swiper-slide-mobile-middle__descripton">
                  Марианна Хендрикс — о том, что сейчас происходит на верфи Moonen и в каком направлении она движется
                  после смены владельцев
                </p>
                <h3 class="swiper-slide-mobile-middle__tag"># лица индустрии</h3>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-mobile-middle">
                <div class="swiper-slide-mobile-middle__img">
                  <img src="./girl.jpg" alt="girl" class="swiper-slide-mobile-middle__image" />
                </div>
                <p class="swiper-slide-mobile-middle__descripton">
                  Марианна Хендрикс — о том, что сейчас происходит на верфи Moonen и в каком направлении она движется
                  после смены владельцев
                </p>
                <h3 class="swiper-slide-mobile-middle__tag"># лица индустрии</h3>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-mobile-middle">
                <div class="swiper-slide-mobile-middle__img">
                  <img src="./girl.jpg" alt="girl" class="swiper-slide-mobile-middle__image" />
                </div>
                <p class="swiper-slide-mobile-middle__descripton">
                  Марианна Хендрикс — о том, что сейчас происходит на верфи Moonen и в каком направлении она движется
                  после смены владельцев
                </p>
                <h3 class="swiper-slide-mobile-middle__tag"># лица индустрии</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="journal-wrapper-container journal-wrapper-container-slider">
      <div  class="journal-wrapper-container__all-bottom">
        <div class="journal-wrapper-container__all-top-bottom">
          <div class="swiper swiper-mobile-bottom">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slide-swiper-bottom">
                  <div class="slide-swiper-bottom__img">
                    <img src="./yaht.jpg" alt="yacht" class="slide-swiper-bottom__image" />
                  </div>
                  <h3 class="slide-swiper-bottom__title">Суперяхта Heesen Altea с дизайном от Omega Architects</h3>
                  <p class="slide-swiper-bottom__description">
                    Genoa Boat Show 2020 стало для индустрии своего рода отдушиной в череде отмен или непривычных многим
                    виртуальных выставок.
                  </p>
                  <h3 class="slide-swiper-bottom__tag"># выставки и регаты</h3>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-swiper-bottom">
                  <div class="slide-swiper-bottom__img">
                    <img src="./yaht.jpg" alt="yacht" class="slide-swiper-bottom__image" />
                  </div>
                  <h3 class="slide-swiper-bottom__title">Суперяхта Heesen Altea с дизайном от Omega Architects</h3>
                  <p class="slide-swiper-bottom__description">
                    Genoa Boat Show 2020 стало для индустрии своего рода отдушиной в череде отмен или непривычных многим
                    виртуальных выставок.
                  </p>
                  <h3 class="slide-swiper-bottom__tag"># выставки и регаты</h3>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide-swiper-bottom">
                  <div class="slide-swiper-bottom__img">
                    <img src="./yaht.jpg" alt="yacht" class="slide-swiper-bottom__image" />
                  </div>
                  <h3 class="slide-swiper-bottom__title">Суперяхта Heesen Altea с дизайном от Omega Architects</h3>
                  <p class="slide-swiper-bottom__description">
                    Genoa Boat Show 2020 стало для индустрии своего рода отдушиной в череде отмен или непривычных многим
                    виртуальных выставок.
                  </p>
                  <h3 class="slide-swiper-bottom__tag"># выставки и регаты</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper swiper-photo">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-bottom swiper-slide-bottom-none">
              <div class="slide-photo">
                <img src="./girl.jpg" alt="girl" class="slide-photo__img" />
                <div class="slide-photo__content">
                  <h3 class="slide-photo__tag"># лица индустрии</h3>
                  <p class="slide-photo__description">
                    Марианна Хендрикс — о том, что сейчас происходит на верфи Moonen и в каком направлении она движется
                    после смены владельцев
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-bottom">
              <div class="slide-photo-horizontal">
                <img src="./mambo.jpg" alt="mambo" class="slide-photo-horizontal__img" />
                <div class="slide-photo-horizontal__top">
                  <h3 class="slide-photo-horizontal__name">MAMBO — первенец технологий 3D-печати</h3>
                  <div class="slide-photo-horizontal__line"></div>
                  <div class="slide-photo-horizontal__line-small"></div>
                </div>
                <p class="slide-photo-horizontal__description">
                  Genoa Boat Show 2020 стало для индустрии своего рода отдушиной в череде отмен или непривычных многим
                  виртуальных выставок.
                </p>
                <h3 class="slide-photo-horizontal__tag"># выставки и регаты</h3>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-photo-horizontal slide-photo-horizontal-altea">
                <img src="./yaht.jpg" alt="yacht" class="slide-photo-horizontal__img" />
                <div class="slide-photo-horizontal__top">
                  <h3 class="slide-photo-horizontal__name">Суперяхта Heesen Altea с дизайном от Omega Architects</h3>
                  <div class="slide-photo-horizontal__line"></div>
                  <div class="slide-photo-horizontal__line-small"></div>
                </div>
                <p class="slide-photo-horizontal__description slide-photo-horizontal__description-altea">
                  Если сравнивать голландский дизайн с итальянским, то первый гораздо более артистичный,
                  экспериментальный и вдохновляющий, — поясняет итальянец Габриэль Киаве, креативный директор...
                </p>
                <h3 class="slide-photo-horizontal__tag"># выставки и регаты</h3>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1700" class="journal-wrapper-container__all-bottom-topics">
          <div class="journal-wrapper-container__all-bottom-girl">
            <div class="slide-photo">
              <img src="./girl.jpg" alt="girl" class="slide-photo__img" />
              <div class="slide-photo__content">
                <h3 class="slide-photo__tag"># лица индустрии</h3>
                <p class="slide-photo__description">
                  Марианна Хендрикс — о том, что сейчас происходит на верфи Moonen и в каком направлении она движется
                  после смены владельцев
                </p>
              </div>
            </div>
          </div>
          <div class="journal-wrapper-container__all-bottom-mambo">
            <div class="slide-photo-horizontal">
              <img src="./mambo.jpg" alt="mambo" class="slide-photo-horizontal__img" />
              <div class="slide-photo-horizontal__top">
                <h3 class="slide-photo-horizontal__name">MAMBO — первенец технологий 3D-печати</h3>
                <div class="slide-photo-horizontal__line"></div>
                <div class="slide-photo-horizontal__line-small"></div>
              </div>
              <p class="slide-photo-horizontal__description">
                Genoa Boat Show 2020 стало для индустрии своего рода отдушиной в череде отмен или непривычных многим
                виртуальных выставок.
              </p>
              <h3 class="slide-photo-horizontal__tag"># выставки и регаты</h3>
            </div>
          </div>
          <div class="journal-wrapper-container__all-bottom-altea">
            <div class="slide-photo-horizontal slide-photo-horizontal-altea">
              <img src="./yaht.jpg" alt="yacht" class="slide-photo-horizontal__img" />
              <div class="slide-photo-horizontal__top">
                <h3 class="slide-photo-horizontal__name">Суперяхта Heesen Altea с дизайном от Omega Architects</h3>
                <div class="slide-photo-horizontal__line"></div>
                <div class="slide-photo-horizontal__line-small"></div>
              </div>
              <p class="slide-photo-horizontal__description slide-photo-horizontal__description-altea">
                Если сравнивать голландский дизайн с итальянским, то первый гораздо более артистичный, экспериментальный
                и вдохновляющий, — поясняет итальянец Габриэль Киаве, креативный директор...
              </p>
              <h3 class="slide-photo-horizontal__tag"># выставки и регаты</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    `;
  }
  initMobileSliders() {
    const swiperTop = new Swiper('.swiper-mobile-top ', {
      modules: [Navigation, Pagination, Autoplay],
      direction: 'horizontal',
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 3000,
      },
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },

      navigation: {
        nextEl: '.swiper-button-next-mobile-top',
        prevEl: '.swiper-button-prev-mobile-top',
      },
    });
    const swiperMiddle = new Swiper('.swiper-mobile-middle ', {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      speed: 1500,
      spaceBetween: 10,

      navigation: {
        nextEl: '.swiper-button-next-mobile-middle',
        prevEl: '.swiper-button-prev-mobile-middle',
      },
    });
    const swiperBottom = new Swiper('.swiper-mobile-bottom ', {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      speed: 1500,
      spaceBetween: 20,
      slidesPerView: 1.5,
    });
  }
  initSliderTabs() {
    if (window.innerWidth < 800) {
      const swiper = new Swiper('.swiper-tabs', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        slidesPerView: 'auto',
      });
    }
  }
  initHorizontalSlider() {
    const swiper = new Swiper('.swiper-horizontal', {
      modules: [Navigation, Pagination, Autoplay],
      direction: 'horizontal',
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 3000,
      },
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },

      navigation: {
        nextEl: '.swiper-button-next-hor',
        prevEl: '.swiper-button-prev-hor',
      },
    });
  }
  initVerticalSlider() {
    const swiper = new Swiper('.swiper-small', {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      spaceBetween: 10,
      speed: 1500,
      navigation: {
        nextEl: '.swiper-button-next-small',
        prevEl: '.swiper-button-prev-small',
      },
    });
  }
  initPhotoSlider() {
    let swiper = new Swiper('.swiper-photo', {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2.5,
      spaceBetween: 46,
    });
    // const mq = window.matchMedia('(max-width: 750px)');
    // mq.addEventListener('change', (e) => {
    //   if (e.matches) {
    //     swiper.destroy();
    //     swiper = new Swiper('.swiper-photo', {
    //       modules: [Navigation],
    //       direction: 'horizontal',
    //       loop: true,
    //       slidesPerView: 2.5,
    //       spaceBetween: 10,
    //     });
    //   } else {
    //     swiper.destroy();
    //     swiper = new Swiper('.swiper-photo', {
    //       modules: [Navigation],
    //       direction: 'horizontal',
    //       loop: true,
    //       slidesPerView: 2.5,
    //       spaceBetween: 46,
    //     });
    //   }
    // });
  }
}
export default All;
