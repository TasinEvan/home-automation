import React, { useState, useEffect } from 'react';
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";

import { 
  Button, 
  TextField, 
  Typography, 
  Container, 
  Select, 
  MenuItem,
  Box,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const API_BASE_URL = 'http://192.168.20.238';

function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [newSchedule, setNewSchedule] = useState({ date: '', time: '', action: 'on' });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/schedules`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSchedules(data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
      setError('Failed to fetch schedules. Please try again.');
    }
  };

  const handleAddSchedule = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/schedules`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSchedule),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchSchedules();
      setNewSchedule({ date: '', time: '', action: 'on' });
    } catch (error) {
      console.error('Error adding schedule:', error);
      setError('Failed to add schedule. Please try again.');
    }
  };

  const handleDeleteSchedule = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/schedules?id=${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchSchedules();
    } catch (error) {
      console.error('Error deleting schedule:', error);
      setError('Failed to delete schedule. Please try again.');
    }
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null);
  };

  return (
    <div className='w-full rounded-xl'>
       <img className='w-full rounded-xl'  src="https://i.imghippo.com/files/9Xakt1727799565.jpg" alt="" />
    
    <div className='justify-center items center text-center w-full  flex-col   mx-auto my-7 '>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 font-bold ubuntu mb-3"> Home Automation</h2>
              <p className="text-sm sm:text-base lg:text-lg text-blue-900 ubuntu ">Effortlessly manage your home's lighting and appliances with predecide manner</p>
              </div>

      <section className="py-6 dark:bg-gray-100">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold playfair text-indigo-900"> Ultimate Schedule Manager</h1>
            <p className="pt-2 pb-4">Effortless scheduling and real-time event management.</p>
            <div className="space-y-4">
              <p className="flex  gap-3 items-center">
                <SlCalender className='text-2xl'></SlCalender>
                <span>Choose your date for automatatic switching </span>
              </p>
              <p className="flex gap-3 items-center">
              <MdAccessTime className='text-3xl' />
                <span>Adjust the specific time to act</span>
              </p>
           
            </div>
          </div>
          <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6" onSubmit={handleAddSchedule}>
            <label className="block">
              <span className="mb-1">Date</span>
              <input 
                type="date" 
                value={newSchedule.date}
                onChange={(e) => setNewSchedule({ ...newSchedule, date: e.target.value })}
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" 
                required
              />
            </label>

            <label className="block">
              <span className="mb-1">Time</span>
              <input 
                type="time"
                value={newSchedule.time} 
                onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
                required
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" 
              />
            </label>
    
            <Select
              value={newSchedule.action}
              onChange={(e) => setNewSchedule({ ...newSchedule, action: e.target.value })}
              sx={{ mr: 1 }}
            >
              <MenuItem value="on">On</MenuItem>
              <MenuItem value="off">Off</MenuItem>
            </Select>

            <Button type="submit" variant="contained" color="primary">
              Add Schedule
            </Button>
          </form>
    
        </div>
      </section>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>

      <div>
      <TableContainer component={Paper} className="mt-6 bg-blue-50">
        <Table sx={{ minWidth: 650 }} aria-label="schedule table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Action</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedules.map((schedule) => (
              <TableRow
                key={schedule.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {schedule.date}
                </TableCell>
                <TableCell>{schedule.time}</TableCell>
                <TableCell>{schedule.action}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleDeleteSchedule(schedule.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
}

export default Schedules;