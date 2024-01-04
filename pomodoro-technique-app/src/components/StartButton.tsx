import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledButtonProps } from '../types/types';
import useStore from '../store/store';

const StyledButton = styled.button<StyledButtonProps>`
  margin-top: 190px;
  color: var(--Beige, #fef2e7);
  text-align: center;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.6px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: ease-in-out 0.3s;
  animation-fill-mode: forwards;
  opacity: ${props => (props.show ? '1' : '0')};
  transform: translateY(${props => (props.show ? '0' : '20px')});
`;

export const StartButton = () => {
  const {
    isTimerRunning,
    isTimerPaused,
    startTimer,
    pauseTimer,
    setMode,
    mode,
    focusTime,
    breakTime,
    isFocusCompleted,
    isBreakCompleted,
    stopOvertime,
  } = useStore();

  const [buttonText, setButtonText] = useState<string>('START');
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let newText = 'START';
    if (mode === 'home') {
      newText = 'START';
    } else if (isFocusCompleted && mode === 'focus') {
      newText = `BREAK ${breakTime.minutes}:00`;
    } else if (isBreakCompleted && mode === 'break') {
      newText = `FOCUS ${focusTime.minutes}:00`;
    } else if (isTimerRunning) {
      newText = 'PAUSE';
    } else if (isTimerPaused) {
      newText = 'RESUME';
    } else {
      newText = mode === 'focus' ? 'START' : 'BREAK';
    }

    if (newText !== buttonText) {
      setShowText(false);
      setTimeout(() => {
        setButtonText(newText);
        setShowText(true);
      }, 200);
    }
  }, [mode, isFocusCompleted, isBreakCompleted, isTimerRunning, isTimerPaused, breakTime, focusTime, buttonText]);

  const handleClick = () => {
    if (isTimerRunning) {
      pauseTimer();
    } else {
      if (mode === 'home') {
        setMode('focus');
        startTimer();
      } else if (isFocusCompleted && mode === 'focus') {
        stopOvertime();
        setMode('break');
        startTimer();
      } else if (isBreakCompleted && mode === 'break') {
        setMode('focus');
        startTimer();
      } else {
        startTimer();
      }
    }
  };

  return <StyledButton show={showText} onClick={handleClick}>{buttonText}</StyledButton>;
};

export default StartButton;
