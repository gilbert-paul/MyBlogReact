const Item = (props)=>{
  return (
    <>
    <div className="__item">
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <div>
        
        <img src={props.picture} alt={props.altPicture} />
        </div>
      <p>{props.description}</p>
    </div>
    </>
  )
}

export default Item