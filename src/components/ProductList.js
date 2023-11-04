import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ProductList = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {recipes.map((recepi) => (
            <>
              <h3>{recipe.title}</h3>
              <p>{recipe.cookingTime}to make</p>
              <div>{recipe.method.substring(0,100)}...</div>
              <Link to={`/recipe/${recepi.id}`}>
                Cook this
              </Link>
            </>
          ))}
        </div>
      ))}
    </>
  );
};

export default ProductList;
