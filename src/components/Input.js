export default function Input({placeholder, onChange, value, variant}){
  return <input placeholder={placeholder} onChange={onChange} value={value} className={variant}/>;
}
