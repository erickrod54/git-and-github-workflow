import React from "react";
import styled from "styled-components";
import { FooterColumn, FooterContainer } from "../styled-components/styled.components";

/**git-and-github-workflow  - version 4.00 - FooterComponent
 * - Features: 
 * 
 *     --> Migrating 'FooterColumn'   
 * 
 * Note: this is the index components
 */


const FooterComponent = () => {

    return(
        <FooterContainer>
            <FooterColumn>
                <h3>About</h3>
                <p>Git & GitHub workflow project. Learn, share, and contribute.</p>
            </FooterColumn>
        </FooterContainer>
    )
}

export default FooterComponent;