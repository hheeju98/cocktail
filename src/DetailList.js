import React from "react";

export default function DetailList({
  idDrink,
  strDrink,
  strCategory,
  strGlass,
  strInstructions,
  strDrinkThumb,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
}) {
  return (
    <div>
      <img src={strDrinkThumb} alt={idDrink} />

      <h3>Name : {strDrink}</h3>
      <h3>Category : {strCategory}</h3>
      <h3>Glass: {strGlass}</h3>
      <h3>
        Ingredients : {strIngredient1}, {strIngredient2}, {strIngredient3},
        {strIngredient4}
      </h3>
    </div>
  );
}
