import React from 'react';
import logo from '../images/logo.svg';
import menuIcon from '../images/menu.svg';
import closeIcon from '../images/close.svg';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header__sticky ${isMenuOpen ? 'menu-open' : ''}`} data-fixed-menu="">
      <div className="page__wrapper">
        <div className="header" data-fixed-menu="">
          <a className="header__logo-wrap" href="/awards/">
            <img src={logo} alt="Workspace Digital Awards" className="header__logo" />
          </a>

          <div className={`header__dropdown ${isMenuOpen ? 'active' : ''}`} data-mob-menu-container="">
            <nav className="header__nav mr-auto">
              <ul className="header-nav">
                <li className="header-nav__item nowrap">
                  <a href="/awards/about/" className="link header-nav__item-link">О премии</a>
                </li>
                <li className="header-nav__item nowrap">
                  <a href="/awards/rules/" className="link header-nav__item-link">Участникам</a>
                </li>
                <li className="header-nav__item nowrap">
                  <a href="/awards/cases/" className="link header-nav__item-link">Кейсы</a>
                </li>
                <li className="header-nav__item nowrap">
                  <a href="/awards/nominees/" className="link header-nav__item-link">Номинанты</a>
                </li>
                <li className="header-nav__item nowrap">
                  <a href="/awards/jury/" className="link header-nav__item-link">Жюри</a>
                </li>
                <li className="header-nav__item nowrap">
                  <a href="/awards/news/" className="link header-nav__item-link">Новости</a>
                </li>
                <li className="header-nav__item nowrap">
                  <a href="/awards/contact/" className="link header-nav__item-link">Контакты</a>
                </li>
              </ul>
            </nav>
            <button className="button _yellow _outline header__participate-btn text-uppercase t-a-c" data-modal-popup-show-btn="auth">
              Принять участие
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Menu;