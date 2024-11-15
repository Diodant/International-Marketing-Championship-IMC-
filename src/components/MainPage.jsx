// src/components/MainPage.js
import React, { useEffect, useState } from 'react';
import Statuette from '../images/statuette-d.png';
import Wda_sprite from '../images/wda-sprite.svg';
import headerSprite from '../images/favorite_16566172.png';
import StarImg from '../images/starnew4.png';
import jury_1_2024 from '../images/2315.png'
import jury_2_2024 from '../images/12.png'
import jury_3_2024 from '../images/Frame-62.png'
import jury_4_2024 from '../images/Screenshot-2022_08_19-at-13.00.35.png'
import Partners from './Partners'

const juryMembers = [
  {
    name: 'Оксана Кириллова',
    imgSrc: jury_1_2024 ,
    alt: 'Оксана Кириллова',
    company: 'Россия',
    position: 'Международный эксперт по стратегическому маркетингу. Специализируется на выводе товаров и услуг на международные рынки. ',
    year: '2024'
  },
  {
    name: 'Максим Данилов',
    imgSrc: jury_2_2024 ,
    alt: 'Максим Данилов',
    company: 'Украина',
    position: 'Эксперт по контент-стратегиям и управлению digital-проектами. Работает с крупнейшими медиакомпаниями Восточной Европы.',
    year: '2024'
  },
  {
    name: 'Айгерим Ергалиева',
    imgSrc: jury_3_2024 ,
    alt: 'Айгерим Ергалиева',
    company: 'Казахстан',
    position: 'Специалист по PR и управлению корпоративной репутацией, с опытом работы в международных корпорациях.',
    year: '2024'
  },
  {
    name: 'Александр Миронов',
    imgSrc: jury_4_2024 ,
    alt: 'Александр Миронов',
    company: 'Беларусь',
    position: 'Руководитель департамента креативных решений в крупном рекламном агентстве, известен своими нестандартными подходами к рекламе.',
    year: '2024'
  },
];

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
        [cardKey]: (prevLikes[cardKey] || 0) + 1 
      }));
      setLikedCards((prevLikedCards) => ({
        ...prevLikedCards,
        [cardKey]: true
      }));
    }
  };

  useEffect(() => {

    document.body.classList.add('page-loaded');

    return () => {

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
              Championship
              {/* <span className="section-home__title-year font-pixel color-yellow">/24</span> */}
              </span>
            </h1>
            <p className="section-home__subtitle">
              <span className="section-home__subtitle-wrap">
                Независимая премия, присуждаемая за кейсы в сфере разработки и digital-маркетинга
                <br />
                <a className="section-home__subtitle-btn btn-arrow fw-400 mt-32 color-white" data-modal-popup-show-btn="auth" href="/contacts#cont">
                  <span className="btn-arrow__icon">
                    <svg className="svg-icon">
                      <use href={`${Wda_sprite}#btn-arrow`} />
                    </svg>
                  </span>
                  Подать заявку
                </a>
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
      <h1 className="section__title _h1 mb-auto mt-auto">О премии</h1>
      <hr />
      <p className="section__subtitle mb-20">International Marketing Championship – это международный конкурс, который ежегодно объединяет самых талантливых и креативных маркетологов со всего мира. С 2019 года конкурс проводится в период с 15 по 30 сентября и стал одной из главных площадок для демонстрации передовых достижений в области маркетинга. Участие в International Marketing Championship – это уникальная возможность не только продемонстрировать свои навыки и идеи, но и заявить о себе на глобальном уровне.</p>
      <p className="section__subtitle mb-20">Конкурс отличается строгим отбором участников, которым необходимо подать заявку в период с 20 августа по 5 сентября. В течение двух недель жюри, состоящее из ведущих экспертов индустрии, оценивает проекты по множеству критериев, включая инновационность, креативность и практическую ценность. Победители объявляются 1 октября и получают признание на международной арене, а также ценные призы и возможности для дальнейшего профессионального роста.</p>
      </section>

      <section className="section-alt page__wrapper emerge" data-expose="true" data-effect="slide" data-duration="500" data-up="20rem" data-initialized="1" data-style-1="transform: translate(0,20rem);transform-origin: undefined;" data-style-2="transform: translate(0,0); transition: opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1);" style={{ opacity: 1, transform: 'translate(0,0)', transition: 'opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1)' }}>
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
      </section>

      <section className="section-alt page__wrapper emerge" data-expose="true" data-effect="slide" data-duration="500" data-up="20rem" data-initialized="1" data-style-1="transform: translate(0,20rem);transform-origin: undefined;" data-style-2="transform: translate(0,0); transition: opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1);" style={{ opacity: 1, transform: 'translate(0,0)', transition: 'opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1)' }}>

      <h2 className="section__title mb-0">
		<svg className="section__title-icon svg-icon" aria-hidden="true">
    <use xlinkHref={`${Wda_sprite}#title-pixel-3`}></use>
		</svg>
		Жюри
	</h2>

      <div className="overflow-hidden">
        <div
          className="jury _jury-page"
          data-expose="true"
          data-effect="slide"
          data-duration="500"
          data-up="30rem"
        >
          {juryMembers.map((member, index) => (
            
            <div className="jury__item" key={index}>
                
              <a
                href={member.href}
                target="_blank"
                rel="noopener noreferrer"
                className="d-block link _white"
              >
                <div className="jury__item-img-wrap">
                  <img
                    src={member.imgSrc}
                    alt={member.alt}
                    className="jury__item-img"
                  />
                </div>
                <h3 className="jury__item-title">{member.name}</h3>
              </a>
              <p className="jury__item-company">{member.company}</p>
              <p className="jury__item-position">{member.position}</p>
              <p className="cases__item-custom">{member.year}</p>
            </div>
          ))}
        </div>
      </div>
      <a href="/jury" className="button _gray-bg text-uppercase px-48 py-24 fw-600 mt-20">
      Весь состав
          <i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i><i className="button__pixel"></i>
        </a>
      </section>

      <section className="section-alt page__wrapper emerge" data-expose="true" data-effect="slide" data-duration="500" data-up="20rem" data-initialized="1" data-style-1="transform: translate(0,20rem);transform-origin: undefined;" data-style-2="transform: translate(0,0); transition: opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1);" style={{ opacity: 1, transform: 'translate(0,0)', transition: 'opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1)' }}>
      <h2 className="section__title">
		<svg className="section__title-icon svg-icon" aria-hidden="true">
    <use xlinkHref={`${Wda_sprite}#title-pixel-1`}></use>
		</svg>
		Ориентация на будущее
	</h2>
      <hr />
      <p className="section__subtitle mb-20">International Marketing Championship это настоящая битва за звание лучшего маркетолога мира. Здесь нет места посредственным идеям – только самые выдающиеся проекты, демонстрирующие нестандартное мышление и способность адаптироваться к быстро меняющемуся миру, могут рассчитывать на победу.</p>
      <p className="section__subtitle mb-20">Одной из ключевых особенностей конкурса является его ориентация на будущее. Мы верим, что маркетинг должен не только отвечать современным требованиям, но и предвосхищать их. Поэтому в конкурсе принимают участие проекты, которые не боятся идти на риск, пробовать новое и прокладывать путь к успеху через инновации.</p>
      </section>

      <section className="section-alt page__wrapper emerge" data-expose="true" data-effect="slide" data-duration="500" data-up="20rem" data-initialized="1" data-style-1="transform: translate(0,20rem);transform-origin: undefined;" data-style-2="transform: translate(0,0); transition: opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1);" style={{ opacity: 1, transform: 'translate(0,0)', transition: 'opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1)' }}>
      <h2 className="section__title">
		<svg className="section__title-icon svg-icon" aria-hidden="true">
    <use xlinkHref={`${Wda_sprite}#title-pixel-2`}></use>
		</svg>
		Цели
	</h2>
      <hr />
      <p className="section__subtitle mb-20">International Marketing Championship ставит своей целью обеспечить высочайший уровень оценки участников, и поэтому членство в жюри конкурса является символом исключительного профессионализма и признания. Быть судьей на этом конкурсе – это честь, доступная только самым выдающимся специалистам в области маркетинга.</p>
      <p className="section__subtitle mb-20">Каждый год в жюри приглашаются эксперты, чьи достижения и опыт позволяют им объективно и компетентно оценивать представленные проекты. Участие в жюри – это возможность внести вклад в развитие маркетинговой отрасли, поделиться своим опытом и помочь выявить новые таланты.</p>
      <p className="section__subtitle mb-20">Критерии отбора судей строги: только маркетологи, обладающие признанными достижениями и международным признанием, могут претендовать на эту роль. Жюри состоит из профессионалов, которые постоянно развиваются и остаются на переднем крае индустрии, следя за последними тенденциями и нововведениями.</p>
      <p className="section__subtitle mb-20">Престиж быть судьей в International Marketing Championship также подтверждается тем, что члены жюри являются лицом конкурса. Их решения, основанные на глубоких знаниях и понимании рынка, определяют, какие проекты достойны мирового признания. Они обязаны соблюдать высокие стандарты объективности и независимости, что гарантирует справедливость и прозрачность процесса оценки.</p>
      <p className="section__subtitle mb-20">Кроме того, жюри имеет возможность влиять на будущее маркетинга, поддерживая самые перспективные и инновационные проекты. Участие в жюри открывает доступ к новым контактам, позволяет обмениваться опытом с коллегами и укрепляет профессиональную репутацию.</p>
      </section>

<Partners/>

      <section className="section-alt page__wrapper emerge" data-expose="true" data-effect="slide" data-duration="500" data-up="20rem" data-initialized="1" data-style-1="transform: translate(0,20rem);transform-origin: undefined;" data-style-2="transform: translate(0,0); transition: opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1);" style={{ opacity: 1, transform: 'translate(0,0)', transition: 'opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1)' }}>
      <h2 className="section__title">
		<svg className="section__title-icon svg-icon" aria-hidden="true">
    <use xlinkHref={`${Wda_sprite}#title-pixel-5`}></use>
		</svg>
		Символ профессионализма
	</h2>
      <hr />
      <p className="section__subtitle mb-20">С момента своего создания International Marketing Championship стал символом профессионализма и амбиций. Каждый год конкурс привлекает внимание тысяч маркетологов, желающих показать свои способности и получить признание среди коллег. Это уникальная платформа, которая объединяет лучших из лучших и дает им возможность соревноваться за звание мирового лидера в маркетинге.</p>
      <p className="section__subtitle mb-20">Престиж участия в конкурсе подтверждается не только признанием со стороны профессионального сообщества, но и возможностями, которые открываются перед победителями. Победа в International Marketing Championship– это шаг к новым вершинам, признанию и уважению в мире маркетинга.      </p>
      <p className="section__subtitle mb-20">Ежегодное подведение итогов и награждение победителей 1 октября становится настоящим праздником креативности и профессионализма. В этот день мы чествуем тех, кто смог добиться выдающихся результатов и предложить миру новые идеи и решения, способные изменить рынок и индустрию в целом.</p>
      <p className="section__subtitle mb-20">Для участников International Marketing Championship это не просто конкурс, это возможность стать частью глобального движения, направленного на продвижение маркетинговой индустрии вперед. Мы ждем вас на конкурсе и готовы приветствовать самые яркие и амбициозные проекты, которые станут будущим мирового маркетинга.</p>
      </section>

      <section className="section-alt page__wrapper pos-relative emerge" data-expose="true" data-effect="slide" data-duration="500" data-up="20rem" data-initialized="1" data-style-1="transform: translate(0,20rem);transform-origin: undefined;" data-style-2="transform: translate(0,0); transition: opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1);" style={{ opacity: 1, transform: 'translate(0,0)', transition: 'opacity 500ms ease-out, transform 500ms cubic-bezier(0, 0.9, 0.1, 1)' }}>
	<h2 className="section__title">
		<svg className="section__title-icon svg-icon" aria-hidden="true">
    <use xlinkHref={`${Wda_sprite}#title-pixel-3`}></use>
		</svg>
		Принять участие
	</h2>
	<hr className="mt-0 mb-auto"/>
	<div className="page-about__participate-wrap">
		<img className="page-about__participate-star" src={StarImg} alt="star"/>
		<div className="page-about__text page-about__participate-text">
			Гордитесь своей проектной командой и имеете классные работы в портфолио?
			Подайте свою заявку на конкурс, чтобы побороться за престижную регалию! <br/>
			<div>
									<a className="button _gray-bg page-about__participate-btn text-uppercase" data-modal-popup-show-btn="auth" href="/contacts#cont">
						Принять участие
						<i className="button__pixel "></i><i className="button__pixel "></i><i className="button__pixel "></i><i className="button__pixel "></i><i className="button__pixel "></i><i className="button__pixel "></i><i className="button__pixel "></i><i className="button__pixel "></i><i className="button__pixel "></i><i className="button__pixel "></i><i className="button__pixel "></i>
					</a>
							</div>
		</div>
	</div>
</section>

    </main>
  );
}

export default MainPage;