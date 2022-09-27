import React from "react";
import { Paper } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Signup from "../pages/signup";
import Signin from "../pages/Signin";

const Signinoutcontainer = () => {
    const [value, setValue] = React.useState(0);
    const paperstyle = { width: 340, margin: "90px auto" }
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box >
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Paper elevation={20} style={paperstyle}>
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" >
                <Tab label="Signin" style={{minWidth:"50%"}}/>
                <Tab label="SignUp" style={{minWidth:"50%"}}/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <Signin handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup />
            </TabPanel>

        </Paper>
    )
}

export default Signinoutcontainer;