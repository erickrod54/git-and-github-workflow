import React from 'react';
import styled from 'styled-components';
import { SearchContainer } from '../styled-components/styled.components.index'

/**git-and-github-workflow  - version 5.06 - SearchBar
 * - Features: 
 * 
 * --> Migrating 'SearchContainer' 
 */

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 18px 20px 18px 60px;
  font-size: 1.5rem;
  border-radius: 15px;
  border: 2px solid #f3ebd8; /* Subtle beige border */
  background-color: #fdf6e3; /* Cream background matching your cards */
  color: #2d2d2d;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    border-color: #9ae6b4; /* Light green focus to match your copy button */
    box-shadow: 0 0 0 4px rgba(154, 230, 180, 0.2);
  }
`;

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
