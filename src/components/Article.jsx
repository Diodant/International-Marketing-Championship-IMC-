import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articlesData from './articlesData';

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const article = articlesData.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return <p key={index} className="news__detail-text mb-20">{block.text}</p>;
        case 'header':
          return <h5 key={index} className="section__subtitle marg-40">{block.text}</h5>;
          case 'sub-header':
            return <div key={index} className="yellow-text">{block.text}</div>;
        case 'image':
          return <img key={index} src={block.src} alt={block.alt} className="article-page-image" />;
        case 'list':
          return <ul className='page-about__text mb-20'>
            <li className='page-about__list-item' key={index}>{block.text}</li>
            </ul>
        default:
          return null;
      }
    });
  };

  return ( 
    <>
    <div className="section page__wrapper">
      <div className="article-page">
        <h1 className='section__title d-flex'>
        <span className="news__detail-title-text">{article.title}</span>
        <span class="news__item-date news__detail-date">
							<span class="news__item-day color-white">{article.date1}</span>{article.date2}</span>
        </h1>
        <hr className="news__detail-title-hr"/>
        <img src={article.image} alt={article.title} className="article-page-image" />
        <div className="article-page-content">
          {renderContent(article.content)}
        </div>
        <div className="news__detail-text">Автор: <span className='link _white'>{article.autor}</span></div>
      </div>
    </div>
    </>
  );
};

export default Article;
