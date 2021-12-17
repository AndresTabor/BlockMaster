import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import axios from "axios";
import { userUrl } from '../helpers/UrlsApi'


export default class BtnDelete extends Component {
    
    
    

    

    deleteProfile = async () => {
        await axios.delete(userUrl + this.props.usuario.id)
        .then(response => {            
            this.props.setLogged(false)
            alert('perfil eliminado')
        }).catch(error => {
            console.log(error.message);
        })
    }

    render() {
        
        


        return (
            <div className='mt-3'>
                <Button variant="primary" type="button" onClick={() => this.deleteProfile() }>
                    Eliminar Perfil
                </Button>
            </div>
        )
    }
}
