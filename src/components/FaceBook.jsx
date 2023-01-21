import React, { useState, useEffect } from 'react';
import profilesList from '../data/berlin.json';
import IdCard from './IdCard';

const FaceBook = () => {
  const countries = [...new Set(profilesList.map((item) => item.country))];

  const [state, setState] = useState({
    profiles: [...profilesList],
  });

  const handleClick = (e) => {
    let targetCountry = e.currentTarget.value;

    const selected = profilesList.map((item) => {
      return item.country === targetCountry
        ? {
            ...item,
            bg: '#455eb4',
          }
        : { ...item };
    });
    setState({ ...state, profiles: [...selected] });
  };

  useEffect(() => {
    console.log(countries);
  }, [state]);

  return (
    <div>
      {countries.sort().map((country, index) => (
        <button
          onClick={(e) => handleClick(e)}
          key={index}
          value={country}
        >
          {country}
        </button>
      ))}

      <div>
        {state.profiles.map((person, idx) => (

          <div>
            <div style={{backgroundColor: `${person.bg ? person.bg : '#fff'}`}}>
              <img  src={person.img} alt={person.firstName} />
                <div>
                  <p><strong>First name:</strong> {person.firstName}</p>
                  <p><strong>Last name: </strong>{person.lastName} </p>
                  <p><strong>Country: </strong>{person.country} </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default FaceBook;