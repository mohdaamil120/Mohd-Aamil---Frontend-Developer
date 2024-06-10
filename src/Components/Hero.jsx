import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar'
import Elon from "../images/Picture.jpg"
import Bill from "../images/Picture (1).jpg"
import Billl from "../images/Picture (2).jpg"
import Trump from "../images/Picture (3).jpg"
import FB from "../images/Picture (4).jpg"
import Ch from "../images/Picture (5).jpg"
import Trumpp from "../images/Picture (6).jpg"
import EIns from "../images/Picture (7).jpg"
import Obama from "../images/Picture (8).jpg"

function Hero() {
  return (
     
    <DIV>
      <Navbar/>
      
      <div className='main'>
        <div className='left'>
            <div>
              <h3>🎉 New in AI.GEN:  Real Time Interaction</h3>
            </div>
            <div className='text'>
              <h1>IOTA polygon serum ipsum WAX terraUSD gala THETA.</h1>
              <h2>Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</h2>
              <button>Get Started</button>
            </div>
        </div>
        <div className='right'>
          <div className='colm1'>
            <img src={Elon} alt="" />
            <img src={Bill} alt="" />
            <img src={Billl} alt="" />
          </div>
          <div className='colm2'>
            <img src={Trump}alt="" />
            <img src={FB}alt="" />
            <img src={Ch} alt="" />
          </div>
          <div className='colm3'>
            <img src={Trumpp} alt="" />
            <img src={EIns} alt="" />
            <img src={Obama} alt="" />
          </div>
        </div>
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
  display: flex;
}
.left{
    position: relative;
    width: 660px;
    height: 494.5px;
    /* top: 127.58px; */
    top: 200px;
    left: 165.54px;
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.left>div>h3{
  font-family: Outfit;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #FFFFFF;
  background: linear-gradient(94.15deg, rgba(255, 255, 255, 0.3) 0%, rgba(171, 171, 171, 0.15) 0%);
  width:315px;
  height:40px;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

}
 
 .text{
  width: 660px;
  height: 390.5px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  
 }

 .text>h1{
  font-family: Outfit;
  font-size: 48px;
  font-weight: 500;
  line-height: 59px;
  text-align: left;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%);
  -webkit-background-clip: text;
  color: transparent;
 }

 .text>h2{
  font-family: Outfit;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  color: #FFFFFFCC;

 }

 .text>button{
    width: 134px;
    height: 40px;
    border-radius: 4px ;
    opacity: 0px;
    color: #FFFFFF;
    background-image: linear-gradient(90deg, #8258B8, #C35DC5);
  }

.right{
  position: relative;
  width: 486.82px;
  height: 740.48px;
  /* top: -90.45px; */
  left: 130.82px;
  gap: 49px;
  display: flex;
}

.colm3{
  width: 130.31px;
  height: 740.48px;
  padding: 111px 0px 0px 0px;
  gap: 48.63px;
  overflow: hidden;
}
.colm1{
  width: 180.31px;
  height: 740.48px;
  padding: 111px 0px 0px 0px;
  gap: 48.63px;

 
}

.colm2{
  width: 180.31px;
  height: 631.28px;
  gap: 47.73px;
}

.colm1>img{
  border-radius: 20px;
  margin-bottom: 30px;
}
.colm2>img{
  border-radius: 20px;
  margin-bottom: 30px;
}
.colm3>img{
  border-radius: 20px 0px 0px 20px;
  margin-bottom: 30px;
}
`

