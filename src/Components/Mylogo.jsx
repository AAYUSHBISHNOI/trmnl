import React from 'react'
import { Container } from 'react-bootstrap'
import logo from "../img/png/termnl.png";

const Mylogo = () => {
  return (
    <div className='bcg_footer'>
        <Container>
            <img className='pt-2 pb-2' src={logo} alt="" />
        </Container>
    </div>
  )
}

export default Mylogo