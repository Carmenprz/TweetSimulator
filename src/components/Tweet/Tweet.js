import React from 'react';
import { Card, CardContent } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

import './Tweet.scss';

export const Tweet = (props) => {
    const { 
        tweet: { name, tweet, time}, 
        index, 
        deleteTweets
    } = props;

    // console.log(props)
    return (
        <Card className='tweet'>
            <CardContent>
                <div className='tweet__header'>
                    <h5>{name}</h5>
                    <DeleteIcon onClick={() => deleteTweets(index)} />
                </div>
                <p>{tweet.name}</p>
                <div className='tweet__data'>
                    {moment(time).format('DD/MM/YY HH:mm')}
                </div>
            </CardContent>
        </Card>
    )
}
