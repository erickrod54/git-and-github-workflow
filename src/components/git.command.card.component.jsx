import React from "react";
import styled from "styled-components";
import { HighlightedText } from "./index.components";
import { handleCopyCommand } from "../utils/utils";

/**Portfolio-erick - version 9.08 - GitCommandCard -
* Features:

    --> Fixing Typos 

* Notes: Migrating styled components
**/

const CommandCard = styled.div`
    background-color: #fdf6e3;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3); /* Balanced shadow */
    position: relative;
    border: 1px solid #eee;
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
        background-color: #6ee7b7; /* Your green accent */
        margin-right: 10px;
        border-radius: 2px;
    }
`;

const MainCommandBox = styled.div`
    background-color: #1e1e1e; /* Fixed typo from #lelele */
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
    h4 {
        margin: 0 0 8px 0;
        color: #333;
        font-size: 0.9rem;
        text-transform: uppercase;
        opacity: 0.7; /* Fixed typo from opaciy */
    }
`;

const GitCommandCard = ({ item, searchTerm }) => {
    return (
        <CommandCard>
            <CategoryHeader>{item.category}</CategoryHeader>

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
                {/* Keep your search highlighting active! */}
                <HighlightedText text={item.description} highlight={searchTerm} />
            </DescriptionBox>
        </CommandCard>
    );
};

export default GitCommandCard;
