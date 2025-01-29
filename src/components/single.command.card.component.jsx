import React from "react";
import styled from "styled-components";

/**git-and-github-workflow  - version 2.06 - SingleCardCommand
 * - Features: 
 * 
 *     --> writting  'CardContainer' before and after effetcs
 * 
 * Note: this is the index components
 */

const CardContainer = styled.div`
    color: black;
    position: relative;
    font-family: sans-serif;

    &::before,
    &::after {
        content: "";
        background-color: #fab5704c;
        position: absolute;
        width: 100%;  /* Adjust width if needed */
        height: 100%; /* Adjust height if needed */
        top: 0;
        left: 0;
        z-index: -1; /* Ensures it stays behind the content */
    }

    &::after {
        content: "";
        position: absolute;
        height: 3rem;
        top: 8%;
        right: 5%;
        border: 1px solid;
    }
`

const SingleCardComponent = () => {

    return(
    <CardContainer>
        <div className="box">
            <span className="title">GLASS EFFECT</span>
            <div>
            <strong>SingleCardComponent</strong>
            <p>0000 000 000 0000</p>
            <span>VALID</span> <span>01/28</span>
            </div>
        </div>
    </CardContainer>
    )
}

export default SingleCardComponent