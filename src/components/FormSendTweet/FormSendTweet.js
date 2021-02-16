import React from 'react' 
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'
import './FormSendTweet.scss' 

export const FormSendTweet = () => {
    // const {} = props;

    return (
        <div className="form-send-tweet">
            <h2 className="form-send-tweet__title">Enviar Tweet</h2>
            <form className="form-send-tweet__form"> 
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