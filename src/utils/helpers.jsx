export function processIngredients(meal) {
  const ingredients = [];
  if (!meal) return ingredients;
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(
        `${ingredient.trim()} - ${measure ? measure.trim() : ""}`
      );
    }
  }
  return ingredients;
}
