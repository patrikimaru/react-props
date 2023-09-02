export default function Image({src, width, height, variant}) {
  return <img src={src} width={width} height={height} className={variant} alt="tite"/>
}
