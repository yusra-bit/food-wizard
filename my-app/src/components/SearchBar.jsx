import React from 'react';
import '../App.css';


const SearchBar = ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {

    
  return (
    <div className='searchBar'>
    <form onSubmit={handleSubmit} >
      <input 
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search..."
        className='text-input' />
      <input 
      type="submit"
       disabled={isLoading || !value}
       value="Search"
       className='btn'
        />
    </form>
    </div>
  );
}

export default SearchBar;