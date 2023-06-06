import React from "react";
import DogFacts from "./dogFacts";

const DogFactsContainer = () => {
  // const factData = ["Dogfact1", "Dogfact2", "Dogfact3"];

  const dogData = {
    facts: ["Facts1", "Facts2", "Facts3"],
  };

  console.log(dogData.facts.length);

  return (
    <>
      <p>DogFacts Container will go here</p>
      <DogFacts factData={dogData} />
    </>
  );
};

export default DogFactsContainer;
