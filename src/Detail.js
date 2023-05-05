import React from "react";
import { useState, useEffect } from "react";
import DetailList from "./DetailList";
import { useParams } from "react-router-dom";

export default function Detail({ drinks }) {
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
  }, []);

  return (
    <div>
      {data.map((m) => (
        <DetailList key={m.idDrink} strInstructions={m.strInstructions} />
      ))}
    </div>
  );
}
