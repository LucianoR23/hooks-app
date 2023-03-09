import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
// import { Message } from "./Message"


export const FormWithCustomHook = () => {


    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const {username, email, password} = formState;

    // useEffect(() => {
    //     console.log('useEffect llamado email');
    // }, [email])

    


  return (
    <>
        <h1>Formulario con Custom Hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange} />
        
        {/* {
            (username === 'LucianoR23') && <Message/>
        } */}

        <input 
            type="text"
            className="form-control mt-2"
            placeholder="example@example.com"
            name="email"
            value={email}
            onChange={onInputChange} />
        
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange} />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}
