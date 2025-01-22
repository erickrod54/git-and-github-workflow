import React from "react";
import styled from "styled-components";
import { CommandsPallete, FooterComponent, HeaderComponent } from "../components/index.components";


/**git-and-github-workflow  - version 1.04 - HomePage
 * - Features: 
 * 
 *     --> writting 'HomePageContainer' styles    
 * 
 * Note: this is the index components
 */

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f3f4f6; /* Light gray background */
    color: #1f2937; /* Dark gray text */
`

const HomePage = () => {

    return(
        <HomePageContainer>
            <HeaderComponent />
            <CommandsPallete />
            <FooterComponent />
        </HomePageContainer>
    )
}

export default HomePage;