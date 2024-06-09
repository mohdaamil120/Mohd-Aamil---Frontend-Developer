import React from 'react'
import styled from 'styled-components';

function Navbar() {
  return (
    <DIV >
      {/* <h1 className='bg-gradient-to-br from-purple-500 via-pink-500 to-red-500'>Hello</h1>  */}
      <nav>
            <div className='container'>
                <div >
                <h2 className='logo'>AI.GEN</h2>  
                <div className='options'>
                    <span>Features</span>
                    <span>Roadmap</span>
                    <span>Tokenomicsa</span>
                </div>
                </div>
                <div className='btn'>
                    <button >Whitepaper</button>
                    <button className='btn2'>Get Started</button>
                </div>
            </div>
      </nav>
    </DIV>
  )
}

export default Navbar


const DIV = styled.div`

nav{
  z-index: 999;
  /* background: linear-gradient(to bottom right, #000000, #160A16, white); */
  background-color: #000000;
  color: #FFFFFF;
  position: absolute;
  width: 100%;
  background: transparent;
  padding: 25px 50px;
  border-bottom: 0.25px solid lightgray;
}
.btn{
  display: flex;
  gap: 12px;
}
.container{
    width: 100%;
    display: flex;
    gap: 48px;
    justify-content: space-between;
    align-items: center;
}
.container>div{
    display: flex;
    gap: 32px;
}
  .logo{
    font-family: Outfit;
    font-size: 20px;
    font-weight: 500;
    line-height: 25.2px;
    letter-spacing: 0.5em;
    text-align: left;

  }

  .options{
    display: flex;
    gap: 32px;
  }
  .options>span{
    font-family: Outfit;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
   
   }
  
  button{
    width: 134px;
    height: 40px;
    border-radius: 4px ;
    opacity: 0px;
    background: #FFFFFF4D;
  }

  .btn2{
    background-image: linear-gradient(90deg, #8258B8, #C35DC5);
  }
`