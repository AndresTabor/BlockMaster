import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileContect } from '../styles/Style'

const ProfileButon = () => {


    return (
        <ProfileContect>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>                           
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                    </svg>        
                </li>
                <ul>
                    <li>
                        <Link to="/Profile" className="nav-link text-light align-self-center">Profile</Link> 
                    </li>
                    <button>Logout</button>
                </ul>     
            </ul>
            
        </ProfileContect>
    )
}

export default ProfileButon
