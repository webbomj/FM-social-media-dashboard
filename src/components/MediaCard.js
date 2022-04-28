import React from 'react';
import "../css/MediaCard.css"
import up from '../img/icon-up.svg'

const MediaCard = ({data}) => {

  return (
    <div className='card'>
      <div className={`card__line ${data.color}`}></div>
      <div className='card__top'>
        <img className='card__img' src={data.imgSrc} alt={data.nameChanel}/>
        <span className='card__name'>{data.nameChanel}</span>
      </div>
      <span className='card__counter'>{data.count}</span>
      <span className='card__text'>{data.subscribers}</span>
      <div className='card__bot'>
        <img className='card__arrow' src={data.growth} alt={data.growth}/>
        <span className={`card__bot-counter ${data.growth === up ? 'card__bot-counter-green' : 'card__bot-counter-red'}`}>12 Today</span>
      </div>
      
      
    </div>
  );
};

export default MediaCard;