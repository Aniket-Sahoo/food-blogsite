
// How would I add sections in the ingredients section. Refer to ingredients here: https://www.allrecipes.com/recipe/8432564/blueberry-cornmeal-galette/

const IngredientsComponent = ({ingredients}) => {
  return (
    <div className="ingredients-list border border-success">
      <div>
        <h2>Ingredients</h2>
      </div>
      <ul>
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient.quantity} {ingredient.unit} {ingredient.notes} {ingredient.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default IngredientsComponent;