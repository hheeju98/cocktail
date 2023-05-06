import React from "react";
import { useState, useEffect } from "react";
import CocktailList from "./CocktailList";
import "./CocktailList.css";
export default function Home() {
  const [data, setData] = useState([]);
  const getCocktail = async () => {
    const json = await (
      await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
    ).json();
    setData(json.drinks);
    console.log(json.drinks);
  };
  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <div className="cocktailList">
      {data.map((m) => (
        <CocktailList
          key={m.idDrink}
          strDrinkThumb={m.strDrinkThumb}
          strInstructions={m.strInstructions}
          idDrink={m.idDrink}
          strDrink={m.strDrink}
        />
      ))}
    </div>
  );
}
