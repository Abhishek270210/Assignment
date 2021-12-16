import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TextField, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import useStyles from './FormStyle';


function Form() {
    const [Data, updateData] = useState({ name: '', city: '', dob: '' });
    const navigate = useNavigate();
    const classes = useStyles();


    const handlesubmit = async (e) => {
        e.preventDefault();
        if (/^[a-zA-Z]+$/.test(Data.name) === false) {
            alert("This name is not accepted");
        }
        else if (/^[a-zA-Z]+$/.test(Data.city) === false) {
            alert("This city is not accepted");
        }
        else {
            const { data } = await axios.post('https://assignmentxmnation.herokuapp.com/data', Data);
            //    console.log(data);
            alert(data.message);
            updateData({ name: '', city: '', dob: '' });
        }
    }

    const handleClick = () => {
        navigate('/datapage');
    }

    return (
        <div>
            <form action="post" onSubmit={handlesubmit}>
                <TextField className={classes.standardStyle} type="text" label="Name" required value={Data.name} fullWidth variant="outlined" onChange={(e) => updateData({ ...Data, name: e.target.value })} ></TextField>
                <TextField className={classes.standardStyle} type="text" label="City" required value={Data.city} fullWidth variant="outlined" onChange={(e) => updateData({ ...Data, city: e.target.value })}></TextField>
                <TextField className={classes.standardStyle} type="date" value={Data.dob} required fullWidth variant="outlined" onChange={(e) => updateData({ ...Data, dob: e.target.value })}></TextField>
                <Button className={classes.standardStyle} type="submit" color="primary" variant="contained" size="large" fullWidth >Submit</Button>
                <br></br>
                <br></br>
                <Button className={classes.standardStyle} type="submit" color="secondary" variant="contained" size="large" fullWidth onClick={handleClick}>See All Users</Button>
            </form>
        </div>
    )
}

export default Form
