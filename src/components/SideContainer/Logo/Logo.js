import React from 'react';
import styled from 'styled-components';

import LogoImage from '../../../assets/images/Logo.svg';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 20px;

  p {
    font-size: 24px;
    font-weight: 700;
    /* letter-spacing: -0.015em; */

    background: linear-gradient(180deg, #623cdb 0%, #4e21df 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={LogoImage} alt='' />
      <p>aTrack</p>
    </LogoWrapper>
  );
};

export default Logo;
