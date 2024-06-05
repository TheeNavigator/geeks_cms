import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get('searchInput');
    setSearchQuery(query);
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="searchInput"
          placeholder="Search..."
        />
      </div>
    </form>
  );
}

export default SearchBar;
