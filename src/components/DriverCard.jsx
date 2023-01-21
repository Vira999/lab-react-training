import Rating from './Rating';

const DriverCard = (props) => {
  const {name, rating, img, car} = props;

  return (  
    <div style={{backgroundColor: 'blue'}}>
      <img className='w-25 ' src={img} alt="driver" style={{  borderRadius: '0.8rem', width: `500px`, height: `250px`}} />
      <div>
        <p><strong>{name}</strong></p>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}


export default DriverCard;