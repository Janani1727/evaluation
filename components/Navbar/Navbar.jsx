import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    
       <div style={{backgroundColor:"purple",height:"70px" ,textAlign:"center",display:"flex" ,gap:"30px"}}>
         <Link href='/' > <h1 style={{marginLeft:"500px"}}>Janani</h1> </Link> 
      <Link href='/projects'> <h1> projects</h1></Link>
      <Link href='/experience'><h1> Experience</h1></Link>
      </div>
   
  )
}

export default Navbar