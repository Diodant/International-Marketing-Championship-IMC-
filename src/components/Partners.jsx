import React from 'react';
import Wda_sprite from '../images/wda-sprite.svg';
import partner_1 from '../images/partners/partner_1.png';
import partner_2 from '../images/partners/partner_2.png';
import partner_3 from '../images/partners/partner_3.png';
import partner_4 from '../images/partners/partner_4.png';
import partner_5 from '../images/partners/partner_5.png';
import partner_6 from '../images/partners/partner_6.svg';
import partner_7 from '../images/partners/partner_7.svg';
import partner_8 from '../images/partners/partner_8.png';
import partner_9 from '../images/partners/partner_9.png';
import partner_10 from '../images/partners/partner_10.svg';
import partner_11 from '../images/partners/partner_11.png';
import partner_12 from '../images/partners/partner_12.png';
import partner_13 from '../images/partners/partner_13.svg';
import partner_14 from '../images/partners/partner_14.svg';
import partner_15 from '../images/partners/partner_15.png';

const InfoPartners = () => {

  return (
    <section
      className="section page__wrapper emerge"
      data-expose="true"
      data-effect="slide"
      data-duration="500"
      data-up="20rem"
      data-initialized="1"
      data-style-1="transform: translate(0,20rem);transform-origin: undefined;"
      data-style-2="transform: translate(0,0); transition: opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1);"
      style={{
        opacity: '1',
        transform: 'translate(0px, 0px)',
        transition:
          'opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1)',
      }}
    >
      <h2 className="section__title">
        <svg
          className="svg-icon section__title-icon mt-m-4"
          aria-hidden="true"
        >
          <use xlinkHref={`${Wda_sprite}#title-pixel-6`}></use>
        </svg>
        <span>Спонсоры</span>
      </h2>

      <hr />
      <ul className="logos">
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_1}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_2}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_3}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_4}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_5}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_6}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_7}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_8}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_9}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_10}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_11}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_12}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_13}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_14}
              alt="E-Pepper"
            />
          </button>
        </li>
        <li className="logos__item">
          <button>
            <img
              className="logos__img"
              src={partner_15}
              alt="E-Pepper"
            />
          </button>
        </li>
      </ul>
    </section>
  );
};

export default InfoPartners;
