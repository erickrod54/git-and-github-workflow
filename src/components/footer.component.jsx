import React from "react";
import styled from "styled-components";

/**git-and-github-workflow  - version 3.19 - FooterComponent
 * - Features: 
 * 
 *     --> Refactoring 'FooterColumn'   
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