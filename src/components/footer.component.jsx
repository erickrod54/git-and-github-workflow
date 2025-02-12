import React from "react";
import styled from "styled-components";
import { FooterColumn, FooterContainer } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 4.02 - FooterComponent
 * - Features: 
 * 
 *     --> Adding 'FooterColumn'   
 * 
 * Note: this is the index components
 */

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
        color: white;
        font-size: 1.5rem;
        transition: color 0.3s;

        &:hover {
            color: #fbbf24; /* Yellow */
        }
    }
`;

const FooterComponent = () => {

    return(
        <FooterContainer>
            <FooterColumn>
                <h3>About</h3>
                <p>Git & GitHub workflow project. Learn, share, and contribute.</p>
            </FooterColumn>

            <FooterColumn>
                <h3>Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="https://github.com/erickrod54/git-and-github-workflow.git">Docs</a></li>
                    <li><a href="https://github.com/erickrod54/git-and-github-workflow.git">Community</a></li>
                </ul>
            </FooterColumn>


        </FooterContainer>
    )
}

export default FooterComponent;