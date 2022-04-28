import React from 'react';
import '../css/StatisticBlock.css'
import up from '../img/icon-up.svg'
const StatisticBlock = ({data}) => {
  return (
    <div className='statisticBlock'>
      <div className='statisticBlock__top'>
        <span className='statisticBlock__params'>{data.params}</span>
        <img src={data.imgSrc} className='statisticBlock__img' alt={data.params}/>
      </div>
      <div className='statisticBlock__bot'>
        <span className='statisticBlock__count'>{data.counter}</span>
        <div className='statisticBlock__grow'>
          <img src={data.growth} className='statisticBlock__arrow' alt={data.counter}/>
          <span 
            className={`statisticBlock__grow-count ${data.growth === up ?
             'statisticBlock__grow-count--green' 
             : 
             'statisticBlock__grow-count--red'}`}>
             {data.growthCounter}%
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default StatisticBlock;