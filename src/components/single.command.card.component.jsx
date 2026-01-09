import React from "react";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";
import { BoxContainer, BoxContent, CardContainer, StrongContainer, Title, FrequencyLabel, FrequencyBadge } from "../styled-components/styled.components";
import { toast } from "sonner";
import { getFrequencyLabel } from "../utils/utils";
import { HighlightedText } from "./index.components";
import styled from "styled-components";


/**git-and-github-workflow  - version 7.18 - SingleCardCommand
 * - Features: 
 * 
 *     --> Renaming to 'NewDescriptionBox' 
 *   
 * Note: Wrappping 'HighlightedText' component using
 * 'DescriptionBox' new version   
*/

const NewDescriptionBox = styled.div`
  font-family: 'Inter', sans-serif; /* Use a clean, consistent font */
  font-size: 1.1rem;                /* Standardize the size */
  line-height: 1.6;                 /* Add breathing room between lines */
  color: #4a5568;                   /* A soft dark gray for readability */
  margin-bottom: 15px;

  /* This ensures that any nested spans from HighlightedText match exactly */
  span {
    font-size: inherit;
    line-height: inherit;
  }
`;


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
                            <NewDescriptionBox>
                                <HighlightedText text={description} highlight={searchTerm} />    
                            </NewDescriptionBox>
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