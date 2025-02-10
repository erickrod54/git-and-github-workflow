import React from "react";
import styled from "styled-components";

/**git-and-github-workflow  - version 3.17 - FooterComponent
 * - Features: 
 * 
 *     --> Refactoring 'FooterContainer' colors   
 * 
 * Note: this is the index components
 */

const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    border: 2px solid #43628f;
    border-radius: 12px;
    color: white;
    padding: 2rem;
    text-align: center;
    color: black;

    /* Tablet */
    @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    }

    /* Phone */
    @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: left;
    }
`;


const FooterComponent = () => {

    return(
        <FooterContainer>
            <h2>the FooterComponent</h2>
        </FooterContainer>
    )
}

export default FooterComponent;