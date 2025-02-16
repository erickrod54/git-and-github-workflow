import React from "react"
import BashCode from "./bash.code.component"
import { useGitGuideContext } from "../context"
import { SingleCommandContainer } from "../styled-components/styled.components"

/**git-and-github-workflow  - version 4.08 - SingleCommand
 * - Features: 
 * 
 *     --> Clearing 'styled' import
 * 
 * Note: this is the index components
 */

const SingleCommand = ({ command }) => {
    
    return(
        <SingleCommandContainer>
            <BashCode code={command}/>
        </SingleCommandContainer>
    )
}

export default SingleCommand;