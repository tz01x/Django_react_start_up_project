import React from 'react';


 const navbar= ()=>{
  let str="https://www.google.com"  
  return(
      <div>
       <nav>
         <ul>
           <li>
             <a href={str}>Home</a>
          </li>
          <li>
             <a href={str}>Home</a>
          </li>
          <li>
             <a href={str}>Home</a>
          </li>
          <li>
             <a href={str}>Home</a>
          </li>
          <li>
             <a href={str}>Home</a>
          </li>
          <li className='spicelclass'>
             <a href={str}>Home</a>
          </li>
         </ul>
       </nav>
      </div>
      
    )
};
export default navbar;
