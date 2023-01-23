import { Name } from "./Models/Person.types"
type ListProps={
  names:Name[]
}
const PersonList = (props:ListProps) => {
  return (
    <div>{
      props.names.map(item=>{
        return(
          <h1 key={item.first}>{item.first} {item.last}</h1>
        )
      })}</div>
  )
}

export default PersonList