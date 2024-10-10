import { useEffect, useState } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";


const App = () => {

  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectTag] = useState(null);
  const [recipes, setRecipes] = useState([]);
 

 useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
    .then((response) => response.json())
    .then(data => {
      setTags(data)
     })
    }, []);
  
    const handleSelect = (tagName: string) => {
      setSelectTag(tagName);

      fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
      .then((response) => response.json())
      .then(data => setRecipes(data.recipes))
    }

    const handleBackButtonClick = () => {
      setSelectTag(null)
    }
    
  return (
    <div className="recipe-list">
      <h1>ACME Recipe O'Master</h1>

      {selectedTag && <h2>Recipes for {selectedTag}</h2>}
      {selectedTag ? ( 
        <div>
          <button className="back-button" onClick={handleBackButtonClick}>Back</button>
        <RecipeList recipes={recipes} />
        </div>
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleSelect} />
      )}
    </div>
  );
};

export default App;
