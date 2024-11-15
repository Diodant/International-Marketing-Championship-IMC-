import React from 'react';
import photo_1 from '../images/gallery/photo_1.jpg';
import photo_2 from '../images/gallery/photo_2.jpg';
import photo_3 from '../images/gallery/photo_3.jpg';
import photo_4 from '../images/gallery/photo_4.jpg';
import photo_5 from '../images/gallery/photo_5.jpg';
import photo_6 from '../images/gallery/photo_6.jpg';
import photo_7 from '../images/gallery/photo_7.jpg';
import photo_8 from '../images/gallery/photo_8.jpg';
import photo_9 from '../images/gallery/photo_9.jpg';
import photo_10 from '../images/gallery/photo_10.jpg';
import photo_11 from '../images/gallery/photo_11.jpg';
import photo_12 from '../images/gallery/photo_12.jpg';
import photo_13 from '../images/gallery/photo_12.jpg';
import photo_14 from '../images/gallery/photo_13.jpg';
import photo_15 from '../images/gallery/photo_15.jpg';

const Gallery = () => {
  return (
    <section className="section page__wrapper">
    <h1 className="section__title _h1  border-none">
      Фотогалерея <span className="color-yellow font-pixel nominees__title-counter">/15</span>
    </h1>

    <div className="photos">
					<a className="photos__item _horizontal _first"  data-gallery="wdaphotos">
				<img src={photo_1} alt="photo_1" className="photos__item-img"/>
			</a>
            <a className="photos__item _horizontal "  data-gallery="wdaphotos">
				<img src={photo_2} alt="photo_2" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal _last" data-gallery="wdaphotos">
                    <img src={photo_3} alt="photo_3" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal _first"  data-gallery="wdaphotos">
                    <img src={photo_4} alt="photo_4" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal"  data-gallery="wdaphotos">
                    <img src={photo_5} alt="photo_5" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal _last"  data-gallery="wdaphotos">
                    <img src={photo_6} alt="photo_6" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal _first"  data-gallery="wdaphotos">
                    <img src={photo_7} alt="photo_7" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal"  data-gallery="wdaphotos">
                    <img src={photo_8} alt="photo_8" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal _last"  data-gallery="wdaphotos">
                    <img src={photo_9} alt="photo_9" className="photos__item-img"/>
			</a>
            <a className="photos__item _horizontal _first"  data-gallery="wdaphotos">
                    <img src={photo_10} alt="photo_10" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal"  data-gallery="wdaphotos">
                    <img src={photo_11} alt="photo_11" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal _last"  data-gallery="wdaphotos">
                    <img src={photo_12} alt="photo_12" className="photos__item-img"/>
			</a>
            <a className="photos__item _horizontal _first"  data-gallery="wdaphotos">
                    <img src={photo_13} alt="photo_13" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal"  data-gallery="wdaphotos">
                    <img src={photo_14} alt="photo_14" className="photos__item-img"/>
			</a>
					<a className="photos__item _horizontal _last"  data-gallery="wdaphotos">
                    <img src={photo_15} alt="photo_15" className="photos__item-img"/>
			</a>
			</div>
  </section>
  
  );
};

export default Gallery;
