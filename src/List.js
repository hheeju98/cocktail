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
  return (
    <div>
      <h2>
        {strInstructions} <br />
      </h2>
      <img src={strDrinkThumb} alt={idDrink} />
    </div>
  );
}
