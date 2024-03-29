import React from 'react';
import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';

const Cards = ({ results,page }) => {
  let display;
 
  if(results){
    display=results.map((x)=>{
      let{id,name,image,location,status}=x;
      return(
      <Link to={`${page}${id}`} key={id} className='col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark'
      style={{ textDecoration: "none" }}
      >
       
        <div className={`${styles.cards} d-flex justify-content-center flex-column`}>
       <img src={image} alt='char-img' className={`${styles.img} img-fluid`}/>
       <div className='content' style={{padding:"10px"}}>
         <div className='fs-4 fw-bold mb-4'>{name}</div>
         <div className="">
          <div className='fs-6'>last location</div>
          <div className='fs-5'>{location.name}</div>
         </div>
       </div>
       </div>
       {(()=>{
           if(status==="Dead"){
            return(
            <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
            );
           }
           else if(status==="Alive"){
            return(
            <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
            );
         } else{
          return(
          <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
          );
       }
       })()}
      
        </Link>
        );
    });
  }
  else{
    display="No Character found :/";
  }
  return (
    <>
    {display}
    </>
  );
}

export default Cards;