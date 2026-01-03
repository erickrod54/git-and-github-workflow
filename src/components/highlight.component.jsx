import React from 'react';
import styled from 'styled-components';

/**git-and-github-workflow  - version 6.05 - SingleCardCommand
 * - Features: 
 * 
 *     --> Building 'HighlightedText'
 *   
 * Note: In order to implement the search 'filterCommands'
 * makes a new array from 'gitCommands' and then show the 
 * results from the 'value' entered by the user 
 */

const Mark = styled.mark`
  background-color: #9ae6b4; /* Light green to match your copy button and badge */
  color: #1a202c;
  border-radius: 2px;
  padding: 0 2px;
`;

const HighlightedText = ({ text = "", highlight = "" }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  // Create a regex to find all matches (case insensitive)
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <Mark key={i}>{part}</Mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

export default HighlightedText;
