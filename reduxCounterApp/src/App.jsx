
import './App.css'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { addvalue, multiplyValue, removeValue } from './features/counter/counterSlice'

function App() {
 const count = useSelector((state) => state.counter.value)
 const dispatch = useDispatch()
  return (
    <>
     <Navbar/>
     <span>counter is {count}</span>
     <br /> <br />
     <button 
     onClick={() => dispatch(addvalue())}
     >+</button>
     <button
     onClick={() => dispatch(removeValue())}
     >-</button>
     <button
     onClick={() => dispatch(multiplyValue())}
     >*</button>
    </>
  )
}

export default App
