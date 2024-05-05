import React from 'react'
import { Styled, styled, withTheme } from 'styled-components'
import img from '../../betel-leaf.jpeg'
const StyledButton = styled.button`
padding:12px;
border:2px solid red;
background-color:${(props)=> props.p == "outline" ? "white": "red"};
color:${(props)=> props.p == "outline" ? "red" : "white"};

box-shadow: 0 4px 3px gray;
margin:auto auto;
&:active {
    background-color: #2980b9;
  }
transition: 0.5s all ease-in-out;
`
const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  color: #666;
`;


function About() {
  return (
    <div>
      <StyledButton  >Styled button</StyledButton>
      <CardContainer>
      <CardImage src={img} alt={"photo"} />
      <CardContent>
        <CardTitle>Rohan</CardTitle>
        <CardDescription>is a good programmer </CardDescription>
      </CardContent>
    </CardContainer>
    <CardContainer>
      <CardImage src={img} alt={"photo"} />
      <CardContent>
        <CardTitle>Rohan</CardTitle>
        <CardDescription>is a good programmer </CardDescription>
      </CardContent>
    </CardContainer>
    </div>
  )
}

export default About
