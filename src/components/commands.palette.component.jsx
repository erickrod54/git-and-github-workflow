import React from "react";
import SingleCardComponent from "./single.command.card.component";
import styled from "styled-components";

/**git-and-github-workflow  - version 2.15 - CommandsPallete
 * - Features: 
 * 
 *     --> writting 'CommandsPalleteContainer'  
 * 
 * Note: this is the index components
 */

const CommandsPalleteContainer = styled.div`

`

const CommandsPallete = () => {

    return(
        <CommandsPalleteContainer>
            <h2>the CoomandsPallete Component</h2>
            <SingleCardComponent />
        </CommandsPalleteContainer>
    )
}

export default CommandsPallete;