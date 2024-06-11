import React from 'react'
import styled from 'styled-components'
import Arrow from "../images/Vector (4).jpg"
import T from "../images/Vector.jpg"
import L from "../images/Vector (1).jpg"
import Ti from "../images/Vector (2).jpg"
import Y from "../images/Vector (3).jpg"

function Footer() {
  return (
    <DIV>
        <footer>
            <div className='container'>
                <div>
                    <h1>Get Started</h1>
                </div>
                <div >
                    <img src={Arrow} alt="" />
                </div>
            </div>
            <div className='footer_con'>
                <div>
                    <div className='right'>
                        <h2>Dash dash terraUSD neo uniswap kadena helium avalanche polymath bancor.</h2>
                    </div>
                    <div className='left'>
                        <p>Looking for help?</p>
                        <div>
                            <input type="text" placeholder='Enter your Email'/>
                            <button>Submit</button>
                        </div>                        
                    </div>
                </div>
                <div className='icon_con'>
                    <div className='line'></div>
                    <div className='icon'>
                        <div className='text'>
                            <h3>AI. GEN</h3>
                        </div>
                        <div className='social'>
                            <img src={T} alt="" />
                            <img src={L} alt="" />
                            <img src={Ti} alt="" />
                            <img src={Y} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </DIV>
  )
}

export default Footer

const DIV = styled.div`

.arrow{
    background: transparent;
}

 footer{
    background: linear-gradient(135deg, #0B0904 20%, #214558 50%, #34264B 100%);
 }   

.container{
    width: 1100px;
    height: 140px;
    border-radius: 6px;
    background: linear-gradient(90deg, #9E6EE5 0%, #FA75F8 100%);
    display: flex;
    padding: 31px 64px 33px 64px;
    justify-content: space-between;
    margin: auto;
}
h1{
    font-family: Outfit;
    font-size: 80px;
    font-weight: 400;
    line-height: 96px;
    text-align: left;
    color: #FFFFFF;

}
.footer_con{
    width: 1312px;
    height: 549px;
}
.footer_con > div{
    position: relative;
    display: flex;
    width: 1,312px;
    height: 130px;
    top: 150px;
    left: 64px;
    justify-content: space-between;
    
}
.right{
    width: 477px;
    height: 126px;
    position: relative;
    left: 20px;
}

.left{
    width: 835px;
    height: 130px;
    position: relative;
    right: 200px;
    padding: 10px 0px 10px 302.41px;
    gap: 16px;
}

h2{
    font-family: 'Outfit', sans-serif;
    font-size: 29px;
    font-weight: 400;
    line-height: 42px;
    text-align: left;
    background: radial-gradient(61.42% 1213.78% at 18.1% 57.03%, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;

}

p{
    font-family: Outfit;
    font-size: 24px;
    font-weight: 400;
    line-height: 30.24px;
    text-align: right;
    background: radial-gradient(70.54% 70.54% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.573) 92.71%, rgba(255, 255, 255, 0.6) 92.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

.left>div{
    width: 529px;
    height: 64px;
    gap: 9px;
    margin-top: 20px;
    display: flex;
    justify-content: end;
}



input{
    width: 300px;
    height: 64px;
    padding: 19px 24px 15px 24px;
    gap: 0px;
    border-radius: 8px;
    border: 1px solid white;
    background: transparent;
    color: #FFFFFF;
}

button{
    width: 140px;
    height: 64px;
    border-radius: 6px ;
    background: linear-gradient(271.65deg, #FA75F8 0%, #9E6EE5 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    color: #FFFFFF;
}

.line{
    width: 1085px;
    height: 2px;
    position: relative;
    top: 200px;
    left: 24px;
    background: #FFFFFF26;
    color: #FFFFFF26;

}

h3{
    font-family: Outfit;
    font-size: 20px;
    font-weight: 500;
    line-height: 25.2px;
    letter-spacing: 0.5em;
    text-align: left;
    color: #FFFFFF;

}

.icon{
    display: flex;
    position: relative;
    top: 120px;
    width: 1085px;
    left: 24px;
    color: #FFFFFF26;

}

.icon_con{
    display: flex;
    flex-direction: column;
}

.social{
    width: 1,124px;
    height: 24px;
    padding: 0px 0px 0px 700px;
    gap: 48px;
    display: flex;
}

.social > img{
    width: 24px;
    height: 19.5px;
    cursor: pointer;
}
`