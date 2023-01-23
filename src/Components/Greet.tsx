type GreetProps={
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
}
const Greet = (props:GreetProps) => {
  const {messageCount=0}=props;
  return (
    <div>
        <h1> {props.isLoggedIn? `Hello ${props.name} ${messageCount}`:"Welcome new Guest"} </h1>

    </div>
  )
}

export default Greet