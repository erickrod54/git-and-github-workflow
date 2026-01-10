import React from "react";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";
import { BoxContainer, BoxContent, CardContainer, StrongContainer, Title, FrequencyLabel, NewDescriptionBox, FrequencyBadge } from "../styled-components/styled.components";
import { toast } from "sonner";
import { getFrequencyLabel } from "../utils/utils";
import { HighlightedText } from "./index.components";
import styled from "styled-components";

/**git-and-github-workflow  - version 8.00 - SingleCardCommand
 * - Features: 
 * 
 *     --> Adding 'CopyButton' 
 *   
 * Note: Wrappping 'HighlightedText' component using
 * 'DescriptionBox' new version   
*/

export const CopyButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  &:hover {
    background: #f7fafc;
    border-color: #cbd5e0;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  &:active {
    transform: translateY(0);
    background: #edf2f7;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #718096;
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