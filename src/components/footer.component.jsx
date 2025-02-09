import React from "react";
import styled from "styled-components";

/**git-and-github-workflow  - version 3.14 - FooterComponent
 * - Features: 
 * 
 *     --> writting 'FooterContainer'    
 * 
 * Note: this is the index components
 */

const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    background-color: #43628f; /* Dark gray */
    border-radius: 12px;
    color: white;
    padding: 2rem;
    text-align: center;
`;


const FooterComponent = () => {

    return(
        <FooterContainer>
            <h2>the FooterComponent</h2>
        </FooterContainer>
    )
}

export default FooterComponent;