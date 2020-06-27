import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import ToDoList from './todos/ToDoList';

const AppDiv = styled.div`
  margin: 0rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 98vw;
  height: 98vh;
`;
const App = () => (
  <AppDiv>
    <ToDoList />
  </AppDiv>
);

export default hot(module)(App);
