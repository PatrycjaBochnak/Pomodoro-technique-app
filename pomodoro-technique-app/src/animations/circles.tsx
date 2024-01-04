import { keyframes } from 'styled-components';

const translateUp = 'translate(0, 0)';
const translateRightUp = 'translate(25px, 15px)';
const translateRight = 'translate(50px, 0)';
const translateRightDown = 'translate(25px, -15px)';
const translateLeftDown = 'translate(-25px, -15px)';
const translateLeft = 'translate(-50px, 0)';
const translateLeftUp = 'translate(-25px, 15px)';

// Orbit Animation 1
export const orbitAnimation1 = keyframes`
  0% { transform: ${translateUp}; }
  25% { transform: ${translateRightUp}; }
  50% { transform: ${translateRight}; }
  75% { transform: ${translateRightDown}; }
  100% { transform: ${translateUp}; }
`;

// Orbit Animation 2
export const orbitAnimation2 = keyframes`
  0% { transform: ${translateUp}; }
  25% { transform: ${translateLeftUp}; }
  50% { transform: ${translateLeft}; }
  75% { transform: ${translateLeftDown}; }
  100% { transform: ${translateUp}; }
`;

// Orbit Animation 3
export const orbitAnimation3 = keyframes`
  0% { transform: ${translateUp}; }
  25% { transform: ${translateRightUp}; }
  50% { transform: ${translateRight}; }
  75% { transform: ${translateRightDown}; }
  100% { transform: ${translateUp}; }
`;

// Orbit Animation 4
export const orbitAnimation4 = keyframes`
  0% { transform: ${translateUp}; }
  25% { transform: ${translateLeft}; }
  50% { transform: ${translateLeftDown}; }
  75% { transform: ${translateLeftUp}; }
  100% { transform: ${translateUp}; }
`;

// Orbit Animation 5
export const orbitAnimation5 = keyframes`
  0% { transform: ${translateUp}; }
  25% { transform: ${translateRightDown}; }
  50% { transform: ${translateLeftDown}; }
  75% { transform: ${translateLeftUp}; }
  100% { transform: ${translateUp}; }
`;
