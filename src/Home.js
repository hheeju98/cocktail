import React from "react";
import { useState, useEffect } from "react";
import CocktailList from "./CocktailList";
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

  const searchCocktail = async () => {
    const search = await (
      await fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
    ).json();
    console.log(search);
  };
  useEffect(() => {
    searchCocktail();
  }, []);
  return (
    <div>
      {data.map((m) => (
        <CocktailList
          key={m.idDrink}
          strDrinkThumb={m.strDrinkThumb}
          strInstructions={m.strInstructions}
          idDrink={m.idDrink}
        />
      ))}
    </div>
  );
}
