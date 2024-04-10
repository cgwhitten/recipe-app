import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = ((event) => {
    event.preventDefault();
    setRecipes([...recipes, inputs])
    setInputs({name: '', cuisine: '', photo:'', ingredients:'', preparation:''})
  });
  
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={inputs.name || ""} 
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={inputs.cuisine || ""}
              />
            </td>
            <td>
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={inputs.photo || ""}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                type="textbox"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={inputs.ingredients || ""}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                type="textbox"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={inputs.preparation || ""}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
