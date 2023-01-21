const Rating = (props) => {
    let rate = Math.round(Number(props.children));
  
    let filledStars = [...new Array(rate)];
    let emptyStars = [...new Array(5 - rate)];
  
    return (
      <div>
        {filledStars.map((star, index) => (
          <i key={index} aria-hidden="true"></i>
        ))}
  
        {emptyStars.map((star, index) => (
          <i key={index} aria-hidden="true"></i>
        ))}
      </div>
    );
  };
  

export default Rating;