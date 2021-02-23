import React, { useState } from 'react' 
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'
import './FormSendTweet.scss'


export const FormSendTweet = (props) => {
    const { sendTweet } = props;
    const [formValue, setFormValue] = useState({
        name: "", 
        tweet: ""
    });

    const onFormChange = event => {
        setFormValue({
            ...formValue, 
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="form-send-tweet">
            <h2 className="form-send-tweet__title">Enviar Tweet</h2>
            <form className="form-send-tweet__form"
            onSubmit={event => sendTweet(event, formValue)}
            onChange={onFormChange}> 
                <FormControl>
                    <FormGroup>
                        <TextField 
                        className="form-send-tweet__form-name"
                        type="text" 
                        name="name" 
                        placeholder="nombre usuario" 
                        margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField 
                        className="form-send-tweet__form-textarea"
                        name="tweet" 
                        multiline
                        rows="6"
                        placeholder="Escribe tu tweet ..."
                        margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Enviar Tweet</Button>
                    </FormGroup>
                </FormControl>
            </form>
            
        </div>
    )
}