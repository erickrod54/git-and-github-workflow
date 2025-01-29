import React from "react";
import styled from "styled-components";

/**git-and-github-workflow  - version 2.07- SingleCardCommand
 * - Features: 
 * 
 *     --> writting  'BoxContainer' styles
 * 
 * Note: this is the index components
 */

export const CardContainer = styled.div`
  color: black;
  position: relative;
  font-family: sans-serif;

  &::before,
  &::after {
    content: "";
    background-color: #fab5704c;
    position: absolute;
  }

  &::before {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    top: 30%;
    right: 7%;
  }

  &::after {
    height: 3rem;
    top: 8%;
    right: 5%;
    border: 1px solid;
  }
`;

export const BoxContainer = styled.div`
  width: fit-content;
  height: 15.875em;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 0px 20px 1px #ffbb763f;
    border: 1px solid rgba(255, 255, 255, 0.454);
  }
`;

const SingleCardComponent = () => {

    return(
    <CardContainer>
        <BoxContainer>
            <span className="title">GLASS EFFECT</span>
            <div>
            <strong>SingleCardComponent</strong>
            <p>0000 000 000 0000</p>
            <span>VALID</span> <span>01/28</span>
            </div>
        </BoxContainer>
    </CardContainer>
    )
}

export default SingleCardComponent