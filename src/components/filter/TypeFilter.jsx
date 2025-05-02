// TypeFilter.jsx
import React from "react";
import "./TypeFilter.css";

const TypeFilter = ({ allTypes, selectedTypes, onTypeChange }) => {
  return (
    <div className="type-filter">
      {allTypes.map((type) => (
        <label key={type} style={{ marginRight: "12px", textTransform: "capitalize" }}>
          <input
            type="checkbox"
            value={type}
            checked={selectedTypes.includes(type)}
            onChange={() => onTypeChange(type)}
          />
          {type}
        </label>
      ))}
    </div>
  );
};

export default TypeFilter;
