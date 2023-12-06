import { useState } from "react";
import AnimalShow from "./components/AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="App">
      <h1>Animal Ranch App</h1>
      <button type="button" onClick={handleClick}>
        Add Animal
      </button>
      {renderedAnimals}
    </div>
  );
}

export default App;
