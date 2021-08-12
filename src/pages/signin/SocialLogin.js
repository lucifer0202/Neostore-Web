import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    Link,
} from "@material-ui/core";
export default function SocialLogin() {
    return (
        <div className="split left">
            <Grid container spacing={3} className="centered" >
                <Grid item>
                    <Button className='btn_link' color='primary' variant='contained'>Login with google</Button>
                </Grid>
                <Grid item>
                    <Button className='btn_link' color='secondary' variant='contained'>Login with google</Button>
                </Grid>
                <Grid item>
                    <Button className='btn_link' color='primary' variant='contained'>Login with google</Button>
                </Grid>
            </Grid>
        </div>
    )
}
