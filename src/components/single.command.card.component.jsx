import React from "react";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";
import { BoxContainer, BoxContent, CardContainer, DescriptionBox, StrongContainer, Title, FrequencyLabel, FrequencyBadge } from "../styled-components/styled.components";
import { toast } from "sonner";
import { getFrequencyLabel } from "../utils/utils";
import styled from "styled-components";

/**git-and-github-workflow  - version 6.03 - SingleCardCommand
 * - Features: 
 * 
 *     --> Migrating 'FrequencyLabel'
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
            {filterCommands.length === 0 ?
                toast.error('no match result 🥹, try again!')
                :
                filterCommands.map((commands) => {
                    const { category, description, command, id } = commands;
                    
                    const label = getFrequencyLabel(command);

                    return(
                    <BoxContainer key={id}>
                        <Title>{category}</Title>
                        <BoxContent>
                        <SingleCommand command={command}/>    
                        <StrongContainer>Description</StrongContainer>
                            <DescriptionBox>{description}</DescriptionBox>
                                <FrequencyBadge level={label}>
                                    <FrequencyLabel>{label}</FrequencyLabel>
                                </FrequencyBadge>
                        </BoxContent>
                    </BoxContainer>        
                )
            })}
    </CardContainer>
    )
}

export default SingleCardComponent;