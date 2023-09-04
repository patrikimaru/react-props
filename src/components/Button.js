const Button = (props) => 
  <button 
    onClick={props.onClick} 
    className={props.variant}>
      {props.children}
  </button>

export default Button




