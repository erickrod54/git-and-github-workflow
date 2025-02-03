import React from "react";
import SingleCardComponent from "./single.command.card.component";
import styled from "styled-components";
import { CommandsPalleteContainer, SubTitle } from "../styled-components/styled.components";
import { useGitGuideContext } from "../context";

/**git-and-github-workflow  - version 2.19 - CommandsPallete
 * - Features: 
 * 
 *     --> Migrating 'CommandsPalleteContainer'  
 * 
 * Note: this is the index components
 */


const CommandsPallete = () => {

    const { TitlesData } = useGitGuideContext();

    const subtitle1 = TitlesData[1].title;

    return(
        <CommandsPalleteContainer>
            <SubTitle>{subtitle1}</SubTitle>
            <SingleCardComponent />
        </CommandsPalleteContainer>
    )
}

export default CommandsPallete;