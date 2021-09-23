import React from 'react'

const Pagination = ({totalPost, postPerPage, pageNumberMove}) => {

      const pageNumber = [];
      for(let i=1; i<= Math.ceil(totalPost/postPerPage); i++){
            pageNumber.push(i);
      }

      return (
            <ul className="pagination justify-content-end my-3 px-5">
                  {
                        pageNumber.map((curItem)=> 
                              <li className="page-item" key={curItem}>
                                    <span onClick={()=>{pageNumberMove(curItem)}} className="page-link">{curItem}</span>
                              </li>
                        )
                  }

            </ul>
      )
}

export default Pagination
