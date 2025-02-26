
function IdCard(props){

  return(
    <div>
      <img src={props.picture} alt="name"/>
      <div>
        <p><b>First name:</b> {props.firstName} </p>
        <p><b>Last name:</b> {props.lastName} </p>
        <p><b>Gender:</b> {props.gender} </p>
        <p><b>Height:</b> {props.height / 100}m</p>
        <p><b>Birth:</b> {props.birth.toDateString()} </p>
      </div>
    </div>
  )
}

export default IdCard;