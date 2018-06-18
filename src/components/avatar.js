import React from 'react';
import styled, { keyframes } from 'styled-components';

const AvatarMarkup = props => (
  <div className={props.className}>
    <div className="bg" />
    <div className="square-img">
      <img src={props.src} />
    </div>
  </div>
);

const rounded = `border-radius: 50%`;

export const Avatar = styled(AvatarMarkup).attrs({
  width: props => props.width
})`
  width: ${props => props.width};
  height: ${props => props.width};
  .square-img {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
    ${rounded};

    img {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      object-position: center;
      object-fit: cover;
    }
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const CoolAvatar = Avatar.extend.attrs({
  padding: props => props.border || `1rem`
})`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.padding};
  .bg {
    ${rounded}; 
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      124deg,
      #ff4d4f,
      #ff7a45,
      #ffc53d,
      #73d13d,
      #36cfc9,
      #597ef7,
      #9254de,
      #f759ab
    );
    animation: ${rotate360} 1.5s ease-out infinite;
  }
`;
