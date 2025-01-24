import React from "react";
import styled from "styled-components";
import { CommandsPallete, FooterComponent, HeaderComponent } from "../components/index.components";
import { GlobalStyles, HomePageContainer, MainContent } from "../styled-components/styled.components";


/**git-and-github-workflow  - version 1.11 - HomePage
 * - Features: 
 * 
 *     --> drilling props to 'HeaderComponent'     
 * 
 * Note: this is the index components
 */



const HomePage = () => {

    return(
        <>
        <GlobalStyles />
        <HomePageContainer>
            <MainContent>
                <HeaderComponent title={'Welcome to the Git and GitHub Workflow guide!'}/>
                <CommandsPallete />
                <FooterComponent />
            </MainContent>
        </HomePageContainer>
        </>
    )
}

export default HomePage;