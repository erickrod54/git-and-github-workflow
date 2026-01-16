  import React from "react";
import SingleCardComponent from "./single.command.card.component";
import { CommandsPalleteContainer, SubTitle } from "../styled-components/styled.components";
import { useGitGuideContext } from "../context";

/**Portfolio-erick - version 9.10 - CommandsPallete
 * - Features: 
 * 
 * --> Dividing Re-authentication Flow with SubTitle
 */

const CommandsPallete = ({ searchTerm }) => {
    const { gitCommands, TitlesData } = useGitGuideContext();

    // 1. Separate the commands based on IDs 33-37
    const standardCommands = gitCommands.filter(cmd => cmd.id < 33 || cmd.id > 37);
    const authRecoveryCommands = gitCommands.filter(cmd => cmd.id >= 33 && cmd.id <= 37);

    const mainTitle = TitlesData[1].title; // "Commands Pallete"

    return (
        <CommandsPalleteContainer>
            {/* --- Section 1: Standard Commands --- */}
            <SubTitle>{mainTitle}</SubTitle>
            <SingleCardComponent 
                searchTerm={searchTerm} 
                commandsData={standardCommands} 
            />

            {/* --- Section 2: Re-authentication Flow --- */}
            {/* Only show this title if there are recovery commands matching the search */}
            {authRecoveryCommands.length > 0 && (
                <>
                    <SubTitle style={{ marginTop: '40px', color: '#f24e1e' }}>
                        Re-authentication Recovery Flow
                    </SubTitle>
                    <SingleCardComponent 
                        searchTerm={searchTerm} 
                        commandsData={authRecoveryCommands} 
                    />
                </>
            )}
        </CommandsPalleteContainer>
    );
}

export default CommandsPallete;
