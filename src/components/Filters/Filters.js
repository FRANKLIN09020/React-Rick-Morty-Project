import React from 'react';
import Gender from './Category/Gender';
import Status from './Category/Status';
import Species from './Category/Species';
const Filters = ({setStatus,setPageNumber,setGender,setSpecies}) => {
    let clear=()=>{
      setStatus("");
      setPageNumber("");
      setGender("");
      setSpecies("");
      window.location.reload(false);
    }
  return (

    <div className='col-lg-3 col-12 mb-4'>
      
      <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
      <div style={{cursor:"pointer"}} className='text-center text-decoration-underline text-primary mb-4'
       onClick={clear}
      >Clear Filter</div>
      <div class="accordion" id="accordionExample">
       <Status setStatus={setStatus} setPageNumber={setPageNumber} />
       <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
       <Gender setGender={setGender} setPageNumber={setPageNumber}/>
      </div>
    </div>
  );
}

export default Filters;