import React from 'react'
import styled from 'styled-components'
import U from "../images/UIpzsWjsEP9vnVhXCCTAw9fPY.webp.jpg"
import F from "../images/4tbP2BbCx80JPRs6PkI8gHiJqY8.png.jpg"
import P from "../images/PCuVUcMVjxjC5kAuPqNGvzjS7Xw.png.jpg"

function Roadmap() {
  return (
    <DIV>
      <div className='main'>
        <div className='roadmap'>
            <h2>Roadmap</h2>
        </div>
        <div className='instruction'>
            <div className='text_pic'>
                <div className='text'>
                    <h1>PHASE 1</h1>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Horizen dai dai harmony dogecoin waves nexo.</li>
                        <li>Flow horizen waves dash tether zcash waves dash terraUSD.</li>
                        <li>Quant harmony amp cosmos PancakeSwap decentraland decred. </li>
                        <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
                    </ul>    
                </div>
                <div className='pic'>
                    <img src={U} alt="" />
                </div>
            </div>
            <div className='text_pic'>
                <div className='text'>
                    <h1>PHASE 2</h1>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox PancakeSwap.</li>
                        <li>Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero.</li>
                        <li>Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON.</li>
                        <li>Hive stellar velas flow cardano.</li>
                    </ul>    
                </div>
                <div className='pic'>
                    <img src={F} alt="" />
                </div>
            </div>
            <div className='text_pic'>
                <div className='text'>
                    <h1>PHASE 3</h1>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li> Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.</li>
                        <li>Waves TRON dogecoin bancor eCash quant secret.</li>
                        <li>Celsius crypto bancor nexo litecoin decentraland crypto.</li>
                    </ul>    
                </div>
                <div className='pic'>
                    <img src={P} alt="" />
                </div>
            </div>
        </div>
      </div>
    </DIV>
  )
}

export default Roadmap

const DIV = styled.div`

.main{
    max-width: 1312px;
    background: linear-gradient(135deg, #030506 20%, #333E45 50%, #200F20 100%);
}

.roadmap{
    width: 1312px;
    height: 64px;
    padding: 0px 407px 0px 407px;
    gap: 8px;
    /* border: 1px solid red; */
}
h2{
    font-family: Outfit;
    /* border: 1px solid green; */
    font-size: 48px;
    font-weight: 400;
    line-height: 64px;
    text-align: center;
    background: linear-gradient(90deg, #FA75F8 0%, #9E6EE6 100%);
    -webkit-background-clip: text; /* For Safari and Chrome */
    -moz-background-clip: text; /* For Firefox */
    background-clip: text;
    color: transparent; 
}

.instruction{
    max-width: 1312px;
    height: 1717px;
    display: flex;
    flex-direction: column;
    gap: 104px;
    /* border: 1px solid blue; */
    margin-top: 100px;
}

.text_pic{
    width: 1260px;
    height: 503px;
    padding: 0px 0px 0px 150px;
    gap: 80px;
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */
}

.text{
    width: 550px;
    height: 304px;
    gap: 16px;
}

.pic{

}
h1{
    font-family: Outfit;
    font-size: 48px;
    font-weight: 500;
    line-height: 64px;
    text-align: left;
    background: linear-gradient(90deg, #FACC69 0%, #FA75F8 30%);
    -webkit-background-clip: text; /* For Safari and Chrome */
    -moz-background-clip: text; /* For Firefox */
    background-clip: text;
    color: transparent;
}

ul{
    font-family: Outfit;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    color: #FFFFFFCC;

}
`