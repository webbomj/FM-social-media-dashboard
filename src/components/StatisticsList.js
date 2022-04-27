import React from 'react';

import '../css/StatisticsList.css'

import StatisticBlock from './StatisticBlock';


const StatisticsList = ({data}) => {
  return (
    <div className='statistics-wrapper'>
      <h2 className='statistics-h2'>Overview - Today</h2>
      <div className='statistcsBlocks'>
        {data.map((block, i) => 
          <StatisticBlock data={block} key={block.params + i}/>
        )}

        
      </div>
    </div>
    
  );
};

export default StatisticsList;