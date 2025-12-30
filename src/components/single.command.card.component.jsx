import React from "react";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";
import { BoxContainer, BoxContent, CardContainer, DescriptionBox, FrecuencyTitle, FrecuencyValue, StrongContainer, Title } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 5.11 - SingleCardCommand
 * - Features: 
 * 
 *     --> Building 'filterCommands' array
 *   
 * Note: In order to implement the search 'filterCommands'
 * makes a new array from 'gitCommands' and then show the 
 * results from the 'value' entered by the user 
 */


const SingleCardComponent = ({ searchTerm = "" }) => {

    const { gitCommands } = useGitGuideContext();

    const filterCommands = gitCommands.filter((cmd) => {
    // 1. Ensure searchTerm exists (fallback to empty string)
    const search = (searchTerm || "").toLowerCase();

    // 2. Use the correct keys from your JSON (command, category, description)
    return (
        (cmd.command && cmd.command.toLowerCase().includes(search)) ||
        (cmd.category && cmd.category.toLowerCase().includes(search)) ||
        (cmd.description && cmd.description.toLowerCase().includes(search))
    );
});


    console.log('this is the gitCommands data in SingleCardComponent ==>', gitCommands)

    return(
    <CardContainer>
            {filterCommands.map((commands) => {
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