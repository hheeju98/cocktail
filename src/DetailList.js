import React from "react";
import { useLocation } from "react-router-dom";

export default function DetailList({ idDrink, strInstructions }) {
  return (
    <div>
      <h3>{strInstructions}</h3>
    </div>
  );
}
