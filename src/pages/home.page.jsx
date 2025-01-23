import React from "react";
import styled from "styled-components";
import { CommandsPallete, FooterComponent, HeaderComponent } from "../components/index.components";
import { HomePageContainer, MainContent } from "../styled-components/styled.components";


/**git-and-github-workflow  - version 1.07 - HomePage
 * - Features: 
 * 
 *     --> Migrating 'MainContent' styles    
 * 
 * Note: this is the index components
 */



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