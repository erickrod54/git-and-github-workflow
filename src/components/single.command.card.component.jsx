import React from "react";
import styled from "styled-components";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";
import { BoxContainer, BoxContent, CardContainer, DescriptionBox, FrecuencyTitle, StrongContainer, Title } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 3.09 - SingleCardCommand
 * - Features: 
 * 
 *     --> wirtting 'FrecuencyValue' 
 *   
 * Note: this is the index components
 */

const FrecuencyValue = styled.span`

`

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
                        <DescriptionBox>{description}</DescriptionBox>
                        <FrecuencyTitle>frecuency</FrecuencyTitle> <FrecuencyValue> - most use</FrecuencyValue>
                    </BoxContent>
                </BoxContainer>        
                )
            })}
    </CardContainer>
    )
}

export default SingleCardComponent