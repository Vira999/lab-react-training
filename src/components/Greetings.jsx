
function Greetings(props) {

  function greeting(param) {
    switch (param) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  }

  return (
    <div className="">
      <p>
        {greeting(props.lang)} {props.children}
      </p>
    </div>
  );
}

export default Greetings;