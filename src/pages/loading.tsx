import React from 'react';
import styled from 'styled-components';

const LoadingPage = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
        <div className="circle">
          <div className="dot" />
          <div className="outline" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  background-color: #f5f5f5; /* Optional: Add a background color */

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    --animation: 2s ease-in-out infinite;
  }

  .loader .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 20px;
    height: 20px;
    border: solid 2px transparent;
    border-radius: 50%;
    margin: 0 10px;
    background-color: transparent;
    animation: circle-keys var(--animation);
  }

  .loader .circle .dot {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    animation: dot-keys var(--animation);
  }

  .loader .circle .outline {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: outline-keys var(--animation);
  }

  .circle:nth-child(1) {
    --color: #4285f4; /* Blue */
    border-color: var(--color);
  }

  .circle:nth-child(1) .dot {
    background-color: var(--color);
  }

  .circle:nth-child(2) {
    --color: #ea4335; /* Red */
    border-color: var(--color);
    animation-delay: 0.3s;
  }

  .circle:nth-child(2) .dot {
    background-color: var(--color);
    animation-delay: 0.3s;
  }

  .circle:nth-child(3) {
    --color: #fbbc05; /* Yellow */
    border-color: var(--color);
    animation-delay: 0.6s;
  }

  .circle:nth-child(3) .dot {
    background-color: var(--color);
    animation-delay: 0.6s;
  }

  .circle:nth-child(4) {
    --color: #34a853; /* Green */
    border-color: var(--color);
    animation-delay: 0.9s;
  }

  .circle:nth-child(4) .dot {
    background-color: var(--color);
    animation-delay: 0.9s;
  }

  .circle:nth-child(5) {
    --color: #4285f4; /* Blue (repeat for continuity) */
    border-color: var(--color);
    animation-delay: 1.2s;
  }

  .circle:nth-child(5) .dot {
    background-color: var(--color);
    animation-delay: 1.2s;
  }

  .circle:nth-child(1) .outline {
    animation-delay: 0.9s;
  }

  .circle:nth-child(2) .outline {
    animation-delay: 1.2s;
  }

  .circle:nth-child(3) .outline {
    animation-delay: 1.5s;
  }

  .circle:nth-child(4) .outline {
    animation-delay: 1.8s;
  }

  .circle:nth-child(5) .outline {
    animation-delay: 2.1s;
  }

  @keyframes circle-keys {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes dot-keys {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes outline-keys {
    0% {
      transform: scale(0);
      outline: solid 20px var(--color);
      outline-offset: 0;
      opacity: 1;
    }

    100% {
      transform: scale(1);
      outline: solid 0 transparent;
      outline-offset: 20px;
      opacity: 0;
    }
  }
`;

export default LoadingPage;