import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../images/logo.svg';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`header__sticky ${isMenuOpen ? 'menu-open' : ''}`}
      data-fixed-menu=""
    >
      <div className="page__wrapper">
        <div className="header" data-fixed-menu="">
          <Link className="header__logo-wrap" to="/awards/">
            {/* Replace <a> with <Link> and href with to */}
            <img
              src={logo}
              alt="Workspace Digital Awards"
              className="header__logo"
            />
          </Link>

          <div
            className={`header__dropdown ${isMenuOpen ? 'active' : ''}`}
            data-mob-menu-container=""
          >
            <nav className="header__nav mr-auto">
              <ul className="header-nav">
                <li className="header-nav__item nowrap">
                  <Link to="/" className="link header-nav__item-link">
                    О премии
                  </Link>
                </li>
                <li className="header-nav__item nowrap">
                  <Link to="/regulations" className="link header-nav__item-link">
                    Положение
                  </Link>
                </li>
                <li className="header-nav__item nowrap">
                  <Link to="/winners" className="link header-nav__item-link">
                  Победители 
                  </Link>
                </li>
                <li className="header-nav__item nowrap">
                  <Link to="/jury" className="link header-nav__item-link">
                    Жюри
                  </Link>
                </li>
                <li className="header-nav__item nowrap">
                  <Link to="/gallery" className="link header-nav__item-link">
                  Фотогалерея
                  </Link>
                </li>
                <li className="header-nav__item nowrap">
                  <Link to="/articles" className="link header-nav__item-link">
                    Новости
                  </Link>
                </li>
                <li className="header-nav__item nowrap">
                  <Link to="/contacts" className="link header-nav__item-link">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
            <a
              href="/contacts#cont"
              className="button _yellow _outline header__participate-btn text-uppercase t-a-c">
              Принять участие
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Menu;
