const Filter = ({ types, selectedType, onTypeChange }) => (
    <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)} className="filter-dropdown">
      <option value="">All Types</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
  export default Filter;
  