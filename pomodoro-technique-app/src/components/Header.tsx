import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0.5; }
`;

interface StyledTextProps {
  show: boolean;
}

const StyledSpan = styled.span<StyledTextProps>`
  color: var(--Beige, #fef2e7);
  text-align: center;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  animation: ${props => props.show ? fadeIn : fadeOut} 0.3s ease-in-out;
  animation-fill-mode: forwards;
`

const StyledH1 = styled.h1<StyledTextProps>`
  color: var(--Beige, #fef2e7);
  text-align: center;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.66px;
  text-transform: uppercase;
  animation: ${props => props.show ? fadeIn : fadeOut} 0.3s ease-in-out;
  animation-fill-mode: forwards;
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  gap: 4px;
`

export const Header = () => {
  
    const [headerText, setHeaderText] = useState('🍅 ');
    const [spanText, setSpanText] = useState('– POMODORO TECHNIQUE APP –');
    const [showText, setShowText] = useState(true);
  
    return (
      <StyledHeader>
        <StyledSpan show={showText}>{spanText}</StyledSpan>
        <StyledH1 show={showText}>{headerText}</StyledH1>
      </StyledHeader>
    );
  };
  
  export default Header;