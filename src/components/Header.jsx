import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Titulo = styled.h1`

    font-size:30px;
    color: black;

`

const Header = () => {
  return (
    <Titulo>Hola mundo</Titulo>
  )
}

export default Header