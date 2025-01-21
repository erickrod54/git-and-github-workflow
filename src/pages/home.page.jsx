import React from "react";
import styled from "styled-components";
import { CommandsPallete, FooterComponent, HeaderComponent } from "../components/index.components";


/**git-and-github-workflow  - version 1.03 - HomePage
 * - Features: 
 * 
 *     --> Adding site strcuture    
 * 
 * Note: this is the index components
 */

const HomePageContainer = styled.div`

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