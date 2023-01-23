import React from 'react'
import Greet from './Components/Greet'
import Person from './Components/Person'
import PersonList from './Components/PersonList'
import Status from './Components/Status'
import Heading from './Components/Heading'
import Oscar from './Components/Oscar'
import Input from './Components/Input'
import User from './Components/State/User'
import Counter from './Components/State/Counter'

const App = () => {
  const name={
    first:"kawan",
    last:"idrees"
  }
  const nameList=[
    {
      first:"kawan",
      last:"edres"
    },
    {
      first:"karwan",
      last:"edres"
    },
    {
      first:"karzan",
      last:"edres"
    },
  ]
  return (
    <div>
      {/* normal */}
       <Greet name="Hewr"  isLoggedIn={true} />
       {/* object */}
       <Person name={name} />
       {/* Array */}
       <PersonList names={nameList} />

       <Status status="error" />

       <Heading>Heading</Heading>


       <Oscar>
        <Heading>Oscar goes to Linardo Decaprio</Heading>
       </Oscar>

       <Input value='' handleChange={(event)=>console.log(event)} />

       <User />

       <Counter />


      </div>
  )
}

export default App