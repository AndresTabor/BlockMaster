//iniciar sesion
import React, { useContext, useState } from 'react'
import { LoginContainer } from '../styles/Style';
import { Form, Button } from 'react-bootstrap'
import { userUrl } from '../helpers/UrlsApi';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate()

    


    const {setLogged, setcurrentUser} = useContext(AuthContext)

    const [datosForm, setdatosForm] = useState({
        "correo": '',
        "contraseña":''
    })

    

    const handleChange = ({target}) => {
        setdatosForm( {
            ...datosForm,
            [target.name]: target.value
        })
        
    }

    
    const validation = async() => {
        const resp = await fetch(userUrl);
        const data = await resp.json();
        const result = data.find(dat => dat.correo === datosForm.correo)
        if(result === undefined){
            alert(`El correo no se encuentra registrado`)            
        }
        else if (result.contraseña === datosForm.contraseña){
            setLogged(true)
            setcurrentUser(result)
            navigate('/',{
                replace: true
            })
        }else{
            alert(`La contraseña es incorrecta`)  
        }
    }

    


    return (
        <LoginContainer>
            <h1 className="mb-3 text-light">Inicia Sesión</h1>
            <Form>
                <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@dominio.com" name="correo" onChange={handleChange} required/>                    
                </Form.Group>

                <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="*****" name="contraseña" onChange={handleChange} required/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={validation}>
                    Enviar
                </Button>
            </Form>
        </LoginContainer>
    )
}

export default SignIn
