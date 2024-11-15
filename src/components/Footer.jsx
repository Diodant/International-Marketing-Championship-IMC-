import React from 'react';
import Wda_sprite from '../images/wda-sprite.svg';
import logo from '../images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="page__wrapper">
        <div className="grid__row">
          <div className="grid__col-d-6 footer__col">
            <a href="/awards/">

    <img src={logo} className="svg-icon footer__logo-star"alt="" />
    
              <h2 className="footer__title">International Marketing Championship</h2>
            </a>
            <p className="footer__subtitle">
            Международный конкурс, который ежегодно объединяет самых талантливых и креативных маркетологов со всего мира.
            </p>

          </div>
          <nav className="grid__col-d-2 footer__col">
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <a className="link _white" href="/awards/about/">
                  О премии
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="link _white" href="/awards/rules/">
                  Участникам
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="link _white" href="/awards/winners/">
                  Победители
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="link _white" href="/awards/cases/">
                  Кейсы
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="link _white" href="/awards/nominees/">
                  Номинанты
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="link _white" href="/awards/jury/">
                  Жюри
                </a>
              </li>

              <li className="footer__menu-item">
                <a className="link _white" href="/awards/news/">
                  Новости
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="link _white" href="/awards/photos/">
                  Фотогалерея
                </a>
              </li>
              <li className="footer__menu-item">
                <a className="link _white" href="/awards/contact/">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className="grid__col-d-4 footer__col">
            <h2 className="footer__contact-title">Обратная связь</h2>
            <a
              className="btn-arrow mr-auto fw-400"
              href="/contacts#cont"
              data-modal-popup-show-btn="auth"
              
            >
              <span className="btn-arrow__icon">
              <svg className="svg-icon" >
                      <use href={`${Wda_sprite}#btn-arrow`} />
                    </svg>
              </span>
              Подать заявку
            </a>
            <ul className="footer__sn">
              <li>
                <a
                  href="https://vk.com/"
                  className="contacts-sn-link button _gray-bg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="svg-icon " aria-hidden="true">
                  <use xlinkHref={`${Wda_sprite}#vkontakte`}></use>
                </svg>
                </a>
              </li>
              <li className="ml-24">
                <a
                  href="https://dzen.ru/"
                  className="contacts-sn-link button _gray-bg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="svg-icon fz-small" aria-label="Yandex Zen">
                    <use xlinkHref={`${Wda_sprite}#zen`}></use>
                  </svg>
                </a>
              </li>
              <li className="ml-24">
                <a
                  href="https://t.me/"
                  className="contacts-sn-link button _gray-bg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="svg-icon" aria-label="Telegram">
                  <use xlinkHref={`${Wda_sprite}#tg`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="hide-mob" />
        <div className="footer__small-text footer__copyright grid__row">
          <p className="grid__col-d-6 mt-auto mb-auto">
          © 2019, International Marketing Championship
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
