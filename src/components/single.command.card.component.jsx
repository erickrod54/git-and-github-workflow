import React from "react";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";
import { BoxContainer, BoxContent, CardContainer, DescriptionBox, FrecuencyTitle, FrecuencyValue, StrongContainer, Title } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 4.08 - SingleCardCommand
 * - Features: 
 * 
 *     --> Clearing imports
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