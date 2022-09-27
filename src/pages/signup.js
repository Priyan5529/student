import {
    Avatar, Button, Checkbox, FormControl, FormControlLabel,
    FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography
} from '@mui/material';
import { display } from '@mui/system';
import React, { useState } from 'react';
import { db } from '../db';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [user, setUser] = useState({ Name: "", Email: "", Phonenumber: "", Gender: "", Password: "", ConfirmPassword: "" });
const move= useNavigate();
    const handleInput = (e) => {
        const { value, name } = e.target;
        setUser(() => {
            return {
                ...user,[name]: value
            }
        }
        );
    
}
    const AddData = async (e) => {
        e.preventDefault();
        var { Name, Email, Phonenumber, Gender, Password, ConfirmPassword } =user;
        if (Name === "") { alert("Name is required") }
        else if (Email === "") { alert("Email id is required") }
        else if (Phonenumber === "") { alert("Phone number is required") }
        else if (Gender === "") { alert("Gender is required") }
        else if (Password === "") { alert("Password is required") }
        else if (ConfirmPassword === "") { alert("Confirm Password is required") }
        else if (Password != ConfirmPassword === "") { alert("Password is not matched") }
        else {
            db.transaction("rw", db.student, function* () {
                var students = yield db.student.add({
                    name: Name,
                    email: Email,
                    phonenumber: Phonenumber,
                    gender: Gender,
                    password: Password,
                    confirmpassword: ConfirmPassword
                });
            });
            move('/DetailsStudents')
        }
    }
        const paperStyle = { padding: 20, width: 300, margin: "0px auto" }
        const headerStyle = { margin: 0 }
        const marginTop = { marginTop: 5 }
        return (
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='Center'>
                        <Avatar>

                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption'>Please fill this form to create an account</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth id="standard-basic" variant="standard" name='Name' label='Name' value= {user.Name} placeholder='Enter your Name' onChange={handleInput}/>
                        <TextField fullWidth id="standard-basic" variant="standard" name='Email' label='Email'value= {user.Email} placeholder='Enter Email id. Ex:abc@email.com' onChange={handleInput} />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name='Gender'value= {user.Gender} onChange={handleInput} style={{ display: 'initial' }} >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField fullWidth id="standard-basic" variant="standard"name='Phonenumber' label='Phonenumber'value= {user.Phonenumber} placeholder='Enter Phone Number'onChange={handleInput} />
                        <TextField fullWidth id="standard-basic" variant="standard" name='Password'label='Password' value= {user.Password} placeholder='Enter Password' onChange={handleInput}/>
                        <TextField fullWidth id="standard-basic" variant="standard" name='ConfirmPassword'label='ComfirmPassword'value= {user.ConfirmPassword} placeholder='Confirm Password' onChange={handleInput}/>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="Checkedb"
                                    color="primary"
                                />
                            }
                            label="I accept the terms and conditions"
                        />
                        <Button type='submit' variant='contained' color='primary' onClick={AddData}>Sign Up</Button>

                    </form>
                </Paper>
            </Grid >
        )
    }
    export default Signup;