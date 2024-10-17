import React from 'react'
import { Nav } from './Nav'
import { Header } from './Header'
import { MusicCard } from './MusicCard'

export const Page1 = () => {
  return (
   <>
   
    <div className='container'>
   
   <section className='nav'>
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

