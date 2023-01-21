import React from 'react';

function Greetings(props) {
  const greetings = {
    de: 'Hallo',
    fr: 'Bonjour',
    es: 'Hola',
    en: 'Hello',
  };

  return (
    <div>
      <p>
        {greetings[props.lang]} {props.children}
      </p>
    </div>
  );
}
export default Greetings;