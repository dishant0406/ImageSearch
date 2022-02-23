import React from 'react';
import ImageCard from '../ImageCard/Imagecard';

import './Imagelist.css';

const Imagelist = ({Images})=> {
  const imgArr = Images.map(im=>{
    return <ImageCard key={im.id} im={im}/>
  });

  return (
    <div className='ImageList'>{imgArr}</div>
  )
}


export default Imagelist;