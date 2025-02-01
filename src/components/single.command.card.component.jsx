import React from "react";
import styled from "styled-components";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";

/**git-and-github-workflow  - version 2.13- SingleCardCommand
 * - Features: 
 * 
 *     --> Adding  white space to 'CardContainer' 
 *   
 * Note: this is the index components
 */

export const CardContainer = styled.div`
  color: black;
  position: relative;
  font-family: sans-serif;
  margin-top: 2rem;
  

  &::before,
  &::after {
    content: "";
    background-color: #fab5704c;
    position: absolute;
  }

  &::before {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    top: 30%;
    right: 7%;
  }

  &::after {
    height: 3rem;
    top: 8%;
    right: 5%;
    border: 1px solid;
  }
`;

export const BoxContainer = styled.div`

  padding: 1rem;
  background-color: #fab5704c  ;
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  

  &:hover {
    box-shadow: 0px 0px 20px 1px #ffbb763f;
    border: 1px solid rgba(255, 255, 255, 0.454);
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`;

export const BoxContent = styled.div`
  strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 1.5em;
    font-weight: 300;
    letter-spacing: 0.1em;
  }

  span {
    font-size: 0.7rem;
    font-weight: 300;
  }

  span:nth-child(3) {
    font-weight: 500;
    margin-right: 0.2rem;
  }
`;

const SingleCardComponent = () => {

    const { gitCommands } = useGitGuideContext();

    console.log('this is the gitCommands data in SingleCardComponent ==>', gitCommands)

    return(
    <CardContainer>
            {gitCommands.map((commands) => {
                const { category, description, command, id } = commands;
                
                return(
                <BoxContainer key={id}>
                    <Title>{category}</Title>
                    <BoxContent>
                    <SingleCommand command={command}/>    
                    <strong>Description</strong>
                    <p>{description}</p>
                    <span>frecuency</span> <span> - most use</span>
                    </BoxContent>
                </BoxContainer>        
                )
            })}
    </CardContainer>
    )
}

export default SingleCardComponent