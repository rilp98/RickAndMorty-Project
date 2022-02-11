/* eslint-disable react/prop-types */
import React from 'react';

import './Card.css';

const Cards = ({image,name})=>{
    return(
        <div className='relative containerCard cursor-pointer duration-300'>

            <img src={image} alt='images' className='w-40 h-40 rounded-lg opacity-75'/>

            <div className=' h-12 w-full absolute bottom-0 left-0 bg-indigo-400 cardName'>
                <p className='font-semibold ml-2' >{name}</p>   
            </div>

        </div>
    );
};

export default Cards;