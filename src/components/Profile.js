
import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'
import { userUrl } from '../helpers/UrlsApi'
import { LoginContainer } from '../styles/Style'
//import { useNavigate } from 'react-router-dom';
import BtnDelete from "./BtnDelete";

const Profile = () => {
    //const navigate = useNavigate()
    const {currentUser, setcurrentUser, setLogged} = useContext(AuthContext)

    console.log(currentUser);
    
    const {nombre, apellido, correo, contraseña, id} = currentUser
    console.log(id);

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
        //console.log(user);
        console.log(currentUser);
    }

    



    return (
        <div>
            <LoginContainer>
                <h1 className='text-light'>Profile</h1>
                <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Nombre</Form.Label>
                    <Form.Control type="text" placeholder={nombre}  
                    name="nombre" value={nombre}  onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Apellido</Form.Label>
                    <Form.Control type="text" placeholder={apellido} 
                    name="apellido" value={apellido} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>{correo}</Form.Label>
                    <Form.Control type="email" placeholder="email@ejemplo.com.co" 
                    name="correo" value={correo} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light'>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder={contraseña}
                    name="contraseña" value={contraseña} onChange={handleChange} required/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={putData()}>
                    Actualizar
                </Button>
                <BtnDelete usuario={currentUser} setLogged={setLogged}/>
                </Form>
            </LoginContainer>
        </div>
    )
}

export default Profile
