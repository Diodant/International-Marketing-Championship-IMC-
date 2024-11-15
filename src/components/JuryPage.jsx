import React from 'react';
import Wda_sprite from '../images/wda-sprite.svg';
import jury_1_2024 from '../images/2315.png'
import jury_2_2024 from '../images/12.png'
import jury_3_2024 from '../images/Frame-62.png'
import jury_4_2024 from '../images/Screenshot-2022_08_19-at-13.00.35.png'
import jury_1_2023 from '../images/321.jpg'
import jury_2_2023 from '../images/41241.jpg'
import jury_3_2023 from '../images/Vova_B..png'
import jury_4_2023 from '../images/534.jpg'
import jury_1_2022 from '../images/terekhov_300.png'
import jury_2_2022 from '../images/Lyapueva.png'
import jury_3_2022 from '../images/Foto-Anton.jpg'
import jury_4_2022 from '../images/Nina-Kalaus.jpg'
import jury_1_2021 from '../images/zaporozsky_1.png'
import jury_2_2021 from '../images/image_6487327_6.jpg'
import jury_3_2021 from '../images/pp.jpg'
import jury_4_2021 from '../images/42421.jpg'
import jury_1_2020 from '../images/fdgd.jpg'
import jury_2_2020 from '../images/userpic.jpg'
import jury_3_2020 from '../images/45srs.jpeg'
import jury_4_2020 from '../images/tanvel-vlad.jpeg'
import jury_1_2019 from '../images/Snimok-ekrana-2024_02_12-v-17.26.50.png'
import jury_2_2019 from '../images/Julia-Doronina-photo.jpg'
import jury_3_2019 from '../images/167682278_3779926935388440_4417160801028522546_n.jpg'
import jury_4_2019 from '../images/IMG_0043.png'

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
  {
    name: 'Партизпанян Айк',
    imgSrc: jury_1_2023 ,
    alt: 'Партизпанян Айк',
    company: 'Армения',
    position: 'Директор по маркетингу Publicis Armenia',
    year: '2023'
  },
  {
    name: 'Алексеева Анна',
    imgSrc: jury_2_2023 ,
    alt: 'Алексеева Анна',
    company: 'Украина',
    position: 'Директор по маркетингу.',
    year: '2023'
  },
  {
    name: 'Даурен Жанибеков',
    imgSrc: jury_3_2023 ,
    alt: 'Даурен Жанибеков',
    company: 'Казахстан',
    position: 'Руководитель департамента цифрового маркетинга в крупной IT-компании. Известен успешными проектами по продвижению стартапов на глобальном рынке.',
    year: '2023'
  },
  {
    name: 'Игорь Луковский',
    imgSrc: jury_4_2023 ,
    alt: 'Игорь Луковский',
    company: 'Беларусь',
    position: 'Директор по маркетингу.',
    year: '2023'
  },
  {
    name: 'Андрей Кузнецов',
    imgSrc: jury_1_2022 ,
    alt: 'Андрей Кузнецов',
    company: 'Россия',
    position: 'Руководитель отдела маркетинга в международной автомобильной компании. Специализируется на разработке и внедрении маркетинговых стратегий для глобальных рынков.',
    year: '2022'
  },
  {
    name: 'Ольга Ткаченко',
    imgSrc: jury_2_2022 ,
    alt: 'Ольга Ткаченко',
    company: 'Украина',
    position: 'Эксперт по PR и управлению корпоративной репутацией. Работала с крупными корпорациями в СНГ и Западной Европе.',
    year: '2022'
  },
  {
    name: 'Баглан Оспанов',
    imgSrc: jury_3_2022 ,
    alt: 'Баглан Оспанов',
    company: 'Казахстан',
    position: 'Специалист по digital-технологиям и управлению онлайн-продажами. Работал с ведущими e-commerce компаниями в Центральной Азии.',
    year: '2022'
  },
  {
    name: 'Ирина Волкова',
    imgSrc: jury_4_2022 ,
    alt: 'Ирина Волкова',
    company: 'Беларусь',
    position: 'Руководитель отдела интегрированных маркетинговых коммуникаций. Известна своими успешными проектами по запуску новых брендов.',
    year: '2022'
  },
  {
    name: 'Дмитрий Соколов',
    imgSrc: jury_1_2021 ,
    alt: 'Дмитрий Соколов',
    company: 'Россия',
    position: 'Руководитель департамента цифрового маркетинга в международной IT-компании. Специализируется на разработке комплексных digital-стратегий.',
    year: '2021'
  },
  {
    name: 'Виктория Лебедева',
    imgSrc: jury_2_2021 ,
    alt: 'Виктория Лебедева',
    company: 'Украина',
    position: 'Эксперт по маркетинговым коммуникациям, с опытом работы в крупных FMCG-компаниях. Известна своими успешными брендинговыми кампаниями.',
    year: '2021'
  },
  {
    name: 'Арман Султанов',
    imgSrc: jury_3_2021 ,
    alt: 'Арман Султанов',
    company: 'Казахстан',
    position: 'Специалист по маркетинговой аналитике и Big Data. Работает в финансовом секторе, развивая инновационные подходы к анализу данных.',
    year: '2021'
  },
  {
    name: 'Екатерина Романова',
    imgSrc: jury_4_2021 ,
    alt: 'Екатерина Романова',
    company: 'Беларусь',
    position: 'Руководитель отдела креативных решений в рекламном агентстве, с многолетним опытом создания успешных кампаний.',
    year: '2021'
  },
  {
    name: 'Екатерина Васильева',
    imgSrc: jury_1_2020 ,
    alt: 'Екатерина Васильева',
    company: 'Россия',
    position: 'Директор по маркетингу в международной телекоммуникационной компании. Известна своими инновационными подходами в digital-стратегиях.',
    year: '2020'
  },
  {
    name: 'Максим Павлов',
    imgSrc: jury_2_2020 ,
    alt: 'Максим Павлов',
    company: 'Украина',
    position: 'Эксперт по контент-маркетингу и управлению цифровыми медиа. Работал с крупнейшими медиа-компаниями в Восточной Европе.',
    year: '2020'
  },
  {
    name: 'Алия Жумабекова',
    imgSrc: jury_3_2020 ,
    alt: 'Алия Жумабекова',
    company: 'Казахстан',
    position: 'Руководитель отдела PR и коммуникаций в международной нефтегазовой корпорации, с опытом работы на глобальном рынке.',
    year: '2020'
  },
  {
    name: 'Сергей Ильин',
    imgSrc: jury_4_2020 ,
    alt: 'Сергей Ильин',
    company: 'Беларусь',
    position: 'Специалист по аналитике и маркетинговым исследованиям. Консультант для крупных брендов в СНГ и странах Балтии.',
    year: '2020'
  },
  {
    name: 'Александр Смирнов',
    imgSrc: jury_1_2019,
    alt: 'Александр Смирнов',
    company: 'Россия',
    position: 'Руководитель отдела стратегического маркетинга в крупной международной FMCG-компании. Имеет более 15 лет опыта в управлении маркетинговыми кампаниями.',
    year: '2019'
  },
  {
    name: 'Мария Коваленко',
    imgSrc: jury_2_2019,
    alt: 'Мария Коваленко',
    company: 'Украина',
    position: 'Эксперт по брендингу и управлению репутацией. Работала с ведущими брендами в странах СНГ и Европе.',
    year: '2019'
  },
  {
    name: 'Гульмира Садыкова',
    imgSrc: jury_3_2019,
    alt: 'Гульмира Садыкова',
    company: 'Казахстан',
    position: 'Специалист по цифровому маркетингу и SEO, с опытом работы в ведущих агентствах Центральной Азии.',
    year: '2019'
  },
  {
    name: 'Игорь Новиков',
    imgSrc: jury_4_2019,
    alt: 'Игорь Новиков',
    company: 'Беларусь',
    position: 'Руководитель департамента креативных решений в одном из крупнейших рекламных агентств страны. Признан за креативные и нестандартные подходы к рекламе.',
    year: '2019'
  },
];

