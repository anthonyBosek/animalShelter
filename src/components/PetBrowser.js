import Pet from "./Pet";

const PetBrowser = ({ pets, onAdoptPet }) => {
  const allPets = pets.map((pet) => (
    <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  ));

  return <div className="ui cards">{allPets}</div>;
};

export default PetBrowser;
