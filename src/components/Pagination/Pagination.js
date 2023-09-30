import React,{useState,useEffect} from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info,setPageNumber,PageNumber}) => {
  let [width,setWidth]=useState(window.innerWidth);
let updateDimension=()=>{
  setWidth(window.innerWidth)
}
  useEffect(()=>{

    window.addEventListener("resize",updateDimension);
    return()=> window.removeEventListener("resize",updateDimension);
  },[])
  return (
    <>
    <style jsx>
     {`
     .prev a{
      color:#fff;
      text-decoration: none;
     }
     .next a{
      color:#fff;
      text-decoration: none;
     }

     @media(max-width:768px){
      .prev,.next{
        display:none;
      }
      .pagination{
        font-size:14px;
      }
     }

     `}
    </style>
  <ReactPaginate 
  className='pagination justify-content-center gap-4 my-4' 
  forcePage={PageNumber===1 ? 0:PageNumber-1}
  nextLabel="Next" 
  previousLabel="Prev" 
  previousClassName=" btn  btn-primary  prev "
  nextClassName=" btn btn-primary next "
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeClassName="active"
  marginPagesDisplayed={width<576 ? 1:2}
  pageRangeDisplayed={width<576 ? 1:2}
  onPageChange={(data)=>{
    setPageNumber(data.selected+1);
  }}
  pageCount={info?.pages}
  />
  </>
  );
 
}

export default Pagination;