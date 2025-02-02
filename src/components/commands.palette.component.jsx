import React from "react";
import SingleCardComponent from "./single.command.card.component";
import styled from "styled-components";
import { SubTitle } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 2.17 - CommandsPallete
 * - Features: 
 * 
 *     --> writting and importing 'SubTitle'  
 * 
 * Note: this is the index components
 */

const CommandsPalleteContainer = styled.div`

`

const CommandsPallete = () => {

    return(
        <CommandsPalleteContainer>
            <SubTitle>Coomands Pallete</SubTitle>
            <SingleCardComponent />
        </CommandsPalleteContainer>
    )
}

export default CommandsPallete;