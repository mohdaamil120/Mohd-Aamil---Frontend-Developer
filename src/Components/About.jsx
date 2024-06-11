import React from 'react'
import styled from 'styled-components'
import AIGirl from "../images/ZzEcgyBWKakgLd4hnleDpz8lPcs.png.jpg"

function About() {
  return (
    <DIV>
      <div className='container'>
        <div className='img_con'>
            <img src={AIGirl} alt="" />
        </div>
        <div className='about'>
            <h1>How it works</h1>
            <div>
                <h2>Select an Avatar</h2>
                <h2>Create or Generate Script</h2>
                <h2>Select AI Voices</h2>
                <h2>Publish</h2>
            </div>
        </div>
      </div>
    </DIV>
  )
}

export default About

const DIV = styled.div`
    .container{
      background: linear-gradient(135deg, #141B28 20%, #000000 50%, #190C19 100%);
      /* border: 1px solid red; */
      width: 1452px;
      height: 659px;
      padding: 0px 4px 0px 4px;
      gap: 32px;
      display: flex;

    }

    .img_con{
      /* border: 1px solid red; */
      width: 816px;
      height: 659px;
      position: relative;
      left: -30px;
      padding: 75.86px 0px 75.14px 0px;
    }
    .img_con>img{
      width: 816px;
      height: 508px;
      top: 75.86px;
      left: 0.04px;
      border-radius: 0px 16px 16px 0px;
    }
    .about{
      /* border: 1px solid red; */
      width: 596px;
      height: 352px;
      position: relative;
      left: -30px;
      top: 200px;
    }
    .about > h1{
      font-family: Outfit;
      font-size: 64px;
      font-weight: 600;
      line-height: 64px;
      text-align: left;
      color: #FFFFFF;
    }
    .about > div> h2{
    font-family: Outfit;
    font-size: 35px;
    font-weight: 400;
    line-height: 64px;
    text-align: left;
    background: linear-gradient(90deg, #5CC3FA 0%, #9E6EE6 100%);
    -webkit-background-clip: text; /* For Safari and Chrome */
    -moz-background-clip: text; /* For Firefox */
    background-clip: text;
    color: transparent; 
}

`