import { useEffect, useState } from "react";
import ToyContainer from "./ToyContainer";
import AddToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function addToy(newToy) {
    setToys([...toys, newToy]);
  }

  function updateToy(updatedToy) {
    setToys(toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy)));
  }

  function deleteToy(id) {
    setToys(toys.filter((toy) => toy.id !== id));
  }

  function likeToy(updatedToy) {
    setToys(toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy)));
  }

  return (
    <div className="app">
      <h1>Toy Tales</h1>

      <AddToyForm addToy={addToy} />

      <ToyContainer
        toys={toys}
        updateToy={updateToy}
        deleteToy={deleteToy}
        likeToy={likeToy}
      />
    </div>
  );
}

export default App;