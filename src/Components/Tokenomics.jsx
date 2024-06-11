import  ChartGraph  from './Chart'
import React from 'react'
import styled from 'styled-components'

function Tokenomics() {
  return (
    <DIV>
      <div className='main'>
        <div className='head'>
            <h1>Tokenomics</h1>
        </div>
        <div className='graph_cont'>
            <div className='details'>
                <p> Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               <span >: AI GEN</span></p>
                <p> Token Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         <span >: $AIGEN</span></p>
                <p> Total Supply &nbsp;       <span>: 1B</span></p>
                <p> Circulating Supply &nbsp; <span>: 1B</span></p>
                <p> Contract &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           <span>: Loram ipsum dolor sit a...</span></p>
                <p> Chain &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              <span>: Ethereum </span></p>
            </div>

            {/* <div> */}
                <div className='graph'>
                    <div className='Dounut'>
                        <ChartGraph/>
                    </div>
                    <div className='data'>
                        <div>
                            <span className='color'></span>
                            <span>Partnership</span>
                            <span className='space'>&nbsp;&nbsp;: 5% tokens</span>
                        </div>
                        <div>
                            <span className='color1'></span>
                            <span>LP Pool</span>
                            <span className='space'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  35% tokens</span>
                        </div>
                        <div>
                            <span className='color2'></span>
                            <span>Burned</span>
                            <span className='space'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  30% tokens</span>
                        </div>
                        <div>
                            <span className='color3'></span>
                            <span>BNB LP Pool</span>
                            <span className='space'>:  30% tokens</span>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            
        </div>
      </div>
    </DIV>
  )
}

export default Tokenomics

const DIV= styled.div`
    
    .main{
        background: linear-gradient(135deg, #000000 0%, #2A2211 60% ,#150C17 80%);
        width: 1440px;
        height: 905px;
        padding: 40px;
        gap: 64px;

    }

    .head{
        width: 1440px;
        height: 64px;
        padding: 0px 407px 0px 407px;
        gap: 8px;
        position: relative;
        left: -120px;
        margin-top: 50px;
    }
   .head>h1{
        font-family: Outfit;
        font-size: 48px;
        font-weight: 400;
        line-height: 64px;
        text-align: center;
        background: linear-gradient(90deg, #FA75F8 0%, #9E6EE6 100%);
        -webkit-background-clip: text; 
        -moz-background-clip: text; 
        background-clip: text;
        color: transparent; 

    }
    .graph_cont{
        width: 1440px;
        height: 737px;
        gap: 44px;

    }
    .details{
        max-width: 1312px;
        height: 189px;
        padding: 0px 80px 0px 80px;
        gap: 16px;
        /* border: 1px solid red; */
        display: grid;
        grid-template-columns: repeat(2,1fr);
        margin: 50px 0px 30px 0px;
    }
    .graph{
        max-width: 1312px;
        /* height: 504px; */
        padding: 0px 80px 0px 80px;
        gap: 92px;
        /* display: flex; */
        margin-top: 60px;
        margin-left: 40px;
    }

    .details>p{
        color: #FFFFFF;
       
    }
    span{
        margin-left: 20px;
        color: #FFFFFFCC;
    }

    .dounut{
        width: 577.59px;
        height: 504px;
        border-radius: 25.67px ;
        
    }

    .data{
        max-width: 350px;
        position: relative;
        left: 600px;
        top: -280px;
    }

    .data > div{
        border: 1px solid gray;
        display: flex;
        padding: 15px;
        border-radius: 8px;
        flex-direction: row;
        margin-bottom: 10px;
    }
    .color{
        border-radius: 8px 0 0 8px;
        width: 20px;
        height: 55px;
        margin-top: -5%;
        margin-bottom: -10%;
        margin-left: -15px;
        background-color: #9934FF;
    }
    .color1{
        border-radius: 8px 0 0 8px;
        width: 20px;
        height: 55px;
        margin-top: -5%;
        margin-bottom: -10%;
        margin-left: -15px;
        background-color: #028DFD;
    }
    .color2{
        border-radius: 8px 0 0 8px;
        width: 20px;
        height: 55px;
        margin-top: -5%;
        margin-bottom: -10%;
        margin-left: -15px;
        background-color: #FF8F34;
    }
    .color3{
        border-radius: 8px 0 0 8px;
        width: 20px;
        height: 55px;
        margin-top: -5%;
        margin-bottom: -10%;
        margin-left: -15px;
        background-color: #BE2C2C;
    }

    .space{
        margin-left: 80px;
    }
`