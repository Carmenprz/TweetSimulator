import React, {useState, useEffect } from 'react';
import './App.scss';
import { Container, Snackbar } from '@material-ui/core/'
import { Header } from './components/Header/Header'
import { SendTweet } from './components/SendTweet/SendTweet'
import { TWEETS_STORAGE } from './utils/constants';
import { ListTweets } from './components/ListTweets/ListTweets'
function App() {

  const [ toastProps, setToastProps ] = useState({
    open: false,
    text: null
  });

  const [ allTweets, setAllTweets ] = useState([]); 

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
  }, []);

  // console.log(allTweets);

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets}/>
      <ListTweets allTweets={allTweets}/>
      <Snackbar 
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        open={toastProps.open}
        //hacer el on close
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
