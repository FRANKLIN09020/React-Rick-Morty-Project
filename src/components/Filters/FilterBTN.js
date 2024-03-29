import React from 'react';;

const FilterBTN = ({index,name,items,task,setPageNumber}) => {
   
  return (
    <>
    <div>
    <style jsx>
       {
        `
        .x:checked + label{
            background-color:#0b5ed7;
            color:#fff;
        }
        input[type='radio']{
          display:none;
        }
        
        `
       }
      </style>
    <div class="form-check ">
  <input onClick={
    ()=>{
        setPageNumber(1);
        task(items);
    }
  } class="form-check-input x" type="radio" name={name}  id={`${name}-${index}`}/>
  <label class="btn btn-outline-primary" for={`${name}-${index}`}>
    {items}
    </label>
</div>
</div>
</>
  );
}

export default FilterBTN;