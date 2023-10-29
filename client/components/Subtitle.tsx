interface Props {
  text: string
}

function Subtitle(props: Props) {
  return <h2>{props.text}</h2>
}

export default Subtitle
