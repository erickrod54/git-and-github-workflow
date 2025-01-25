import React from "react";
import styled from "styled-components";
import { MainTitle } from "../styled-components/styled.components";
import { useAppContext } from "../context";

/**git-and-github-workflow  - version 1.14 - HeaderComponent
 * - Features: 
 * 
 *     --> testing context    
 * 
 * Note: this is the index components
 */



const HeaderComponent = ({title}) => {

    const  testdata  = useAppContext()
     
    console.log('this is the context test ===>', testdata)

    return(
        <MainTitle>
            {title}
        </MainTitle> 
    )
}

export default HeaderComponent;