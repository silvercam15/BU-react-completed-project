import * as React from 'react';
import HeaderComponent from './headerComponent';
import PetCardComponent from './petCardComponent';
import './style.css';
import mockPetData from './mock-data';
import { useState } from 'react';

export default function App() {
  const [dogsAdopted, setDogsAdopted] = useState(0);

  // Create header
  // Create pet card
  // iterate through pet data
  // Create Dogs Adopted tag and state
  // Create adopt button
  // connect state for button and adopt dog tag

  return (
    <div className="body">
      <HeaderComponent />
      <p className="dogsAdopted">Dogs adopted: {dogsAdopted}</p>
      <div className="grid-container">
        {mockPetData.map((petData) => {
          return (
            <div className="grid-item">
              <PetCardComponent
                petData={petData}
                dogsAdopted={dogsAdopted}
                setDogsAdopted={setDogsAdopted}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
