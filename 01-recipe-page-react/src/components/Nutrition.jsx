import {nutrition} from '../data/recipeData';

export default function Nutrition() {
    return(
        <section className="nutrition-box">
            <h2>Nutrition</h2>
            <p>The table below shows the nutritional information for this recipe:</p>
           <table>
                <tbody>
                    {nutrition.map((item, index) => (
                        <tr key={index}>
                            <td className="label">{item.label}</td>
                            <td className="value">{item.value}</td>
                        </tr>
                    ))}
                </tbody>
           </table>
        </section>
    )}