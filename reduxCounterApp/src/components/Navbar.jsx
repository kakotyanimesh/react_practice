import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
    const count = useSelector((state) => state.counter.value)
   
  return (
    <div>
        <h1>Counter app with redux-toolkit {count}</h1>
        </div>
  )
}

export default Navbar