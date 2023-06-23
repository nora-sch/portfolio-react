import React from 'react'
import avatar from '../assets/img/avatar-nora.jpg'
import bgSpace from '../assets/img/background-1.jpg'
import styled from 'styled-components'

function AboutMe() {
  return (
    <FlexWrapper><AboutSection></AboutSection><Avatar src={avatar}/></FlexWrapper>
  )
}

export default AboutMe
const FlexWrapper = styled.div`

display:flex;
flex-direction: row;
flex-wrap:no-wrap;
justify-content: space-around;
align-items:center;
// height:100vh;
`
const AboutSection = styled.div`
width:50%;`
const Avatar = styled.img`
max-width: 400px;
max-height: 400px;
border-radius:250px;
margin:5rem;
`

