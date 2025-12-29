import React from 'react';
import styled from 'styled-components';
import { SearchContainer, SearchWrapper, StyledInput } from '../styled-components/styled.components.index'

/**git-and-github-workflow  - version 5.08 - SearchBar
 * - Features: 
 * 
 * --> Migrating 'StyledInput' 
 */

const SearchIcon = styled.span`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  pointer-events: none;
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <SearchContainer>
            <SearchWrapper>
                <SearchIcon>🔍</SearchIcon>
                <StyledInput
                    type="text"
                    placeholder="Search commands..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </SearchWrapper>
        </SearchContainer>
    );
};

export default SearchBar;
