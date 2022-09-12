import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle }from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  background-color: #191716;
}
`;

const Jumbotron = styled.div`
height: 10vh;
position: absolute;
top: 0;
left: 0;
width: 100%;
background-color: #191716;
color: #f7f7f7;
z-index: 0;
`;

const Container = styled.div`
height: 90vh;
width: 100%;
position: absolute;
top: 10vh;
left: 0;
background-color: #e6af2e;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
filter: drop-shadow(0 -2px 5px #fcfcfb);
color: #000d0c;
z-index: 1;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Jumbotron>
        <p>placeholder</p>
      </Jumbotron>
      <Container>
        <p>placeholder</p>
      </Container>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
