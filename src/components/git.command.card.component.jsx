import styled from "styled-components";

/**Portfolio-erick - version 8.20 - GitCommandCard -
* Features:

    --> Building CommandCard styles

* Notes: Migrating styled components
**/

const CommandCard = styled.div`
    background-color: #fdf6e3;
`


const GitCommandCard = ({ item }) => {

    return (
        <section>
            <h2>{item.category}</h2>

            <div>
                {item.command}
            </div>

            <div>
                <h4> Description & Usage</h4>
                <p>{item.description}</p>
            </div>
        </section>
    )
}

export default GitCommandCard;