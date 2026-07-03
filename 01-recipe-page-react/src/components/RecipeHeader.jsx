import omeletteImg from '../assets/images/image-omelette.jpeg';

export default function RecipeHeader(){
    return (
        <header className="recipe-header">
            <img src={omeletteImg} alt="Omelette" style={{ width: '100%', height: 'auto' }} />
            <h1>Simple Omelette Recipe</h1>
            <p>An easy and delicious omelette recipe that's perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        </header>
    )
}