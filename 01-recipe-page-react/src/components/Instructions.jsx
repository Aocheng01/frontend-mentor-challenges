import {instructions} from '../data/recipeData';

export default function Instructions(){
    return(
        <div className="instructions-box">
            <h2>Instrucctions</h2>
            <ol>
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    )
}
