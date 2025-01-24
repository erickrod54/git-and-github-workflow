import React from "react";
import styled from "styled-components";
import { MainTitle } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 1.11 - HeaderComponent
 * - Features: 
 * 
 *     --> Converting 'HeaderComponent' to drill props    
 * 
 * Note: this is the index components
 */



const HeaderComponent = ({title}) => {

    return(
        <MainTitle>
            {title}
        </MainTitle> 
    )
}

export default HeaderComponent;