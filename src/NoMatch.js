import React from 'react';
import styled from 'styled-components';
import notfound from './404.png';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const NoMatch = () => (
  <Wrapper>
    <img src={notfound} alt="pic"/>
    <h2>Not Found</h2>
  </Wrapper>
)