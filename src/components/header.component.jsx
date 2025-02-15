import React from "react";
import { MainTitle } from "../styled-components/styled.components";
import { useGitGuideContext } from "../context";

/**git-and-github-workflow  - version 4.08 - HeaderComponent
 * - Features: 
 * 
 *     --> Clearing imports    
 * 
 * Note: this is the index components
 */



const HeaderComponent = ({title}) => {

    const  { TitlesData }  = useGitGuideContext()

    const mainTitle = TitlesData[0].title
     
    console.log('this is the context TitlesData ===>', TitlesData)

    return(
        <MainTitle>
            {mainTitle}
        </MainTitle> 
    )
}

export default HeaderComponent;