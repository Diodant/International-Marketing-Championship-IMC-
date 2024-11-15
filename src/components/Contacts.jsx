import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Wda_sprite from '../images/wda-sprite.svg';
import MailImg from '../images/mail (1).png'

const Contacts = () => {
  const [formData, setFormData] = useState({
    NAME: '',
    EMAIL: '',
    TEXT: '',
    LOGIN: '673379bc1d30f',
    TEL: '',
  });

  const [formSuccess, setFormSuccess] = useState(false);


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
 
      const id = location.hash.replace('#', '');

      const element = document.getElementById(id);
      if (element) {

        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {

      window.scrollTo(0, 0);
    }
  }, [location]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSuccess(true);
  };

    return (
        <>
    <section className="section page__wrapper">
        <h1 className="section__title _h1">Контакты</h1>
        <hr />

        <h2 className="section__title_cont">
      Международный конкурс International Marketing Championship инициирован Российской Ассоциацией Маркетинговых Услуг (РАМУ)</h2>

      <p className="page-about__text mb-20">Юридический адрес: </p>
      <div className='page-about__text'>
        <ul className='mg-top'>
          <li className='page-about__list-item'>+7 (495) 662-39-88</li>
            <li className='page-about__list-item'>г. Москва, ул. Полковая, д.3, стр.3, этаж 4</li>
            <li className='page-about__list-item mb-20'>
            <a href="http://www.ramu.ru/" className='disp_contents color-yellow font-pixel'>http://www.ramu.ru/</a>
            </li>
            <p className="page-about__text mb-20">Международный конкурс International Marketing Championship</p>
            <li className='page-about__list-item'>+7 (495) 662-39-88</li>
            <li className='page-about__list-item'>г. Москва, ул. Полковая, д.3, стр.3, этаж 4</li>

            <li className='page-about__list-item'>
           <a href="mailto:info@ramu.ru" className='disp_contents color-yellow font-pixel'>imchampionship@gmail.com</a>
            </li>
        </ul>
      </div>
      
    </section>

    <section
      className="section page__wrapper emerge"
      data-expose="true"
      data-effect="slide"
      data-duration="500"
      data-up="20rem"
      id='cont'
      style={{
        opacity: '1',
        transform: 'translate(0px, 0px)',
        transition:
          'opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1)',
      }}
    >
      <h2 className="section__title border-none">
      <svg className="section__title-icon svg-icon" aria-hidden="true">
        <use xlinkHref={`${Wda_sprite}#title-pixel-1`}></use>
      </svg>
        Напишите нам
      </h2>

      <div className="grid__row">
        <div className="grid__col-d-6 hide-mob">
          <img
            className="contacts__form-img"
            src= {MailImg}
            alt="Напишите нам"
          />
        </div>
        {!formSuccess ? (
          <form
            className="grid__col-d-6"
            data-contact-form=""
            onSubmit={handleSubmit}
          >
            <label className="field-text__label">
              <input
                type="text"
                name="NAME"
                className="field-text contacts__form-input"
                placeholder="Ваше имя"
                value={formData.NAME}
                onChange={handleChange}
                required
              />
              <span className="field-text__placeholder">Ваше имя</span>
            </label>
            <label className="field-text__label">
              <input
                type="email"
                name="EMAIL"
                className="field-text contacts__form-input"
                placeholder="Email"
                value={formData.EMAIL}
                onChange={handleChange}
                required
              />
              <span className="field-text__placeholder">Email</span>
            </label>
            <label className="field-text__label">
              <input
                type="text"
                name="TEXT"
                className="field-text contacts__form-input"
                placeholder="Сообщение"
                value={formData.TEXT}
                onChange={handleChange}
                required
              />
              <span className="field-text__placeholder">Сообщение</span>
            </label>

            <button
              type="submit"
              className="button _gray-bg contacts__form-btn px-48 py-24 text-uppercase fw-600"
            >
              Отправить
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
              <i className="button__pixel"></i>
            </button>
          </form>
        ) : (
          <div
            className="grid__col-d-6 contacts__form-success"
            data-contact-form-success=""
          >
            <div className="contacts__form-success-title">
              Спасибо за&nbsp;обращение!
            </div>
            Мы получили сообщение и уже работаем над ним.
          </div>
        )}
      </div>
    </section>

    </>
    );
  };
  
  export default Contacts;
  