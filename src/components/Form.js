

const Form = (props) => {
  return (
    <form>
      <input type="text" name="city" placeholder="Tokyo,Londn,Paris...etc" onChange={e => props.setCity(e.target.value)} />
      <button type="submit" onClick={props.getWeather}>調べる</button>
    </form>
  );
};

export default Form;
