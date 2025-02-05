import React from "react";
import styled from "styled-components";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";
import { BoxContainer, BoxContent, CardContainer, StrongContainer, Title } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 3.04 - SingleCardCommand
 * - Features: 
 * 
 *     --> Migrating 'StrongContainer' styles 
 *   
 * Note: this is the index components
 */



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
                    <StrongContainer>Description</StrongContainer>
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