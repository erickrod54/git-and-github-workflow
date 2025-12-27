import React from 'react';
import styled from 'styled-components';

/**git-and-github-workflow  - version 5.02 - SearchBar
 * - Features: 
 * 
 * --> Starting css refactor for SearchBar
 */

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding: 0 20px;
`;



const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <SearchContainer>
            <div>
                <div>🔍</div>
                <div
                    type="text"
                    placeholder="Search commands..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </SearchContainer>
    );
};

export default SearchBar;
