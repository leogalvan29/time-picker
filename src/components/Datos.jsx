import React, { useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import iconWork from '../images/icon-work.svg'

const Datos = ({dato, diario, mensual, semanal}) => {


useEffect(() => {
    const work = document.querySelectorAll('.css-1bnvdx7-Datos')[0]
    
},[])
  
        
  
  return (
    <div css={css`
         width: 327px;
         height: 160px;
         background-color: #1c204b;
         display: flex;
         flex-direction:column;
         justify-content: flex-end;
         margin: 10px 0px;
         border-radius: 10px;
        @media(min-width: 768px){
            width: 255px;
            height: 169px;
        }
       
         
    `}>

        <div css={css`
         width: 327px;
         height: 122px;
         background-color: #1c204b;
         display: flex;
         justify-content: space-around;
         border-radius: 10px;
         @media(min-width: 768px){
            width: 255px;
            height: 169px;
            align-items: center;
        }
        
        `}>

      

         <div css={css`
             background-color: #1c204b;
         
         `}>
         <p css={css`
           color: #fff;
           font-family: 'Rubik', sans-serif;
           background-color: #1c204b;
           font-size: 18px;
        
        `}>{dato.title}</p>

         {mensual === true && diario === false && semanal === false ? (<p css={css`
             background-color: #1c204b;
             font-size:32px ;
             color: #fff;
             font-family: 'Rubik', sans-serif;
         
         `}>{dato.timeframes.monthly.current}hrs</p>): ''}
         {semanal && (<p css={css`
             background-color: #1c204b;
             font-size:32px ;
             color: #fff;
             font-family: 'Rubik', sans-serif;
         
         `}>{dato.timeframes.weekly.current}hrs</p>)}
         {diario && (<p css={css`
             background-color: #1c204b;
             font-size:32px ;
             color: #fff;
             font-family: 'Rubik', sans-serif;
         
         `}>{dato.timeframes.daily.current} hrs</p>)}
         

         </div>

         <div css={css`
             background-color: #1c204b;
             
         `}>

         {mensual === true && diario === false && semanal === false ? (<p css={css`
             background-color: #1c204b;
             display: flex;
             color: #fff;
             position: relative;
             top: 20px;
             font-family: 'Rubik', sans-serif;
             font-weight: 300;
         
         `}>Last Month - {dato.timeframes.monthly.previous}</p>): ''}
         {semanal && (<p css={css`
             background-color: #1c204b;
             display: flex;
             color: #fff;
             position: relative;
             top: 20px;
             font-family: 'Rubik', sans-serif;
             font-weight: 300;
         
         `}> Last Week - {dato.timeframes.weekly.previous}</p>)}
         {diario && (<p css={css`
             background-color: #1c204b;
             display: flex;
             color: #fff;
             position: relative;
             top: 20px;
             font-family: 'Rubik', sans-serif;
             font-weight: 300;
         
         `}> Last Day {dato.timeframes.daily.previous}</p>)}

         </div>

          
         

        </div>
          

            
       
         {/* {diario && (<p>{dato.timeframes.daily.current}</p>)} 
         {diario && (<p>{dato.timeframes.daily.previous}</p>)} 
         {semanal && (<p>{dato.timeframes.weekly.current}</p>)}
         {semanal && (<p>{dato.timeframes.weekly.previous}</p>)}
         {mensual && (<p>{dato.timeframes.monthly.current}</p>)}
         {mensual && (<p>{dato.timeframes.monthly.previous}</p>)} */}
    </div>
  )
}

export default Datos