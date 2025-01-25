import React from "react";
import styled from "styled-components";
import { MainTitle } from "../styled-components/styled.components";
import { useAppContext } from "../context";

/**git-and-github-workflow  - version 1.15 - HeaderComponent
 * - Features: 
 * 
 *     --> Destructuring 'mainTitle'    
 * 
 * Note: this is the index components
 */



const HeaderComponent = ({title}) => {

    const  { testdata, TitlesData }  = useAppContext()

    const mainTitle = TitlesData[0].title
     
    console.log('this is the context TitlesData ===>', TitlesData)

    return(
        <MainTitle>
            {mainTitle}
        </MainTitle> 
    )
}

export default HeaderComponent;