import React, { useEffect } from 'react';
import Wda_sprite from '../images/wda-sprite.svg';
import { Link } from 'react-router-dom';
import articlesData from './articlesData'; 


const ArticlesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <>

    <div className="section page__wrapper">
    <div class="_h1 d-flex section__title ">
		<h1 class="section__title _h1 mb-auto mt-auto fw-400">Новости</h1>
		<a href="/gallery" class="btn-arrow mb-auto ml-auto mt-auto hide-mob fw-400">
			<span class="btn-arrow__icon">
				<svg class="svg-icon">
        <use xlinkHref={`${Wda_sprite}#btn-arrow`}></use>
				</svg>
			</span>
			Фотогалерея
		</a>
	</div>
    <hr />
      <ul className="news _catalog">
        {articlesData.map((article, index) => (
          <li key={index} className=" news__item news__catalog-item">
            <span class="news__item-date _catalog">
					<span class="news__item-day color-white">{article.date1}</span>
					{article.date2}</span>
            <div className="article-info">
            <Link className='news__item-title-wrap link _gray' to={`/articles/${article.id}`}>
            <div className='d-flex '>
              <h3 className="news__item-title _short">{article.title}</h3>
              <svg class="svg-icon news__item-arrow _horizontal" aria-hidden="true">
              <use xlinkHref={`${Wda_sprite}#btn-arrow`}></use>
						</svg>
            </div>
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default ArticlesList;
