import React from "react"
import { Avatar, Button, Checkbox, FormControlLabel, 
    Grid, Link, Paper, TextField, Typography } from '@mui/material'


const Signin = ({handleChange}) => {
    const paperstyle = { padding: 20, height: '73vh', width: 300, margin: "0px auto" }
    const avatarStyle = { backgroundcolor: '#239aa2' }
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid>
            <Paper  style={paperstyle}>
                <Grid align='Center'>
                    <Avatar style={avatarStyle}>S</Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField id="standard-basic" variant="standard" label='UserName' placeholder='Enter UserName' fullWidth required />
                <TextField id="standard-basic" variant="standard" label='Password' placeholder='Enter Password' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="Checkedb"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button fullWidth type="button" color="primary" variant="contained" style={btnstyle}>
                    Sign in
                </Button>
                <Typography>
                    <Link href="#" >
                        Forgot Password
                    </Link>
                </Typography>
                <Typography>Do you have an account ?
                    <Link href="/signup" onClick={()=>handleChange("event",1)} >
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Signin;
