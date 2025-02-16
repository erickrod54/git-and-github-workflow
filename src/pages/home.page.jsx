import React from "react";
import { CommandsPallete, FooterComponent, HeaderComponent } from "../components/index.components";
import { GlobalStyles, HomePageContainer, MainContent } from "../styled-components/styled.components";
import { Helmet } from "react-helmet-async";

/**git-and-github-workflow  - version 4.09 - HomePage
 * - Features: 
 * 
 *     --> Clearing imports
 * 
 * Note: this is the index components
 */



const HomePage = () => {

    return(
        <>
        <GlobalStyles />
        <Helmet>
            <title>Github Workflow - By Erick Rodriguez </title>
            <meta name="this is a growing git guide" content="this is a Github Workflow Command line and git tricks " />
        </Helmet>
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