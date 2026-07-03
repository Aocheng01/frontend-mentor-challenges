import './App.css'
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import PreparationTime from './components/PreparationTime';
import RecipeHeader from './components/RecipeHeader';
import Nutrition from './components/Nutrition';

function App() {
  return (
    <main className="recipe-card">
        <RecipeHeader/>
        <PreparationTime/>
        <Ingredients/>
        <Instructions/>
        <Nutrition/>
    </main>
  );
}

export default App
