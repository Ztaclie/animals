import AnimalShow from "./components/AnimalShow";

function App() {
    const handleClick = () => {
        console.log("clicked");
    };
    const handleMouseMove = () => {
        console.log("Hovered");
    };

    return (<div className="App">
        <h1>Animal Ranch App</h1>
        <button type="button" onClick={handleClick}>Add Animal</button>
        <button type="button" onMouseMove={handleMouseMove}>Hover Animal</button>
    <AnimalShow />
    </div>);
};

export default App;