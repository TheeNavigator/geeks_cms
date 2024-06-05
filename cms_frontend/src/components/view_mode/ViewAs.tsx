import { useState } from 'react';

function ViewAs({ onViewModeChange }) {
  const [viewMode, setViewMode] = useState('grid'); // Initial view mode

  const handleToggleView = (mode) => {
    setViewMode(mode);
    onViewModeChange(mode); // Call the callback function with the updated mode
  };

  return (
    <div className="view-as-container">
      <div className="btn-group" role="group">
        <button
          className={`btn btn-outline-primary ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => handleToggleView('grid')}
          title="View as grid"
          style={{
            backgroundColor: viewMode === 'grid' ? '#02223f' : 'transparent',
            border: 'none',
          }}
        >
          <i className={`bi bi-grid-fill ${viewMode === 'grid' ? 'text-white' : ''}`}></i>
        </button>
        <button
          className={`btn btn-outline-primary ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => handleToggleView('list')}
          title="View as list"
          style={{
            backgroundColor: viewMode === 'list' ? '#02223f' : 'transparent',
            border: 'none',
          }}
        >
          <i className={`bi bi-list ${viewMode === 'list' ? 'text-white' : ''}`}></i>
        </button>
      </div>
    </div>
  );
}

export default ViewAs;
