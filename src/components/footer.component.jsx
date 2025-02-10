import React from "react";
import styled from "styled-components";

/**git-and-github-workflow  - version 3.18 - FooterComponent
 * - Features: 
 * 
 *     --> writting 'FooterColumn'   
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
        color: #fbbf24; /* Yellow */
    }

    p {
        font-size: 1rem;
        color: #d1d5db; /* Light gray */
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
            <h2>the FooterComponent</h2>
        </FooterContainer>
    )
}

export default FooterComponent;