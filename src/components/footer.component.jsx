import React from "react";
import styled from "styled-components";
import { FooterColumn, FooterContainer, IconContainer } from "../styled-components/styled.components";
import { Github, Linkedin } from 'iconoir-react';

/**git-and-github-workflow  - version 4.05 - FooterComponent
 * - Features: 
 * 
 *     --> Adding Linkedin Icon from iconoir   
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
                    <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                        <Github height={'3.0em'} width={'3.0em'} />
                        <p>Follow me 😊</p>
                    </a>
                    <a href="https://www.linkedin.com/in/erickrodriguezcardenas/" target="_blank" rel="noopener noreferrer">
                        <Linkedin height={'3.0em'} width={'3.0em'} />
                    </a>
                    <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
                    
                    </a>
            </IconContainer>

        </FooterContainer>
    )
}

export default FooterComponent;