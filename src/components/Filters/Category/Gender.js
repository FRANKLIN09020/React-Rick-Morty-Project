import React from 'react';
import FilterBTN from '../FilterBTN';

const Gender = ({setPageNumber,setGender}) => {
    let gender=["female","male","genderless","unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Gender
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body d-flex flex-wrap gap-3">
        {gender.map((items,index)=>(
            <FilterBTN setPageNumber={setPageNumber} task={setGender} name="gender" index={index} items={items} id={index} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Gender;