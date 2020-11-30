import React from 'react';
import styled from 'styled-components';
import notfound from './images/404.png';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const NoMatch = () => (
  <Wrapper>
    <div className="centering">
      <img src={notfound} alt="pic"/>
      <h2>Not Found</h2>
    </div>
  </Wrapper>
)