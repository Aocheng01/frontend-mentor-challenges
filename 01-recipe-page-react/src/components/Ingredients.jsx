import {ingredients} from '../data/recipeData';

export default function Ingredients() {
    return(
        <div className="ingredients-box">
            <h2>Ingredients</h2>

            <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
        </div>
        
    )
}