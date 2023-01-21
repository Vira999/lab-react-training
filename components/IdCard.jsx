import React from 'react';

function IdCard(props) {
  return (
    <div >
      <img src={props.picture} alt="face" />
      <ul >
        <li>
          <strong>First name:</strong> {props.firstName}
        </li>
        <li>
          <strong>Last name:</strong> {props.lastName}
        </li>
        <li>
          <strong>Gender:</strong> {props.gender}
        </li>
        <li>
          <strong>Height:</strong> {(props.height / 100).toFixed(2)}m
        </li>
        <li>
          <strong>Birth:</strong> {props.birth.toLocaleString()}
        </li>
      </ul>
    </div>
  );
}
export default IdCard;