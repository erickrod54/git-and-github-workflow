import React from "react"
import BashCode from "./bash.code.component"
import { useGitGuideContext } from "../context"

/**git-and-github-workflow  - version 2.10 - SingleCommand
 * - Features: 
 * 
 *     --> Adding 'git status' first command test
 * 
 * Note: this is the index components
 */

const SingleCommand = () => {
    
    const { gitCommands } = useGitGuideContext();

    const gitstatus = gitCommands[0].command;
    
    return(
        <BashCode code={gitstatus}/>
    )
}

export default SingleCommand;