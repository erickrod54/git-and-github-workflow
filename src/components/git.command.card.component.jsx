import styled from "styled-components";

/**Portfolio-erick - version 9.03 - GitCommandCard -
* Features:

    --> Implementing CategoryHeader styles

* Notes: Migrating styled components
**/

const CommandCard = styled.div`
    background-color: #fdf6e3;

    border-radius:12px;
    padding:24px;
    margin-bottom:20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.5);
    position:relative;
    border: 1px solid #eee;ss
`;

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    font-family:'Courier New', Courier, monospace;
    font-size: 1.2rem;
    margin-bottom:15px;

    &::before{
        content:'';
        width:4px;
        height:20px;
        background-color:#6ee7b7;
        margin-right:10px;
        border-radius:2px;
    }
`;


const GitCommandCard = ({ item }) => {

    return (
        <CommandCard>
            <CategoryHeader>{item.category}</CategoryHeader>

            <div>
                {item.command}
            </div>

            <div>
                <h4> Description & Usage</h4>
                <p>{item.description}</p>
            </div>
        </CommandCard>
    )
}

export default GitCommandCard;