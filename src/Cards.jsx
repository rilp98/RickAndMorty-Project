import React from 'react';

const Cards = ({image,name})=>{
 return(
  <div className='relative block'>
   <img src={image} alt='images' className='w-40 h-40 rounded-lg'  />
   <div className='hover:block w-full absolute bottom-0 left-0 bg-gradient-to-t from-blue-500'>
    <p>{name}</p>   
  </div>
  </div>
 );
};

export default Cards;