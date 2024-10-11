
// add recipe reviews, ratings and action footer. refer to https://www.allrecipes.com/recipe/274690/homemade-portuguese-chicken/
const RecipePageIntroComponent = ({article}) => {
  console.log(article);
  return (
    <>
      <div>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
    </>
  )
}

export default RecipePageIntroComponent