import '../../DevMode.css'

const RecipeStepsComponent = ({instructions}) => {
  return (
    <div className="steps-list border border-primary">
      <div>
        <h2>Directions</h2>
      </div>
      <ol>
        {instructions.map((step) => (
          <li key={step.step_number}>{step.description}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeStepsComponent