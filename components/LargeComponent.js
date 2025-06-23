// components/LargeComponent.js
import React from 'react';

const LargeComponent = () => {
  console.log("LargeComponent cargado y renderizado");
  return <div>Este es un componente grande cargado con lazy loading.</div>;
};

export default LargeComponent;