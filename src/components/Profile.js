import axios from "axios";
import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'
import { userUrl } from '../helpers/UrlsApi'
import { LoginContainer } from '../styles/Style'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser, setcurrentUser, setLogged} = useContext(AuthContext)
    
    const {nombre, apellido, correo, contraseña, id} = currentUser

    const [user, setUser] = useState({})

    const handleChange = ({target}) => {
        setcurrentUser( {
            ...setUser,
            [target.name]: target.value
        })
        
    }

    const putData = async () =>{
        await fetch(userUrl + id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }) 
    }

    const deleteProfile = async () => {
        await axios.delete(id)
        .then(response => {
            navigate('/',{

                replace: true
            })
            setLogged(false)
        }).catch(error => {
            console.log(error.message);
        })
    }



    return (
        <div>
            <LoginContainer>
                <h1 className='text-light'>Profile</h1>
                <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Mario"  
                    name="nombre" value={nombre}  onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Lopez" 
                    name="apellido" value={apellido} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="email@ejemplo.com.co" 
                    name="correo" value={correo} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="******" 
                    name="contraseña" value={contraseña} onChange={handleChange} required/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={putData()}>
                    Actualizar
                </Button>
                <Button variant="primary" type="button" onClick={deleteProfile()}>
                    Eliminar Perfil
                </Button>
                </Form>
            </LoginContainer>
        </div>
    )
}

export default Profile
