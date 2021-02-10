import React from 'react';
import styled from 'styled-components';

import Header from '../components/layout/Header';

const Home = () => (
  <SC>
    <Header />
  </SC>
);

const SC = styled.div`
  margin: auto;

  @media(min-width: 768px) {
  }
`;

export default Home;
