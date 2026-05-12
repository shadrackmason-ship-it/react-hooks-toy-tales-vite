import { useEffect, useState } from "react";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function addToy(newToy) {
  setToys((prev) => [...prev, newToy]);
}

  function updateToy(updatedToy) {
    setToys((prev) =>
      prev.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  function deleteToy(id) {
    setToys((prev) => prev.filter((toy) => toy.id !== id));
  }

  function likeToy(updatedToy) {
    setToys((prev) =>
      prev.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  return (
    <div className="app">
      <h1>Toy Tales</h1>

      {/* FIXED PROP NAME */}
      <ToyForm onAddToy={addToy} />

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