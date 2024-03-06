import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Log in </h2>
        <input 
        type="text"
        value={username}
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}

         />
         <br /> 
         <input type="text"
         value={password} 
         placeholder='password'
         onChange={(e) => setPassword(e.target.value)}/>
         <br />
         <button onClick={handleClick}>submit </button>

         
    </div>
  )
}

export default Login