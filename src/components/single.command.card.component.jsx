import React from "react";
import SingleCommand from "./single.command.component";
import { useGitGuideContext } from "../context";
import { BoxContainer, BoxContent,
         CardContainer,
         StrongContainer,
         Title,
         CopyButton,
         FrequencyLabel, NewDescriptionBox, FrequencyBadge } from "../styled-components/styled.components";
import { toast } from "sonner";
import { getFrequencyLabel, handleCopyCommand } from "../utils/utils";
import { GitCommandCard, HighlightedText } from "./index.components";

/**git-and-github-workflow  - version 9.10 SingleCardCommand
 * - Features:
 * 
 *     --> Drilling from parent specific commands 
 *         ( Commands splitted one level up )
 *   
 * Note: 'SingleCardCommand' is a new mastercard   
*/


const SingleCardComponent = ({ searchTerm = "", commandsData = [] }) => {
    const { gitCommands } = useGitGuideContext();

 // Use the passed commandsData instead of the whole context list
    const filterCommands = commandsData.filter((cmd) => {
        const search = (searchTerm || "").toLowerCase();
        return (
            (cmd.command && cmd.command.toLowerCase().includes(search)) ||
            (cmd.category && cmd.category.toLowerCase().includes(search)) ||
            (cmd.description && cmd.description.toLowerCase().includes(search))
        );
    });

    if (filterCommands.length === 0 && searchTerm !== "") {
        toast.error('no match result 🥹, try again!');
    }

    return (
        <CardContainer>
            {filterCommands.map((commands) => (
                <GitCommandCard 
                    key={commands.id} 
                    item={commands} 
                    searchTerm={searchTerm} 
                />
            ))}
        </CardContainer>
    );
}

export default SingleCardComponent;
