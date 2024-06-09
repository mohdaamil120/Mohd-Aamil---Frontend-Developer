import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar'

function Hero() {
  return (
     
    <DIV>
      <Navbar/>
      
      <div className='main'>
        <div className='left'></div>
        <div className='right'></div>
      </div>
    </DIV>

  )
}

export default Hero


const DIV = styled.div`
.main{
  background: linear-gradient(180deg, #000000, #160A16);
  height: 100vh;
  max-width: 1312px;
  margin: auto;
}

`