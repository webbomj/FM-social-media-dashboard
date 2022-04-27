import React from 'react';
import "../css/MainMedia.css";
import MediaCard from "../components/MediaCard"

const MainMedia = ({data}) => {

  return (
    <div className='mainMedia-wrapper'>
      {data.map((social) => 
        <MediaCard data={social} key={social.name}/>
      )}
      
    </div>
  );
};

export default MainMedia;