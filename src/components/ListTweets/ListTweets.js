import React from 'react';
import { Grid } from '@material-ui/core';
import { Tweet } from "../Tweet/Tweet";


import './ListTweets.scss' 

export const  ListTweets = (props) => {
    
    const { allTweets, deleteTweets } = props;


    if ( !allTweets || allTweets.lenght === 0) {
        return (
            <div className='list-tweets-empty'>
                <h2>No hay tweets</h2>
            </div>
        )
    }
    
    console.log(allTweets); 
    
    return (
            <Grid container spacing={3} className='list-tweets'>
                { allTweets.map((tweet, index) => (
                    <Grid key={index} item xs={4}>
                        <Tweet 
                            tweet={tweet}
                            index={index}
                            deleteTweets={deleteTweets}
                        />
                    </Grid>
                ))}
            </Grid>
    )
}