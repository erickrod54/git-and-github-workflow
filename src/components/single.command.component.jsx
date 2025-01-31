import React from "react"
import BashCode from "./bash.code.component"
import { useGitGuideContext } from "../context"
import styled from "styled-components"

/**git-and-github-workflow  - version 2.12 - SingleCommand
 * - Features: 
 * 
 *     --> getting drilled commands prop
 * 
 * Note: this is the index components
 */

const SingleCommandContainer = styled.div`
    margin: 1rem;
`

const SingleCommand = ({ command }) => {
    
    return(
        <SingleCommandContainer>
            <BashCode code={command}/>
        </SingleCommandContainer>
    )
}

export default SingleCommand;