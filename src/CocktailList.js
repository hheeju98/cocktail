import React from "react";
import { useNavigate } from "react-router-dom";
import "./CocktailList.css";

export default function CocktailList({
  idDrink,
  strDrink,
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
      <div className="cocktailList_div">
        <div className="img">
          <img src={strDrinkThumb} alt={idDrink} className="cocktailList_img" />
        </div>
        <div className="name">
          <h3 className="cocktailList_name">Name : {strDrink}</h3>
        </div>
        <div className="cocktailList_btn">
          <button
            className="cocktailList_button"
            onClick={() => {
              navigate(`detail/${idDrink}`);
            }}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
