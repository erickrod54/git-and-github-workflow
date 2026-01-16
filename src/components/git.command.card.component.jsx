import React from "react";
import styled from "styled-components";
import { HighlightedText } from "./index.components";
import { getFrequencyLabel, handleCopyCommand } from "../utils/utils";

/**Portfolio-erick - version 9.09 - GitCommandCard -
* Features:
*
*       --> Integrated FrequencyBadge with dynamic colors
*       --> Integrated StepBadge for Authentication Flow
**/

// --- Styled Components ---

const CommandCard = styled.div`
    background-color: #fdf6e3;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    position: relative;
    /* Highlights the card if it's part of the Auth Recovery Flow */
    border: ${props => props.isStep ? '2px solid #f24e1e' : '1px solid #eee'};
`;

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
    margin-bottom: 15px;

    &::before {
        content: '';
        width: 4px;
        height: 20px;
        background-color: #6ee7b7;
        margin-right: 10px;
        border-radius: 2px;
    }
`;

const StepBadge = styled.div`
  background-color: #f24e1e;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: auto;
`;

const MainCommandBox = styled.div`
    background-color: #1e1e1e;
    color: #d1d1d1;
    padding: 30px;
    border-radius: 4px;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 1px;
    position: relative;
`;

const CopyButtonOverlay = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #666;
    &:hover { color: #6ee7b7; }
`;

const DescriptionBox = styled.div`
    margin-top: 15px;
    margin-bottom: 20px;
    h4 {
        margin: 0 0 8px 0;
        color: #333;
        font-size: 0.9rem;
        text-transform: uppercase;
        opacity: 0.7;
    }
`;

// Integrated FrequencyBadge logic from your v6.02
const FrequencyBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  
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

const GitCommandCard = ({ item, searchTerm }) => {
    // 1. Calculate Frequency Label
    const label = getFrequencyLabel(item.command);

    // 2. Calculate Step logic for IDs 33-37
    const isAuthStep = item.id >= 33 && item.id <= 37;
    const stepNumber = item.id - 32;

    return (
        <CommandCard isStep={isAuthStep}>
            <CategoryHeader>
                {item.category}
                {isAuthStep && <StepBadge>Step {stepNumber}</StepBadge>}
            </CategoryHeader>

            <MainCommandBox>
                <CopyButtonOverlay onClick={() => handleCopyCommand(item.command)}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                </CopyButtonOverlay>
                {item.command}
            </MainCommandBox>

            <DescriptionBox>
                <h4>Description & Usage</h4>
                <HighlightedText text={item.description} highlight={searchTerm} />
            </DescriptionBox>

            {/* 3. Frequency Badge integrated at bottom */}
            <FrequencyBadge level={label}>
                {label}
            </FrequencyBadge>
        </CommandCard>
    );
};

export default GitCommandCard;
