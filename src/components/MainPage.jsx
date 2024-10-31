// src/components/MainPage.js
import React, { useEffect, useState } from 'react';
import Statuette from '../images/statuette-d.png';
import Wda_sprite from '../images/wda-sprite.svg';
import headerSprite from '../images/favorite_16566172.png';

function MainPage() {
  const initialLikes = {
    projectOfYear: 234,
    innovations: 198,
    digitalMarketingLeader: 156,
    prCampaign: 112,
    dataUsage: 123
  };

  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('likes');
    return savedLikes ? JSON.parse(savedLikes) : initialLikes;
  });

  const [likedCards, setLikedCards] = useState(() => {
    const savedLikedCards = localStorage.getItem('likedCards');
    return savedLikedCards ? JSON.parse(savedLikedCards) : {};
  });

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('likedCards', JSON.stringify(likedCards));
  }, [likedCards]);

  const handleLikeClick = (cardKey) => {
    if (!likedCards[cardKey]) {
      setLikes((prevLikes) => ({
        ...prevLikes,
        [cardKey]: (prevLikes[cardKey] || 0) + 1 // Ensure valid increment
      }));
      setLikedCards((prevLikedCards) => ({
        ...prevLikedCards,
        [cardKey]: true
      }));
    }
  };

  useEffect(() => {
    // Добавляем класс 'page-loaded' к body после загрузки компонента
    document.body.classList.add('page-loaded');

    return () => {
      // Убираем класс 'page-loaded' при размонтировании компонента
      document.body.classList.remove('page-loaded');
    };
  }, []);

  return (
    <main className="main-content">
      <section className="section-home">
        <div className="page__wrapper">
          <div className="section-home__wrap">
            <h1 className="section-home__title">
              <span className="section-home__title-part1">International</span>
              <span className="section-home__title-part2">Marketing </span>
              <span className="section-home__title-part3">
              Championship<span className="section-home__title-year font-pixel color-yellow">/24</span>
              </span>
            </h1>
            <p className="section-home__subtitle">
              <span className="section-home__subtitle-wrap">
                Независимая премия, присуждаемая за кейсы в сфере разработки и digital-маркетинга
                <br />
                <button className="section-home__subtitle-btn btn-arrow fw-400 mt-32 color-white" data-modal-popup-show-btn="auth">
                  <span className="btn-arrow__icon">
                    <svg className="svg-icon">
                      <use href={`${Wda_sprite}#btn-arrow`} />
                    </svg>
                  </span>
                  Подать заявку
                </button>
              </span>
            </p>
            <img
              src={Statuette}
              alt="Workspace Digital Awards 2022"
              className="section-home__statuette"
              data-statuette-img=""
            />
            <span className="section-home__statuette-bg"></span>
          </div>
        </div>
      </section>

      <section className="section page__wrapper emerge" data-expose="true" data-effect="slide" data-duration="500" data-up="20rem" data-initialized="1" data-style-1="transform: translate(0,20rem);transform-origin: undefined;" data-style-2="transform: translate(0,0); transition: opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1);" style={{ opacity: 1, transform: 'translate(0,0)', transition: 'opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1)' }}>
        <h2 className="section__title border-none">
          <svg className="section__title-icon svg-icon" aria-hidden="true">
            <use xlinkHref={`${Wda_sprite}#title-pixel-1`}></use>
          </svg>
          Номинации и критерии оценки
        </h2>
        <ul className='cases'>
          <li className="cases__item">
            <div className="cases__item-title">Лучший маркетинговый проект года</div>
            <li>
              <div className='page-about__text'>
                Данная номинация присуждается за проекты, которые значительно повлияли на развитие бренда или компании, показали высокую эффективность и креативность. Оценка проводится по следующим критериям:
                <ul className='mg-top'>
                  <li className='page-about__list-item'>Креативность Насколько проект предлагает оригинальные решения для достижения маркетинговых целей? Жюри оценивает использование нестандартных подходов, идей и концепций, которые отличают проект от конкурентов.</li>
                  <li className='page-about__list-item'>Стратегия: Насколько хорошо проект основан на стратегическом планировании? Важна последовательность действий, анализ целевой аудитории, точность послания и способность адаптироваться к изменениям рынка.</li>
                  <li className='page-about__list-item'>Инновации: Проект должен включать новые технологии, методы или подходы, которые изменяют традиционные маркетинговые практики. Важна степень внедрения этих инноваций и их влияние на результат.</li>
                  <li className='page-about__list-item'>Результативность (ROI): Проект оценивается с точки зрения его эффективности и окупаемости вложений. Жюри учитывает рост продаж, охват аудитории, узнаваемость бренда и общий вклад в развитие бизнеса.</li>
                </ul>
              </div>
            </li>
            <div className="cases__item-row">
              <div className="cases__item-col">
                <div className="user-like">
                <div className="user-like__box" onClick={() => handleLikeClick('projectOfYear')} style={{ cursor: likedCards.projectOfYear ? 'not-allowed' : 'pointer' }}>
                    <img src={headerSprite} className="c-svg-icon _sm _top user-like__ico" alt="like icon" />
                    <span className="user-like__counter">
                      <span>{likes.projectOfYear}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="cases__item-categories">
              <li>
                <p className="cases__item-category-name">Лучший проект</p>
              </li>
            </ul>
          </li>

          <li className="cases__item">
            <div className="cases__item-title">Инновации в маркетинге</div>
            <li>
              <div className='page-about__text'>
              Эта номинация вручается за проекты, которые внедрили новейшие технологии или методы в маркетинговую стратегию. Основные критерии:
                <ul className='mg-top'>
                  <li className='page-about__list-item'>Технологические инновации: Насколько инновационными были использованные технологии? Это могут быть искусственный интеллект, машинное обучение, блокчейн, виртуальная или дополненная реальность, а также другие передовые технологии.</li>
                  <li className='page-about__list-item'>Влияние на рынок: Оценивается, как внедренные инновации повлияли на рынок и поведение потребителей. Насколько изменились взаимодействия с клиентами благодаря новым технологиям?</li>
                  <li className='page-about__list-item'>Применение в реальном времени: Важным критерием является возможность использования инноваций в рамках текущей рыночной ситуации. Насколько реалистично и применимо решение в долгосрочной перспективе?</li>
                  <li className='page-about__list-item'>Признание и адаптация: Проект оценивается по тому, как его нововведения были приняты клиентами, индустрией или сообществом. Жюри учитывает результаты, такие как положительные отзывы, рост продаж или внедрение других компаниями аналогичных технологий.</li>
                </ul>
              </div>
            </li>
            <div className="cases__item-row">
              <div className="cases__item-col">
                <div className="user-like">
                <div className="user-like__box" onClick={() => handleLikeClick('innovations')} style={{ cursor: likedCards.innovations ? 'not-allowed' : 'pointer' }}>
                    <img src={headerSprite} className="c-svg-icon _sm _top user-like__ico" alt="like icon" />
                    <span className="user-like__counter">
                      <span>{likes.innovations}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="cases__item-categories">
              <li>
                <p className="cases__item-category-name">Инновации</p>
              </li>
            </ul>
          </li>

          <li className="cases__item">
            <div className="cases__item-title">Лидер цифрового маркетинга</div>
            <li>
              <div className='page-about__text'>
              Номинация присуждается командам или специалистам, которые продемонстрировали исключительные результаты работы с цифровыми каналами. Ключевые критерии:
                <ul className='mg-top'>
                  <li className='page-about__list-item'>SEO и контекстная реклама: Оценивается качество работы с поисковыми системами и использование контекстной рекламы. Жюри рассматривает успешность повышения органического трафика, CTR и конверсию.</li>
                  <li className='page-about__list-item'>SMM (социальные сети): Насколько эффективно были использованы социальные платформы для продвижения? Важны охват, вовлеченность, прирост подписчиков, а также взаимодействие с аудиторией.</li>
                  <li className='page-about__list-item'>Email-маркетинг: Оценка качества рассылок, их релевантности, персонализации и конверсий. Важен уровень автоматизации и сегментации аудитории для повышения результативности.</li>
                  <li className='page-about__list-item'>Цифровая аналитика: Жюри оценивает использование аналитических инструментов для мониторинга и корректировки цифровых кампаний. Важны метрики, показывающие результаты кампании, такие как ROI, показатель отказов, длительность сеанса и поведенческий анализ пользователей.</li>
                </ul>
              </div>
            </li>
            <div className="cases__item-row">
              <div className="cases__item-col">
                <div className="user-like">
                <div className="user-like__box" onClick={() => handleLikeClick('digitalMarketingLeader')} style={{ cursor: likedCards.digitalMarketingLeader ? 'not-allowed' : 'pointer' }}>
                    <img src={headerSprite} className="c-svg-icon _sm _top user-like__ico" alt="like icon" />
                    <span className="user-like__counter">
                      <span>{likes.digitalMarketingLeader}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="cases__item-categories">
              <li>
                <p className="cases__item-category-name">Цифровой маркетинг</p>
              </li>
            </ul>
          </li>

          <li className="cases__item">
            <div className="cases__item-title">Лучшая PR-кампания</div>
            <li>
              <div className='page-about__text'>
              Номинация вручается за выдающиеся PR-стратегии, направленные на создание позитивного имиджа бренда и эффективное взаимодействие с аудиторией. Основные критерии:
                <ul className='mg-top'>
                  <li className='page-about__list-item'>Имидж и репутация бренда: Оценивается, насколько эффективно PR-кампания работала над улучшением или поддержанием репутации компании, формированием позитивного образа бренда.</li>
                  <li className='page-about__list-item'>Креативность в управлении отношениями: Насколько нестандартные подходы использовались для взаимодействия с общественностью и медиа? Оценка творческих решений для привлечения внимания аудитории.</li>
                  <li className='page-about__list-item'>Адаптация к кризисам: Если кампания включала управление кризисными ситуациями, то оценивается её способность минимизировать негативное воздействие и сохранить позитивный имидж компании.</li>
                  <li className='page-about__list-item'>Охват и влияние: Насколько кампания смогла охватить целевую аудиторию и повлиять на её мнение? Жюри учитывает медийное покрытие, участие инфлюенсеров, обратную связь и изменения восприятия бренда.</li>
                </ul>
              </div>
            </li>
            <div className="cases__item-row">
              <div className="cases__item-col">
                <div className="user-like">
                <div className="user-like__box" onClick={() => handleLikeClick('prCampaign')} style={{ cursor: likedCards.prCampaign ? 'not-allowed' : 'pointer' }}>
                    <img src={headerSprite} className="c-svg-icon _sm _top user-like__ico" alt="like icon" />
                    <span className="user-like__counter">
                      <span>{likes.prCampaign}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="cases__item-categories">
              <li>
                <p className="cases__item-category-name">PR-кампания</p>
              </li>
            </ul>
          </li>

          <li className="cases__item">
            <div className="cases__item-title">Лучшее использование данных в маркетинге</div>
            <li>
              <div className='page-about__text'>
              Номинация для проектов, использующих аналитические данные для оптимизации маркетинговых решений и стратегий. Оценка проводится по следующим критериям:
                <ul className='mg-top'>
                  <li className='page-about__list-item'>Data-driven подход: Жюри оценивает, насколько качественно проект использовал данные для принятия решений. Это включает сегментацию аудитории, прогнозирование продаж, аналитику поведения клиентов и персонализацию контента.</li>
                  <li className='page-about__list-item'>Качество данных и аналитики: Проект оценивается по качеству собранных данных, их чистоте и точности. Используемые аналитические инструменты и методы анализа также важны для определения эффективности стратегии.</li>
                  <li className='page-about__list-item'>Оптимизация решений: Насколько данные помогли улучшить процесс принятия решений? Оценка корректировок, внесённых в стратегию на основе анализа данных, и их влияние на конечный результат.</li>
                  <li className='page-about__list-item'>Результаты и ROI: Оценка результативности применения аналитики и данных с точки зрения увеличения продаж, охвата аудитории, уменьшения затрат и роста удовлетворенности клиентов.</li>
                </ul>
              </div>
            </li>
            <div className="cases__item-row">
              <div className="cases__item-col">
                <div className="user-like">
                <div className="user-like__box" onClick={() => handleLikeClick('dataUsage')} style={{ cursor: likedCards.dataUsage ? 'not-allowed' : 'pointer' }}>
                    <img src={headerSprite} className="c-svg-icon _sm _top user-like__ico" alt="like icon" />
                    <span className="user-like__counter">
                      <span>{likes.dataUsage}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="cases__item-categories">
              <li>
                <p className="cases__item-category-name">Использование данных</p>
              </li>
            </ul>
          </li>
          
        </ul>
        <a href="/awards/cases/" className="button _gray-bg text-uppercase px-48 py-24 fw-600">
          Все кейсы
          <i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i>
        </a>
      </section>
    </main>
  );
}

export default MainPage;