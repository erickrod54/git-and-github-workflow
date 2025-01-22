import React from "react";
import styled from "styled-components";
import { CommandsPallete, FooterComponent, HeaderComponent } from "../components/index.components";


/**git-and-github-workflow  - version 1.05 - HomePage
 * - Features: 
 * 
 *     --> writting 'MainContent' styles    
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

const MainContent = styled.div`
    flex-grow: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
`


const HomePage = () => {

    return(
        <HomePageContainer>
            <MainContent>
                <HeaderComponent />
                <CommandsPallete />
                <FooterComponent />
            </MainContent>
        </HomePageContainer>
    )
}

export default HomePage;