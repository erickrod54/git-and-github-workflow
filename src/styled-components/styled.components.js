import styled, { createGlobalStyle } from "styled-components"

/**git-and-github-workflow  - version 1.09 - styledcomponent
 * - Features: 
 * 
 *     --> writting 'GlobalStyles' styles    
 * 
 * Note: this is the index components
 */

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
`

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f3f4f6; /* Light gray background */
    color: #1f2937; /* Dark gray text */
`