const JuryPage = () => {
  return (
    <>
    <section className="section page__wrapper">
    <h2 className="section__title">
    <svg className="section__title-icon svg-icon" aria-hidden="true">
        <use xlinkHref={`${Wda_sprite}#title-pixel-4`}></use>
      </svg>
      Жюри
	</h2>
  <p className="section__subtitle">
  Быть судьей на International Marketing Championship – это знак высочайшего признания профессионализма и мастерства в сфере маркетинга и рекламы. Каждый год жюри конкурса формируется из лучших специалистов отрасли, которые достигли значительных высот в своей карьере и обладают глубоким пониманием современных маркетинговых трендов.
	</p>
  <p className="section__subtitle">International Marketing Championship устанавливает высокие стандарты для отбора членов жюри. Только те, кто имеет подтвержденный опыт работы не менее трех лет и продемонстрировал выдающиеся результаты в своих проектах, могут занять это престижное место. Жюри конкурса не только оценивают работы участников, но и задают стандарты в индустрии, определяя, какие идеи и подходы заслуживают мирового признания.</p>
  <p className="section__subtitle">Престижность членства в жюри подтверждается не только участием в одном из самых значимых конкурсов в сфере маркетинга, но и возможностью обмена опытом с лучшими специалистами мира. Жюри становятся лицами конкурса, и их решения определяют будущее маркетинговой индустрии. Участие в жюри также открывает новые перспективы для профессионального роста и укрепления репутации в мировом маркетинговом сообществе.</p>
  <p className="section__subtitle">Члены жюри International Marketing Championship обязаны соблюдать строгие правила конфиденциальности и независимости, что гарантирует объективность и честность в оценке проектов. Каждый член жюри вносит свой уникальный вклад в процесс, помогая определить лучших из лучших.</p>
  </section>
    <section
      className="section page__wrapper"
      data-expose="true"
      data-effect="slide"
      data-duration="500"
      data-up="20rem"
    >
      <div className="_h1 d-flex section__title">
        <h1 className="section__title _h1 mb-auto mt-auto fw-400">
          Жюри{' '}
          {/* <span className="color-yellow font-pixel nominees__title-counter">
            /24
          </span> */}
        </h1>
        <a
          href="/contacts#cont"
          className="btn-arrow mb-auto ml-auto mt-auto hide-mob fw-400"
        >
          <span className="btn-arrow__icon">
          <svg className="svg-icon">
                      <use href={`${Wda_sprite}#btn-arrow`} />
                    </svg>
          </span>
          Стать членом жюри
        </a>
      </div>

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
    </section>
    </>
  );
};

export default JuryPage;
