import React from 'react'
import { Nav } from './Nav'
import { MusicCard } from './MusicCard'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { UserContext } from '../assets/context/UseDataContext'
import { useContext } from 'react'



export const Page2 = () => {

const mensaje = useContext(UserContext);

    return (
        <>
        
        
         <div className='container'>
        
        <section className='nav'>
        <h3 className='Bienvenido'>BIENVENIDO</h3>
        <br/>
        
        
        

        <Nav/>
        
        </section>
     
       <section className='card'>
          
      <Header/>
      

        <MusicCard/>
        
       </section>
      </div>
      
      </>
       )
}
