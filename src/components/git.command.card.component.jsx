 /**Portfolio-erick - version 8.19 - GitCommandCard -
* Features:

    --> Building GitCommandCardSS

* Notes: Migrating styled components
**/


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