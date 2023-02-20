import React from 'react'
import { useAppContext } from '../../contexts/AppContext'

function HomePage() {

    const context = useAppContext()
    const handlerStatus =(e) =>{
        context.setStatus(e.target.value)
    }
  return (
    <div>
       <h2> HomePage</h2> 
       <input placeholder='change status' onChange={handlerStatus} />

       <p>get value from context store : {context?.status ? context.status :"--"}</p>
       

    </div>
  )
}

export default HomePage