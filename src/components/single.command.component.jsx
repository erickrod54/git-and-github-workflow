import React from "react"
import BashCode from "./bash.code.component"
import { useGitGuideContext } from "../context"
import styled from "styled-components"
import { SingleCommandContainer } from "../styled-components/styled.components"

/**git-and-github-workflow  - version 2.20 - SingleCommand
 * - Features: 
 * 
 *     --> Migrating 'SingleCommandContainer'
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