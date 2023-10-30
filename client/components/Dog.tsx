interface Props {
  name: string
  breed: string
  superpower: string
  image?: string
}

function Dog(props: Props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <h3 className="dog-name">{props.name}</h3>
          <p className="dog-breed">{props.breed}</p>
        </div>
        <div>
          <img
            className="dog-pic"
            alt={`${props.name} is a ${props.breed}`}
            src={props.image}
          />
        </div>
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}

export default Dog
