import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { userUrl } from '../helpers/UrlsApi';
import axios from 'axios';
import { LoginContainer } from '../styles/Style';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
    const {setLogged} = useContext(AuthContext)

    const navigate = useNavigate()

    const [registro, setRegistro] = useState({

        "nombre": '',
        "apellido": '',
        "correo": '',
        "contraseña": '',
        "verDespues": []
    })

    const {nombre,apellido,correo,contraseña} = registro;
    
    const postData = () => {
        axios.post(userUrl,registro)
        .then(response => 
            navigate('/',{
                replace: true
            })).then(response => localStorage.setItem("estado", setLogged(true) ))     
        .catch(error => console.log(error))
        
    }
    
    const handleChanged = ({target}) => {
        setRegistro({
          ...registro,
          [target.name]: target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
    }


    return (
        <>
            <LoginContainer>
                <h1 className='text-light'>Registrate</h1>
                <Form onSubmit={() => handleSubmit()}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Mario" onChange={handleChanged} 
                    name="nombre" value={nombre}  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Lopez" onChange={handleChanged}
                    name="apellido" value={apellido} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="email@ejemplo.com.co" onChange={handleChanged}
                    name="correo" value={correo} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="******" onChange={handleChanged}
                    name="contraseña" value={contraseña} required/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={() => postData()}>
                    Enviar registro
                </Button>
                </Form>
            </LoginContainer>
        </>
    )

    //onClick={() => postData()}
}
export default SignUp
