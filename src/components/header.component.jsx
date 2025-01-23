import React from "react";
import styled from "styled-components";

/**git-and-github-workflow  - version 1.09 - HeaderComponent
 * - Features: 
 * 
 *     --> writting 'MainTitle' styles    
 * 
 * Note: this is the index components
 */

const MainTitle = styled.h2`
    background-color: white;
    color: #1f2937; /* Dark gray text */
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    padding: 1rem 2rem;
    margin: 1.5rem auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle border shadow */
    border-left: 5px solid #2563eb; /* Blue left border */
    max-width: 80%;
`;

const HeaderComponent = () => {

    return(
        <MainTitle>Welcome to the Git and GitHub Workflow guide!</MainTitle> 
    )
}

export default HeaderComponent;