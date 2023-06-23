import React from 'react'
import styled from 'styled-components'

function Skills() {
  return (
    <FlexWrapper><h2>Compétences</h2></FlexWrapper>
  )
}

export default Skills

const FlexWrapper = styled.div`
display:flex;
flex-direction: row;
flex-wrap:no-wrap;
justify-content: space-around;
align-items:center;
`