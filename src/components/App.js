import { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const App = () => {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const getData = () => {
    const { type } = filters;
    const param = type !== "all" ? `/?type=${type}` : "";
    fetch(`http://localhost:3001/pets${param}`)
      .then((resp) => resp.json())
      .then((data) => setPets(data))
      .catch((err) => console.log(err));
  };

  const onChangeType = (e) => setFilters({ type: e.target.value });

  const onFindPetsClick = () => getData();

  const onAdoptPet = (_id) => {
    const update = pets.map((pet) => {
      const isAdopted = pet.id === _id ? true : pet.isAdopted;
      return { ...pet, isAdopted };
    });
    setPets(update);
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              type={filters.type}
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
