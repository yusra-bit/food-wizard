import React from 'react';

const Card = ({recipe}) => {
    const { idMeal, strMeal,strCategory, strMealThumb, strInstructions} = recipe;

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
                ingredients.push([`${amount}`.split("/")[0], `${amount}`.split("/")[1], `${item}`]);
            }
          });
          ingredients = ingredients.filter((item) => item[0] !== "");


  return (
    <div className='recipeCard'>
        <img 
        src={strMealThumb}
        alt={strMeal}
        className='card-img'/>

        <div>
            <span className='category'>{strCategory}</span>
            <h3>{strMeal}</h3>
            
              
            <span>
        {ingredients.map((item) => (
            <li key={item[1]}>
                {item[0]} {item[1]} {item[2]}
            </li>
        ))}
    </span>
            
    <p className='category'>{strInstructions}</p>
           <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Ingredients</a>
        </div>
        
    </div>
  );
}

export default Card;