import React from "react";
import { FooterColumn, FooterContainer, IconContainer } from "../styled-components/styled.components";
import { Github, Linkedin, X } from 'iconoir-react';

/**git-and-github-workflow  - version 4.08 - FooterComponent
 * - Features: 
 * 
 *     --> Clearing imports   
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

            <IconContainer>
                    <a href="https://github.com/erickrod54" target="_blank" rel="noopener noreferrer">
                        <Github height={'3.0em'} width={'3.0em'} />
                        <p>Follow me 😊</p>
                    </a>
                    <a href="https://www.linkedin.com/in/erickrodriguezcardenas/" target="_blank" rel="noopener noreferrer">
                        <Linkedin height={'3.0em'} width={'3.0em'} />
                    </a>
                    <a href="https://x.com/Taipei200" target="_blank" rel="noopener noreferrer">
                        <X height={'3.0em'} width={'3.0em'} />
                    </a>
            </IconContainer>

        </FooterContainer>
    )
}

export default FooterComponent;