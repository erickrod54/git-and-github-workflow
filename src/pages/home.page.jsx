import React from "react";
import styled from "styled-components";
import { CommandsPallete, FooterComponent, HeaderComponent } from "../components/index.components";
import { HomePageContainer } from "../styled-components/styled.components";


/**git-and-github-workflow  - version 1.06 - HomePage
 * - Features: 
 * 
 *     --> Migrating 'HomePageContainer' styles    
 * 
 * Note: this is the index components
 */


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