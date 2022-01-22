import React from 'react';



function Footer({link,icon,name}) {
  return(
   <>
     <a href={link} target='_blank' className='mr-10'>
      <img src={icon} alt={name}/>
     </a>
   </>
  );
}

export default Footer;