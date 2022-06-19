import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.div`
align-items: center;
background: pink;
padding:1vw;
display:flex;
justify-content:space-between;
padding:1vh 20vw;
`
const Linked=styled(Link)`
color:red;
text-decoration:none
`
const Navbar = () => {
  return (
    <div>
       <Nav>
        < Linked to='/' >Home </Linked>
        < Linked to='/Product' >Product </Linked>
        {/* < Linked to='/ProductDetails/:id' >ProductDetails </Linked> */}
       </Nav>
    </div>
  )
}

export default Navbar