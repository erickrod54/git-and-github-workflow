import React from "react"
import BashCode from "./bash.code.component"
import { useGitGuideContext } from "../context"

/**git-and-github-workflow  - version 2.12 - SingleCommand
 * - Features: 
 * 
 *     --> getting drilled commands prop
 * 
 * Note: this is the index components
 */

const SingleCommand = ({ command }) => {
    
    return(
        <BashCode code={command}/>
    )
}

export default SingleCommand;