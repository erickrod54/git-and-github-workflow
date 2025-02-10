import React from "react";
import styled from "styled-components";

/**git-and-github-workflow  - version 3.16 - FooterComponent
 * - Features: 
 * 
 *     --> writting 'FooterContainer' responsiveness for phone   
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