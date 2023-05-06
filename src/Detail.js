import React from "react";
import { useState, useEffect } from "react";
import DetailList from "./DetailList";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { idDrink } = useParams();
  const [data, setData] = useState([]);
  const getDetail = async () => {
    const json = await (
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      )
    ).json();
    setData(json.drinks);
    console.log(json.drinks);
  };
  useEffect(() => {
    getDetail();
  });

  return (
    <div>
      {data.map((m) => (
        <DetailList
          key={m.idDrink}
          strInstructions={m.strInstructions}
          strDrink={m.strDrink}
          strCategory={m.strCategory}
          strGlass={m.strGlass}
          strIngredient1={m.strIngredient1}
          strIngredient2={m.strIngredient2}
          strIngredient3={m.strIngredient3}
          strIngredient4={m.strIngredient4}
          strDrinkThumb={m.strDrinkThumb}
        />
      ))}
    </div>
  );
}
