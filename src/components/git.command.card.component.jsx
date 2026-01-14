import styled from "styled-components";

/**Portfolio-erick - version 9.00 - GitCommandCard -
* Features:

    --> Implementing CommandCard styles

* Notes: Migrating styled components
**/

const CommandCard = styled.div`
    background-color: #fdf6e3;
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