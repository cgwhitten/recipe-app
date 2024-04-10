import React, { useState } from "react";

function RecipeTableRender ( {setRecipes, recipes, recipe} ) {
  

  const handleDelete = (event) => {
    for (let i = 0; i < recipes.length; i++){
      if (recipe.name === recipes[i].name) {
      const newRecipeList = [...recipes.slice(0,[i]), ...recipes.slice([i]+1)]
      setRecipes(newRecipeList)
      }
    }
  }
  
  return (
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td className="photo_td"><img className ="photo" src={recipe.photo}/></td>
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
        <td className="content_td"><p>{(recipe.preparation)}</p></td>
        <td className="button_td'"><button type="button" name="delete" onClick={handleDelete} >Delete</button></td>
      </tr>
    );
};

export default RecipeTableRender;