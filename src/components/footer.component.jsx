import React from "react";
import styled from "styled-components";
import { FooterColumn, FooterContainer, IconContainer } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 4.03 - FooterComponent
 * - Features: 
 * 
 *     --> Migrating 'IconContainer'   
 * 
 * Note: this is the index components
 */

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