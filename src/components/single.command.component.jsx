import React from "react"
import BashCode from "./bash.code.component"
import { useGitGuideContext } from "../context"

/**git-and-github-workflow  - version 2.04 - SingleCommand
 * - Features: 
 * 
 *     --> Building  'SingleCommand' 
 * 
 *     --> Testing 'gitCommands'
 * 
 * Note: this is the index components
 */

const SingleCommand = () => {
    
    const { gitCommands } = useGitGuideContext()

    console.log('this is the gitCommands data ==>', gitCommands)
    return(
        <h2>this is the single command component</h2>
    )
}

export default SingleCommand;