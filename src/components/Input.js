const Input = (props) => 
  <input 
    placeholder={props.placeholder} 
    onChange={props.onChange} 
    value={props.value} 
    className={props.variant}
  />;

export default Input;

