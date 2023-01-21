import React, { useState } from 'react';



function Dice() {
  let number = Math.floor(Math.random() * 6) + 1;
  let srcImg = `./img/dice${number}.png`;
  let [value, setValue] = useState(srcImg);

  function handleClick() {
    let empty = '-empty';
    srcImg = `./images/dice${empty}.png`;
    setValue(srcImg);
    setTimeout(() => {
      number = Math.floor(Math.random() * 6) + 1;
      srcImg = `./images/dice${number}.png`;
      setValue(srcImg);
    }, 1000);
  }

  return (
    <div className="dices">
      <img alt='dice' src={value} height= "100px" width="150px" onClick={handleClick}></img>
    </div>
  );
}

export default Dice;