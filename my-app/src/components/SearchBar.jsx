import React from 'react';

const SearchBar = ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {

    
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search..." />
      <input 
      type="submit"
       disabled={isLoading || !value}
       value="Search"
        />
    </form>
  );
}

export default SearchBar;