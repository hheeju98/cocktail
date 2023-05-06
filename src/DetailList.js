import React from "react";
import { useLocation } from "react-router-dom";

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

      <h3>{strDrink}</h3>
      <h3>{strCategory}</h3>
      <h3>{strGlass}</h3>
      <h3>{strInstructions}</h3>
      <h3>{strIngredient1}</h3>
      <h3>{strIngredient2}</h3>
      <h3>{strIngredient3}</h3>
      <h3>{strIngredient4}</h3>
    </div>
  );
}
