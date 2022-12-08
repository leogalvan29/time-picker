import { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */

import Header from './components/Header'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import CardProfile from './components/CardProfile'
import Datos from './components/Datos'




function App() {
   const URL = 'https://github.com/leogalvan29/time-picker/blob/main/data.json'
   const [datos, setDatos] = useState([])
   const [diario, setDiario] = useState(false)
   const [semanal, setSemanal] = useState(false)
   const [mensual , setMensual] = useState(true)
   

  useEffect(() => {
    
     fetch(URL)
     .then(res => res.json())
     .then(data => {
          console.log(data)
       setDatos(data)  

    //  const work = data.filter(e => {
    //   return e.title === 'Work'
    //  })

    //  console.log(work)
       

       
       
        
     })
     
     
    console.log('componente cargado')
       
  
  },[])


  return (     
    <div css={css`
       padding-top: 25px;
       display: flex;
       flex-direction: column;
       align-items: center;
       width: 90%;
       margin: 0px auto;
       border-radius: 10px;
       @media(min-width: 768px){
        flex-direction: row;
        border-radius: 10px;
       }
    
    `}>
      
      
      <CardProfile 
      
         datos={datos}
         setDatos={setDatos}
         setDiario={setDiario}
         setMensual={setMensual}
         setSemanal={setSemanal}
      />
      <div css={css`
         margin-left: 10px;
         @media(min-width: 768px){
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
         }
         @media(min-width: 768px){
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
         }



      
      `}>
       
          
        {
          datos.map((dato,index) => (
            <Datos 
            key={index}
             dato={dato}
             diario={diario}
             mensual={mensual}
             semanal={semanal}
            
            />
          ))
        }
    
      </div>
    </div>
  )
}

export default App
