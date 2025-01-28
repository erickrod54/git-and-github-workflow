import React, { useContext, useReducer } from "react";
import { gitCommands, TitlesData } from "./data";


/**git-and-github-workflow  - version 2.04 - HeaderComponent
 * - Features: 
 * 
 *     --> Migrating  'gitCommands' throught the context     
 * 
 * Note: this is the index components
 */



const GitGuideContext = React.createContext()

const GitGuideProvider = ({ children }) => {

return(
    /**here i pass everything throught the provider */
    <GitGuideContext.Provider value={{
        TitlesData,
        gitCommands,
    }}>
        {children}
    </GitGuideContext.Provider>
    )
} 

export const useGitGuideContext = () => {
    return useContext(GitGuideContext)
}

export { GitGuideContext, GitGuideProvider };