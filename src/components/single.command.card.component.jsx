import React from "react";
import styled from "styled-components";

/**git-and-github-workflow  - version 2.05 - SingleCardCommand
 * - Features: 
 * 
 *     --> writting  'CardContainer'
 * 
 * Note: this is the index components
 */

const CardContainer = styled.div`
    color: white;
    position: relative;
    font-family: sans-serif;
`

const SingleCardComponent = () => {

    return(
    <div className="container">
        <div className="box">
            <span className="title">GLASS EFFECT</span>
            <div>
            <strong>SingleCardComponent</strong>
            <p>0000 000 000 0000</p>
            <span>VALID</span> <span>01/28</span>
            </div>
        </div>
    </div>
    )
}

export default SingleCardComponent