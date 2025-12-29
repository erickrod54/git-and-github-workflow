import React from 'react';
import styled from 'styled-components';
import { SearchContainer, SearchWrapper, StyledInput, SearchIcon } from '../styled-components/styled.components.index'

/**git-and-github-workflow  - version 5.09 - SearchBar
 * - Features: 
 * 
 * --> Migrating 'SearchIcon' 
 */

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
