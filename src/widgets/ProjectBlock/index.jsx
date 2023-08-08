import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';

import './index.scss';
import Button from '../Button';

import github from '../../assets/ico/github.svg';

function ProjectBlock({ images, name, work, type, url, stack, repo, info }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`projectBlock ${inView ? 'active' : ''}`} ref={ref}>
      <div className="slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="leftSide">
              <img src={image.url} alt="" />
            </div>
          ))}
        </Slider>
      </div>
      <div className={`rightSide ${inView ? 'active' : ''}`}>
        <div className="together">
          <div className="name">
            <h2>{name}</h2>
            <h3>{work}</h3>
          </div>
          <div className="forWhat">
            <h4>{type}</h4>
          </div>
        </div>
        <div className="stack">
          <h4>{stack}</h4>
        </div>
        <div className="links">
          {url ? <Button url={url}>Смотреть</Button> : <Button disabled="disabled">{info}</Button>}
          <a href={repo}>
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
