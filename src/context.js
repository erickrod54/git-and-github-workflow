import React, { useContext, useReducer } from "react";
import { TitlesData } from "./data";


/**git-and-github-workflow  - version 1.16 - HeaderComponent
 * - Features: 
 * 
 *     --> Refactoring context     
 * 
 * Note: this is the index components
 */



const GitGuideContext = React.createContext()

const GitGuideProvider = ({ children }) => {

return(
    /**here i pass everything throught the provider */
    <GitGuideContext.Provider value={{
        TitlesData,
    }}>
        {children}
    </GitGuideContext.Provider>
    )
} 

export const useGitGuideContext = () => {
    return useContext(GitGuideContext)
}

export { GitGuideContext, GitGuideProvider };