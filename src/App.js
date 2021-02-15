import React from 'react';
import './App.scss';
import { Container } from '@material-ui/core/'
import { Header } from './components/Header/Header'
import { SendTweet } from './components/SendTweet/SendTweet'

function App() {
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet />
    </Container>
  );
}

export default App;
