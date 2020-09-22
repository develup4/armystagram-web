import React from 'react';
import styled, { keyframes } from 'styled-components';
import ArmyLogo from '../Resources/Images/ArmyLogo.png';

const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
  width: 100%;
  text-align: center;
`;

const ArmyLogoImg = styled.img`
  src: url(${(props) => props.src});
  width: 40px;
  height: auto;
`;

export default () => (
  <Loader>
    <ArmyLogoImg src={ArmyLogo} />
  </Loader>
);
