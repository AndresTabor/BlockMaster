import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BarraNav from '../components/BarraNav';
import Home from '../components/Home'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { AuthContext } from '../context/AuthContext';
import Profile from '../components/Profile';





export const AppRouter = () => {

    
    const [search, setSearch] = useState('')
    const [getMovies, setGetMovies] = useState('Todas las peliculas')
    const [logged, setLogged] = useState(false)
    const [currentUser, setcurrentUser] = useState({})



    useEffect(() => {
        
        localStorage.setItem('estado',logged)
    }, [logged])

    return (
        
        <AuthContext.Provider value = {{logged, setLogged, currentUser, setcurrentUser}}>
        <Router>            
        <BarraNav seccion={setGetMovies} estadoSearch={setSearch} logged={logged}/>
        
            <Routes>
                <Route path="/" element={<Home showCategory={getMovies} searchMovie={search}/>}/>
                <Route path="/SignIn" element={<SignIn  logged={logged} cambioLogged={setLogged}/>}/>
                <Route path="/SignUp" element={<SignUp  logged={logged} cambioLogged={setLogged}/>}/> 
                <Route path="/Profile" element={<Profile/>}/>                 
            </Routes>
        </Router>
        </AuthContext.Provider>
    )
}