import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailList from "./DetailList";

export default function Detail() {
  const [data, setData] = useState([]);
  const getDetail = async () => {
    const json = await (
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222`
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
