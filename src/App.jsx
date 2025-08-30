import { useEffect, useState } from "react";
import { Character } from "./Character";

export const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
          const result = await response.json()
          setCharacter(result.data);
      } catch (error) {
        console.error("Error ", error)
      }
    };
    fetchData()
  }, [])

  if (character.length === 0) {
    return (
      <>
        <header>
          <h1>Dragon Ball Characters</h1>
          <img src="https://gadhagod.github.io/Hyrule-Compendium-API/assets/dark_logo.png" alt="Dragon Ball Api" width='250'/>
        </header>
        <div>Chargin data...</div>
      </>
    )
  }

  return (
    <>
      <header>
        <h1>Zelda BOTW characters</h1>
        <img src="https://gadhagod.github.io/Hyrule-Compendium-API/assets/dark_logo.png" alt="Dragon Ball Api" width='250'/>
      </header>
      
      <div className="characters">
        {character.map((chr) => (
            <Character 
              key={chr.id}
              name={chr.name} 
              image={chr.image} 
              locations={chr.common_locations}
              drops={chr.drops}
            />
        ))}
      </div>
    </>
  );
};