import React, { useContext, useReducer } from "react";
import { TitlesData } from "./data";


/**git-and-github-workflow  - version 1.14 - HeaderComponent
 * - Features: 
 * 
 *     --> Migrating 'TitlesData' throught context    
 * 
 * Note: this is the index components
 */



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    
    /**here is a single piece of data and i'll  
     * get it using the provider on a destination 
     * component*/
    const singleData = 'hello'

return(
    /**here i pass everything throught the provider,
     * i spread/copy the state - initalState - and
     * 'handleShow' will keep the action dispatch */
    <AppContext.Provider value={{
        singleData
    }}>
        {children}
    </AppContext.Provider>
    )
} 

export const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider };