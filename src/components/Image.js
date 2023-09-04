const Image = (props) => 
  <img 
    src={props.src}
    width={props.width} 
    height={props.height} 
    className={props.variant} 
    alt={props.alt}
  />

export default Image
