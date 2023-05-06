import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultList from "./ResultList";

export default function SearchResult() {
  const { keyword } = useParams();
  const [results, setResults] = useState([]);
  const getResult = async () => {
    const json = await (
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
      )
    ).json();
    setResults(json.drinks);
    console.log(json.drinks);
  };
  useEffect(() => {
    getResult();
  });

  return (
    <div>
      <h2>검색 결과 : {keyword}</h2>
      {results.map((result) => (
        <ResultList
          key={result.idDrink}
          strDrink={result.strDrink}
          strCategory={result.strCategory}
          strAlcoholic={result.strAlcoholic}
          strGlass={result.strGlass}
          strInstructions={result.strInstructions}
          strDrinkThumb={result.strDrinkThumb}
          strIngredient1={result.strIngredient1}
          strIngredient2={result.strIngredient2}
          strIngredient3={result.strIngredient3}
          strIngredient4={result.strIngredient4}
        />
      ))}
    </div>
  );
}
