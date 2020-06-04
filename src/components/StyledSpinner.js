import React from 'react';
import styled from 'styled-components';

const Spinner = () => (
  <StyledSpinner 
    class="bi bi-circle-half" 
    width="1em" height="1em" 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg">
      <path 
        fill-rule="evenodd" 
        d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
      />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 3s linear infinite;
  width: 50px;
  height: 50px;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;