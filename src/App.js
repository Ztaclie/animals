import {useState} from "react";
import AnimalShow from "./components/AnimalShow";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (<div className="App">
        <h1>Animal Ranch App</h1>
        <button type="button" onClick={handleClick}>Add Animal</button>
        <div>Animal Count: {count}</div>
    <AnimalShow />
    </div>);
};

export default App;