import React, { useState } from "react";
import { CommandsPallete, FooterComponent, HeaderComponent, SearchBar } from "../components/index.components";
import { GlobalStyles, HomePageContainer, MainContent } from "../styled-components/styled.components";
import { Helmet } from "react-helmet-async";
 
/**git-and-github-workflow  - version 5.11 - HomePage
 * - Features: 
 * 
 *     --> Lifting 'searchTerm' to the root
 * 
 *     --> Passing down states to 'SearchBar' and 'CommandPallete'
 * 
 * Note: this is the index components
 */



const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState(""); //Lifted state
    
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
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <CommandsPallete
                        searchTerm={searchTerm}
                    />
                <FooterComponent />
            </MainContent>
        </HomePageContainer>
        </>
    )
}

export default HomePage;