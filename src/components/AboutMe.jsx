import React from 'react'
import avatar from '../assets/img/avatar-nora.jpg'

import styled from 'styled-components'

function AboutMe() {
  return (
    <FlexWrapper><AboutSection><h1 style={{color:"white", fontWeight:"bold"}}>Hello! Je suis ...</h1></AboutSection><Avatar src={avatar}/></FlexWrapper>
  )
}

export default AboutMe
const FlexWrapper = styled.div`
display:flex;
flex-direction: row;
flex-wrap:no-wrap;
justify-content: space-around;
align-items:center;
`
const AboutSection = styled.div`
width:50%;`
const Avatar = styled.img`
max-width: 400px;
max-height: 400px;
border-radius:250px;
margin:5rem;
`

