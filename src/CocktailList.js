import React from "react";
import { useNavigate } from "react-router-dom";

export default function CocktailList({
  idDrink,
  strInstructions,
  strDrinkThumb,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <h2>
        {strInstructions} <br />
      </h2>
      <img src={strDrinkThumb} alt={idDrink} />
      <button
        onClick={() => {
          navigate(`detail/${idDrink}`);
        }}
      >
        상세 보기
      </button>
    </div>
  );
}
