import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useStore from '../store/store';
import { StyledButtonProps } from '../types/types';

const StyledButton = styled.button<StyledButtonProps>`
  margin-top: 25px;
  color: var(--Beige, #fef2e7);
  text-align: center;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.6px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  ease-in-out;
  animation-fill-mode: forwards;
`;

export const StopButton = () => {
  const {
    isTimerRunning,
    isTimerPaused,
    mode,
    setMode,
    isFocusCompleted,
    isBreakCompleted,
    returnToHomeScreen,
    cancelActiveMode,
    stopOvertime
  } = useStore();

  const [buttonText, setButtonText] = useState('TAKE A BREAK');
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let newText = 'TAKE A BREAK';
    if (mode === 'home') {
      newText = 'TAKE A BREAK';
    } else if (isTimerRunning || isTimerPaused) {
      newText = 'CANCEL';
    } else if ((isFocusCompleted || isBreakCompleted) && !isTimerRunning) {
      newText = 'DONE';
    } else {
      newText = mode === 'focus' ? 'TAKE A BREAK' : 'FOCUS';
    }
  
    if (newText !== buttonText) {
      setShowText(false);
      setTimeout(() => {
        setButtonText(newText);
        setShowText(true);
      }, 200);
    }
  }, [mode, isTimerRunning, isTimerPaused, isFocusCompleted, isBreakCompleted, buttonText]);

  const handleClick = () => {
    if (isTimerRunning || isTimerPaused) {
      cancelActiveMode();
    } else if (isFocusCompleted && (mode === 'focus' || mode === 'home')) {
      stopOvertime();
      returnToHomeScreen('break'); 
    } else if (isBreakCompleted && mode === 'break') {
      returnToHomeScreen('focus');
    } else {
      setMode(mode === 'focus' || mode === 'home' ? 'break' : 'focus');
    }
  };

  return <StyledButton show={showText} onClick={handleClick}>{buttonText}</StyledButton>;
};

export default StopButton;
