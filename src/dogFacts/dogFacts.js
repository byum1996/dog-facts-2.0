import React from "react";
import DogFact from "./dogFact";

const renderDogFact = (dogFact) => {
  return (
    <div>
      <DogFact dogFact={dogFact} />
    </div>
  );
};

const DogFacts = ({ factData }) => {
  return factData.map((dogFact) => renderDogFact(dogFact));
};

export default DogFacts;
