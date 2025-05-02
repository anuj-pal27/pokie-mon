import React from 'react'

function Sorting({setSortOptions, sortOptions}) {
  return (
    <div className="sorting-controls">
        <label>Sort by: </label>
        <select
          value={sortOptions}
          onChange={(e) => setSortOptions(e.target.value)}
        >
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </div>
  )
}

export default Sorting