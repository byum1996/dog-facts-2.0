import React from "react";

const renderDogFact = (dogFact) => {
  return (
    <ul>
      <li>{dogFact}</li>
    </ul>
  );
};

const DogFacts = ({ factData }) => {
  return factData.facts.map((dogFact) => renderDogFact(dogFact));
};

export default DogFacts;
