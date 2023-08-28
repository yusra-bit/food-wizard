
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/pages/About';
import { Liked } from './components/pages/Liked';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';

import { useEffect, useState } from 'react';
import { Recipes } from './components/Recipes';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";




function App() {  
  const [recipes, setRecipes] = useState([]);  
  const[query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // function to search for the recipes

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false)
  };

  useEffect(() => {
    searchRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = event => {
    event.preventDefault()
    searchRecipes()
  }

  return (
    <div className='container'>
    <div className="App">
     <Navbar />
     <NavLink path="/recipes" >
      <Recipes />
     </NavLink>
   
    </div>
   <SearchBar 
      handleSubmit={handleSubmit}
      value={query}
      onChange={event => setQuery(event.target.value)}
      isLoading={isLoading}
   />
    <div className='recipes'>
      { recipes ? recipes.map(recipe => (
        <Cards
           key={recipe.idMeal}
           recipe={recipe}
        />
      ) ): "No Recipes!"}

    </div>
    </div>
 
  );
}

export default App;

