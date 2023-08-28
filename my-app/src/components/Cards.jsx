import React from 'react';
import { Link } from 'react-router-dom';
//import Recipes from './components/Recipes';

const Card = ({recipe}) => {
    const { idMeal, strMeal, strCategory, strMealThumb, strInstructions } = recipe;

let items = [];
for (let i = 1; i <= 20; i++) {
    items.push(recipe[`strIngredient${i}`]);
}
    let amt = [];
    for (let i = 1; i <= 20; i++) {
        amt.push(recipe[`strMeasure${i}`]);
    }
    amt = amt.filter((item) => {
        // eslint-disable-next-line no-mixed-operators
        return item !== " " || item !== "" && item !==null;
        
    });


    let ingredients = [];
        items.forEach((item, index) => {
            let amount = amt[index];
            
            if (amount === "" || amount === " ") {
                
                ingredients.push([`${item}`, "None"]);      

            } else {
                
                ingredients.push([`${amount}`, `${item}`]);
            }
          });
          ingredients = ingredients.filter((item) => item[0] !== "");


 return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
            <Link to="/Recipes" className="title">{strMeal}  </Link>

            
      
    </div>
            </div>
    )
};

export default Card;