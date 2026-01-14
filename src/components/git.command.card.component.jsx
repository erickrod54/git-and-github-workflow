import styled from "styled-components";

/**Portfolio-erick - version 9.01 - GitCommandCard -
* Features:

    --> Completing CommandCard styles

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
`


const GitCommandCard = ({ item }) => {

    return (
        <CommandCard>
            <h2>{item.category}</h2>

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