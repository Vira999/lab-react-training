function Random(props) {
  const randomNum = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div>
      <p>
        Random Value Between {props.min} and {props.max} => {randomNum}
      </p>
    </div>
  );
}
  
export default Random;