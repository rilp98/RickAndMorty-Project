import React from 'react';



// eslint-disable-next-line react/prop-types
function Footer({link,icon,name}) {
    return(
        <>
            <a href={link} className='mr-10'>
                <img src={icon} alt={name}/>
            </a>
        </>
    );
}

export default Footer;