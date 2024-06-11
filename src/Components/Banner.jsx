import React from 'react'
import styled from 'styled-components'

function Banner() {
  return (
    <DIV>
      <div className='container'>
        <div className='banner'>
            <div className='upper'>
                
            </div>
            <div className='lower'>

            </div>
        </div>
      </div>
    </DIV>
  )
}

export default Banner

const DIV = styled.div`

.container{
    background: linear-gradient(135deg, #000000 50%, #190C19 100%);
}

.upper{
    width: 1,881.01px;
    height: 108px;
    left: -220.46px;
    padding: 40px 0.01px 0px 0px;
    gap: 24px;
}

.lower{
    width: 2,045px;
    height: 156px;
    top: 132px;
    left: -302.46px;
    padding: 0px 0px 64px 0px;
    gap: 24px;

}
`