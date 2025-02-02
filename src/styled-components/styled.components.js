import styled, { createGlobalStyle } from "styled-components"

/**git-and-github-workflow  - version 2.19 - styledcomponent
 * - Features: 
 * 
 *     --> writting 'CommandsPalleteContainer'      
 * 
 * Note: this is the index components
*/

// Responsive breakpoints
const breakpoints = {
    phone: "480px",
    tablet: "768px",
    desktop: "1024px",
  };

export const CommandsPalleteContainer = styled.div`

`

export const MainTitle = styled.h2`
    background-color: white;
    color: #1f2937; /* Dark gray text */
    font-size: 2rem; /* Default for Desktop */
    font-weight: 700;
    text-align: center;
    padding: 1rem 2rem;
    margin: 1.5rem auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle border shadow */
    border-left: 5px solid #2563eb; /* Blue left border */
    max-width: 80%;
    
    /* Tablet (Medium screens) */
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1.75rem;
        padding: 0.8rem 1.5rem;
    }
    
    /* Phone (Small screens) */
    @media (max-width: ${breakpoints.phone}) {
        font-size: 1.5rem;
        padding: 0.7rem 1.2rem;
        max-width: 90%;
    }
    `;

export const SubTitle = styled(MainTitle)`
    background-color: whitesmoke;
    text-align: left;
    width: fit-content;
    border-left: 5px solid #0aee3b; /* Blue left border */
    margin-left: 7.2rem;
    margin-top: 4rem;
`

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #f3f4f6; /* Light gray background */
        color: #1f2937; /* Dark gray text */
    } 
`

export const MainContent = styled.div`
    flex-grow: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    background-color: white; /* Ensure it stands out */
    border-radius: 8px; /* Slightly rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Soft shadow */

    /* Tablet */
    @media (max-width: ${breakpoints.tablet}) {
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12); /* Slightly smaller shadow */
    }

    /* Phone */
    @media (max-width: ${breakpoints.phone}) {
        padding: 16px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* More subtle shadow */
    }
`

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f3f4f6; /* Light gray background */
    color: #1f2937; /* Dark gray text */
    padding: 0 20px; /* Default padding */

    /* Phone */
    @media (max-width: ${breakpoints.phone}) {
        padding: 0 10px;
    }
`
