import React from 'react'
import "../pages/Pagination.css"
function Pagination({currentPage, totalPages, onPageChange}) {

  return (
    <div className='pagination'>
      <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage === 1}>Prev</button>
      
      {Array.from({ length: totalPages }, (_, i) => (
  <button
    key={i + 1}
    onClick={() => onPageChange(i + 1)}
    className={currentPage === i + 1 ? "active" : ""}
  >
    {i + 1}
  </button>
))}
      <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}

export default Pagination