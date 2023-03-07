import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        preferencias: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    const reset = () => {
        setUser({
            nombre: '',
            apellido: '',
            preferencias: ''
        })
        setShow(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.charAt(0) != " " && user.nombre.length >= 3 && user.apellido.length >= 6 && user.preferencias !== '') {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Apellido</label>
            <input type="text" value={user.apellido} onChange={(e) => setUser({...user, apellido: e.target.value})}/>
            <select value={user.preferencias} onChange={(e) => setUser({...user, preferencias: e.target.value})}>
                <option value="">Seleccione su Preferencia</option>
                <option value="Musica">Musica</option>
                <option value="Libros">Libros</option>
                <option value="Cines">Cines</option>
            </select>
            <button style={{backgroundColor: 'green'}}>Enviar</button>
            {err && 'Por favor chequea que la información sea correcta.'}
        </form>
        <button onClick={reset} style={{backgroundColor: 'red'}}>Reset</button>
        {show  && <Card nombre={user.nombre} apellido={user.apellido} preferencias = {user.preferencias}/>}
       
    </div>
  )
}

export default Form