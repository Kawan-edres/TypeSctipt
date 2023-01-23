type Head={
    children:string
}
const Heading = (props:Head) => {
  return (
    <div>{props.children}</div>
  )
}

export default Heading