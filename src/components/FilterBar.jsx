import React from 'react';

const FilterBar = ({ filters, setFilters, options }) => {
  const handleChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  return (
    <div className="filter-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
      {/* Language Filter */}
      <select value={filters.language} onChange={e => handleChange('language', e.target.value)}>
        <option value="">All Languages</option>
        {options.languages.map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
      {/* State Filter */}
      <select value={filters.state} onChange={e => handleChange('state', e.target.value)}>
        <option value="">All States</option>
        {options.states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      {/* Category Filter */}
      <select value={filters.category} onChange={e => handleChange('category', e.target.value)}>
        <option value="">All Categories</option>
        {options.categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      {/* Education Filter */}
      <select value={filters.education} onChange={e => handleChange('education', e.target.value)}>
        <option value="">All Education</option>
        {options.educations.map(edu => (
          <option key={edu} value={edu}>{edu}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
