import { useState } from 'react';
import './SortDropdown.css';

function SortDropdown({ onSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Sort by course name');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedItem(value);
    setIsOpen(false);
    if (onSort) {
      onSort(value); // Call the onSort callback with the selected sorting option
    }
  };

  return (
    <div className="dropdown mb-1 mr-1">
      <button
        className="btn btn-outline-secondary "
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {selectedItem}
        <span className="bi bi-chevron-down"></span>
      </button>
      <ul className={`dropdown-menu${isOpen ? ' show' : ''}`}>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleSelect('Sort by course name')}
          >
            Sort by course name
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleSelect('Sort by last accessed')}
          >
            Sort by last accessed
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SortDropdown;
