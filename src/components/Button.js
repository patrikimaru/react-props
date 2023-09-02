export default function Button({children, onClick, variant}) {
  return <button onClick={onClick} className={variant}>{children}</button>
}



