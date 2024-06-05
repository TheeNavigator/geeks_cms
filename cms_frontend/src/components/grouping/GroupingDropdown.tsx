import { useState } from 'react';
import './GroupingDropdown.css';

const GroupingDropdown = () => {
  const options = ['All', 'In progress', 'Future', 'Past', 'Starred', 'Removed from view'];
  const [selectedItem, setSelectedItem] = useState('All');

  const handleSelect = (option) => {
    setSelectedItem(option);
  };

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn d-flex align-items-center justify-content-between"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedItem}
          <span className="bi bi-chevron-down"></span>
        </button>
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option}>
              <a
                href="#"
                className="dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GroupingDropdown;
