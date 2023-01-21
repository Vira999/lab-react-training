import React, { useState } from 'react';

function Carousel(props) {
  const [state, setState] = useState(0);

  function handleClickL() {
    if (state === 0) {
      setState(props.images.length - 1);
    } else {
      setState(state - 1);
    }
  }

  function handleClickR() {
    if (state === props.images.length - 1) {
      setState(0);
    } else {
      setState(state + 1);
    }
  }

  return (
    <div>
      <button onClick={handleClickL}>Left</button>
      <img alt='carousel' src={props.images[state]} ></img>
      <button onClick={handleClickR}>Right</button>
    </div>
  );
}

export default Carousel;