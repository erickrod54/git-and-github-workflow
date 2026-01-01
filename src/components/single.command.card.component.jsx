import React from "react";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";
import { BoxContainer, BoxContent, CardContainer, DescriptionBox, FrecuencyTitle, FrecuencyValue, StrongContainer, Title } from "../styled-components/styled.components";
import { toast } from "sonner";
import { getFrequencyLabel } from "../utils/utils";
import styled from "styled-components";

/**git-and-github-workflow  - version 5.19 - SingleCardCommand
 * - Features: 
 * 
 *     --> Passing down level to the styled component & Wrapping
 *   
 * Note: In order to implement the search 'filterCommands'
 * makes a new array from 'gitCommands' and then show the 
 * results from the 'value' entered by the user 
 */

// This replaces 'FrecuencyTitle' and Value for a cleaner "Badge" look
const FrequencyBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  padding: 6px 12px;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  /* Background and text color based on the status */
  background: ${props => 
    props.level === 'Always use 🔥' ? '#fee2e2' : 
    props.level === 'Often use ⚡' ? '#fef3c7' : 
    props.level === 'Less use 📈' ? '#dcfce7' : '#f3f4f6'};
    
  color: ${props => 
    props.level === 'Always use 🔥' ? '#dc2626' : 
    props.level === 'Often use ⚡' ? '#d97706' : 
    props.level === 'Less use 📈' ? '#16a34a' : '#6b7280'};

  border: 1px solid rgba(0,0,0,0.05);
`;

const FrequencyLabel = styled.span`
  opacity: 0.7;
  font-weight: 400;
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
                            <DescriptionBox>{description}</DescriptionBox>
                                <FrequencyBadge level={label}>
                                    <FrecuencyValue> - {label}</FrecuencyValue>
                                </FrequencyBadge>
                        </BoxContent>
                    </BoxContainer>        
                )
            })}
    </CardContainer>
    )
}

export default SingleCardComponent;