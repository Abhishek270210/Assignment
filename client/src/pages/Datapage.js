import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import './Datapage.css'

function Datapage() {

  const [dataArr, updateArr] = useState([]);
  const navigate = useNavigate();

  useEffect(async () => {
    const { data } = await axios.get('https://assignmentxmnation.herokuapp.com/data');
    // console.log(data);
    updateArr(data);
  }, []);

  const handleClick = () => {
    navigate('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const citySearched = document.getElementById("cities").value;
    const filteredData = await axios.post('https://assignmentxmnation.herokuapp.com/data/filterbycity', { city: citySearched });
    //  console.log(filteredData);
    updateArr(filteredData.data);
  }

  const allcityentries = dataArr.map((data) => data.city);
  const uniquecities = allcityentries.filter((v, i, a) => a.indexOf(v) === i);

  return (
    <div>
      <Button type="submit" color="primary" variant="contained" size="large" fullWidth onClick={handleClick}>Add Data</Button>
      <div className='filtersearch'>
        <form action="post" onSubmit={handleSubmit}>
          <label htmlFor="CITY"><strong>Choose a city:</strong></label>
          <select name="CITY" id="cities">
            <option value="ALL">ALL</option>
            {
              uniquecities.map((city, index) => <option key={index} value={city}>{city}</option>)
            }
          </select>
          <br></br>
          <br></br>
          <Button type="submit" color="secondary" variant='contained' size="small">Search</Button>
        </form>
      </div>



      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'><strong>NAME</strong> </TableCell>
              <TableCell align="center"><strong>CITY</strong></TableCell>
              <TableCell align="center"><strong>DOB</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArr.map((data) => (
              <TableRow key={data._id}>
                <TableCell align="center">{data.name}</TableCell>
                <TableCell align="center">{data.city}</TableCell>
                <TableCell align="center">{data.dob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Datapage
