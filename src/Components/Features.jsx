import React from 'react'
import styled from 'styled-components'
import Shoes from "../images/Red Shoe.jpg"
// import Rectangle from "../images/Rectangle 1141.jpg"
import Girl from "../images/Girl.jpg"
import Keyboard from "../images/keyboard.jpg"
import AIPIC from "../images/Ai pic.jpg"

function Features() {
  return (
    <DIV>
      <div className='main'>
        <div className='cont'>
            <div className='upper'>
                <div className='first'>
                    <div className='outfit'>
                        <div>
                           <h1>AI Outfits</h1>
                        </div>
                    </div>
                    <div className='shoes'>
                        <img src={Shoes} alt="" />
                    </div>
                </div>
                <div className='sec'>
                <div className='realistic'>
                        <div>
                           <h1>Realistic AI Avatar</h1>
                        </div>
                    </div>
                    <div className='girl'>
                        <img src={Girl} alt="" />
                    </div>
                </div>
            </div>
            <div className='lower'>
               <div className='sec'>
                    <div className='realistic'>
                        <div>
                           <h1>Generate or Write your Script</h1>
                        </div>
                    </div>
                    <div className='girl keyboard'>
                        <img src={Keyboard} alt="" />
                    </div>
                </div>
                <div className='first AI'>
                    <div className='outfit'>
                        <div>
                           <h1>AI-Powered Voice Genrator</h1>
                        </div>
                    </div>
                    <div className='shoes AIPIC'>
                        <img src={AIPIC} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </DIV>
  )
}

export default Features

const DIV = styled.div`
    .main{
        background: linear-gradient(135deg, #000000 0%, #091014 100%);
        width: 1440px;
        height: 1280px;
        padding: 96px 64px 96px 64px;
    }
    .cont{
        width: 1312px;
        height:1088px;
        display: grid;
        gap: 50px;
        margin-left: -10px;
    }
    .upper{
        max-width: 1160px;
        height: 528px;
        padding: 0px 3.5px 0px 3.5px;
        gap: 32px;
        display: flex;
    }
    .lower{
        width: 1312px;
        height: 528px;
        gap: 32px;
        display: flex;
    }
    .first{
        width: 480px;
        height: 528px;
        border-radius: 15px ;
        background: linear-gradient(180deg, #000000 -20%, #352C2E 30%);

    }

    .AI{
        width: 463px;
    }
    .sec{
        width: 640px;
        height: 528px;
        border-radius: 24px;
        background: #FFFFFF14;
        
    }

    .outfit{
        width: 525px;
        height: 192px;
        padding: 48px 62.5px 47.5px 62.5px;
        display: flex;
        position: relative;
        top: 28px;
        left: -30px;

    }
    .outfit>div{
        width: 400px;
        height: 96.5px;
        top: 48px;
        left: 62.5px;

    }
    .outfit>div>h1{
        font-family: Outfit;
        font-size: 36px;
        font-weight: 400;
        line-height: 48px;
        text-align: center;
        background: radial-gradient(58.9% 75% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 50%);
        -webkit-background-clip: text; 
        -moz-background-clip: text; 
        background-clip: text;
        color: transparent; 
    }

    .shoes{
        width: 463px;
        height: 208px;
        position: relative;
        top: 11px;
        margin: auto;
    }
    .realistic{
        width: 752px;
        height: 192px;
        padding: 48px 176px 47px 176px;

    }
    .realistic>div{
        width: 400px;
        height: 97px;
        position: relative;
        top: 28px;
        left: -50px;
    }

    .realistic>div>h1{
        font-family: Outfit;
        font-size: 36px;
        font-weight: 400;
        line-height: 48px;
        text-align: center;
        background: radial-gradient(58.9% 75% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 50%);
        -webkit-background-clip: text; 
        -moz-background-clip: text; 
        background-clip: text;
        color: transparent; 
    }
   .girl>img{
    border-radius: 0px 0px 24px 24px;
    position: relative;
    top: 86px;
   }

   .keyboard{
    position: relative;
    top: -38px
   }

   .AIPIC{
    position: relative;
    top:40px;
    border-radius: 0px 0px 50px 24px;
   }

   .AIPIC>img{
    border-radius: 0px 0px 24px 24px;
   }
`