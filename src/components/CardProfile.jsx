import React from 'react'
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import JeremyImg from '../images/image-jeremy.png'

const Profile = styled.div`

    width: 327px;
    height: 133px;
    background-color: #5747EA;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(min-width: 768px){
        width: 255px;
        height: 354px;
        border-radius: 10px;
    }

`

const ImgJeremy = styled.img`
     width: 64px;
     height: 64px;
     border-radius: 50%;
      

`

const Daily = styled.a`

     font-size:18px;
     color: #fff;
     font-family: 'Rubik', sans-serif;
     background-color: #1C204B;
     font-weight: 300;

`

const Weekly = styled.a`

     font-size:18px;
     color: #fff;
     font-family: 'Rubik', sans-serif;
     background-color: #1C204B;
     font-weight: 300;
`
const Montly = styled.a`
      font-size:18px;
     color: #fff;
     font-family: 'Rubik', sans-serif;
     background-color: #1C204B;
     font-weight: 300;

`


const CardProfile = ({setDatos, datos, setDiario, setMensual, setSemanal}) => { 

    const mostrarDaily = (e) => {
          e.preventDefault()
          setDiario(true) 
          setSemanal(false)
          setMensual(false)

    }

    const mostrarSemanal = (e) => {
         e.preventDefault()
         setDiario(false)
         setSemanal(true)
         setMensual(false)
    }

    const mostrarMensual = (e) => {
         e.preventDefault()
         setMensual(true)
         setSemanal(false)
         setDiario(false)

    }

    

  return (
    <div css={css`
      
        background-color: #1C204B;
        width: 327px;
        height: 203px;
        border-radius: 10px;
        @media(min-width:768px){
            width: 255px;
            height: 518px;
        }
    
    `}>
    <Profile>
       <ImgJeremy src={JeremyImg}></ImgJeremy>
       <div css={css`
        border: none;
        background-color: #5747EA;
        position: relative;
        left: 10px;
       
       `}>
         <p css={css`
         
         background-color: #5747ea;
         color: #fff;
         font-family: 'Rubik', sans-serif;
         font-size: 15px;
         font-weight: 400;
         `}>Report for</p>
              <p css={css`
         
         background-color: #5747ea;
         color: #fff;
         font-family: 'Rubik', sans-serif;
         font-weight: 400;
         font-size: 22px;
         `}>Jeremy Robson</p>
       </div>
      
    </Profile>
     
     <div css={css`
        background-color:#1C204B;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
       
     
     `}>

      <Daily onClick={mostrarDaily}>Daily</Daily>
      <Weekly onClick={mostrarSemanal}>Weekly</Weekly>
      <Montly onClick={mostrarMensual}>Montly</Montly>

     </div>

    </div>
  )
}

export default CardProfile