import React from "react";
import styled from "styled-components";
import { FooterContainer } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 3.20 - FooterComponent
 * - Features: 
 * 
 *     --> Migrating 'FooterContainer'   
 * 
 * Note: this is the index components
 */


const FooterColumn = styled.div`
    h3 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        color: #f4a261; /* Yellow */
    }

    p {
        font-size: 1rem;
        color: #4f6688; /* Light gray */
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    a {
        text-decoration: none;
        color: #93c5fd; /* Light blue */
        transition: color 0.3s;

        &:hover {
            color: #60a5fa; /* Darker blue */
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
        </FooterContainer>
    )
}

export default FooterComponent;