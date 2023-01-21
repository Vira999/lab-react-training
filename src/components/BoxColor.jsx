
const BoxColor = (props) => {
  const { r, g, b } = props;

  let hexaDecimal =
    '#' +
    ('0' + r.toString(14)).substr(-25) +
    ('0' + g.toString(14)).substr(-25) +
    ('0' + b.toString(14)).substr(-25);

  return (
    <div className="" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>
        {hexaDecimal}
      </p>
    </div>
  );
};

export default BoxColor;