import styled, { createGlobalStyle } from "styled-components"

/**git-and-github-workflow  - version 4.03 - styledcomponent
 * - Features: 
 * 
 *     --> writting 'IconContainer'      
 * 
 * Note: this is the index components
*/

// Responsive breakpoints
const breakpoints = {
    phone: "480px",
    tablet: "768px",
    desktop: "1024px",
  };

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
        color: white;
        font-size: 1.5rem;
        transition: color 0.3s;

        &:hover {
            color: #fbbf24; /* Yellow */
        }
    }
`;

export const FooterColumn = styled.div`
    h3 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        color: #f4a261; /* Yellow */
    }

    p {
        font-size: 1rem;
        color: #4f6688; /* Light gray */
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    a {
        text-decoration: none;
        color: #93c5fd; /* Light blue */
        transition: color 0.3s;

        &:hover {
            color: #60a5fa; /* Darker blue */
        }
    }
`;

export const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    border: 2px solid #43628f;
    border-radius: 12px;
    color: white;
    padding: 2rem;
    text-align: center;
    color: black;

    /* Tablet */
    @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    }

    /* Phone */
    @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: left;
    }
`;

export const FrecuencyValue = styled.span`

`

export const FrecuencyTitle = styled.span`

`  

export const DescriptionBox = styled.p`

`

export const StrongContainer = styled.strong`

`

export const BoxContainer = styled.div`

    padding: 1rem;
    background-color: #fab5704c  ;
    border: 1px solid rgba(255, 255, 255, 0.222);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 0.7rem;
    transition: all ease 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2rem;
    

    &:hover {
        box-shadow: 0px 0px 20px 1px #ffbb763f;
        border: 1px solid rgba(255, 255, 255, 0.454);
    }
    `;

    export const Title = styled.div`
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    `;

    export const BoxContent = styled.div`
    strong {
        display: block;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0;
        font-size: 1.5em;
        font-weight: 300;
        letter-spacing: 0.1em;
    }

    span {
        font-size: 0.7rem;
        font-weight: 300;
    }

    span:nth-child(3) {
        font-weight: 500;
        margin-right: 0.2rem;
    }
`;

export const CardContainer = styled.div`
    color: black;
    position: relative;
    font-family: sans-serif;
    margin-top: 2rem;
    margin-bottom: 2rem;


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

export const SingleCommandContainer = styled.div`
  margin: 1rem;
`

export const CommandsPalleteContainer = styled.div`

`

export const MainTitle = styled.h2`
    background-color: white;
    color: #1f2937; /* Dark gray text */
    font-size: 2rem; /* Default for Desktop */
    font-weight: 700;
    text-align: center;
    padding: 1rem 2rem;
    margin: 1.5rem auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle border shadow */
    border-left: 5px solid #2563eb; /* Blue left border */
    max-width: 80%;
    border: 2px solid #43628f;
    
    /* Tablet (Medium screens) */
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1.75rem;
        padding: 0.8rem 1.5rem;
    }
    
    /* Phone (Small screens) */
    @media (max-width: ${breakpoints.phone}) {
        font-size: 1.5rem;
        padding: 0.7rem 1.2rem;
        max-width: 90%;
    }
    `;

export const SubTitle = styled(MainTitle)`
    background-color: whitesmoke;
    text-align: left;
    width: fit-content;
    border: none;
    border-left: 5px solid #0aee3b; /* Blue left border */
    margin-left: 7.2rem;
    margin-top: 4rem;
`

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #f3f4f6; /* Light gray background */
        color: #1f2937; /* Dark gray text */
    } 
`

export const MainContent = styled.div`
    flex-grow: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    background-color: white; /* Ensure it stands out */
    border-radius: 8px; /* Slightly rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Soft shadow */

    /* Tablet */
    @media (max-width: ${breakpoints.tablet}) {
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12); /* Slightly smaller shadow */
    }

    /* Phone */
    @media (max-width: ${breakpoints.phone}) {
        padding: 16px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* More subtle shadow */
    }
`

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f3f4f6; /* Light gray background */
    color: #1f2937; /* Dark gray text */
    padding: 0 20px; /* Default padding */

    /* Phone */
    @media (max-width: ${breakpoints.phone}) {
        padding: 0 10px;
    }
`
