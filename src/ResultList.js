export default function ResultList({
  strDrink,
  idDrink,
  strCategory,
  strAlcoholic,
  strGlass,
  strInstructions,
  strDrinkThumb,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
}) {
  return (
    <div>
      <img src={strDrinkThumb} alt={idDrink} />
      <h3>Name : {strDrink}</h3>
      <h3>Category : {strCategory}</h3>
      <h3>Info : {strAlcoholic}</h3>
      <h3>Glass : {strGlass}</h3>
      <h3>Instructions : {strInstructions}</h3>
      <h3>
        Ingredients : {strIngredient1}, {strIngredient2}, {strIngredient3},
        {strIngredient4}
      </h3>
    </div>
  );
}
