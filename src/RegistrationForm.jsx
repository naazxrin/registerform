import React, { useState } from 'react';
import './App.css'
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Typography,
} from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required.';
    tempErrors.address = formData.address ? '' : 'Address is required.';
    tempErrors.mobile = formData.mobile.match(/^\d{10}$/) ? '' : 'Mobile number must be 10 digits.';
    tempErrors.email = formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ? '' : 'Email is invalid.';
    tempErrors.gender = formData.gender ? '' : 'Gender is required.';
    tempErrors.dob = formData.dob ? '' : 'Date of Birth is required.';
    tempErrors.course = formData.course ? '' : 'Course selection is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    setErrors({});
  };

  return (
    <form id='all' className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit}>
      <Typography variant="h4" style={{width:'300pxpx'}} id='res' className='fw-bolder text-light'> Registration Form</Typography>
      <Grid id='itemm' style={{width:'500px'}}className='d-flex flex-column justify-content-center align-items-center mt-3 border rounded shadow ' container spacing={2}>
        <Grid item xs={12} >
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            InputProps={{
                sx: { color: 'white', borderColor: 'white' },
                style: { border: '1px solid white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            InputProps={{
                sx: { color: 'white', borderColor: 'white' },
                style: { border: '1px solid white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            error={!!errors.mobile}
            helperText={errors.mobile}
            InputProps={{
                sx: { color: 'white', borderColor: 'white' },
                style: { border: '1px solid white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
                sx: { color: 'white', borderColor: 'white' },
                style: { border: '1px solid white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <Typography style={{ color: 'white' }}>Gender</Typography>
            <RadioGroup className='d-flex flex-row justify-content-center align-items-center'
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              error={!!errors.gender}
            >
              <FormControlLabel className='text-light' value="male" control={<Radio />} label="Male" />
              <FormControlLabel className='text-light' value="female" control={<Radio />} label="Female" />
              <FormControlLabel className='text-light' value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {errors.gender && <Typography color="error">{errors.gender}</Typography>}
          </FormControl>
          
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date of Birth"
            name="dob"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.dob}
            onChange={handleChange}
            error={!!errors.dob}
            helperText={errors.dob}
            InputProps={{
                style: { color: 'white' },
              }}
          />
        </Grid>
        <Grid style={{width:'400px'}} item xs={12}>
          <FormControl fullWidth>
            <InputLabel style={{ color: 'white' }}>Course</InputLabel>
            <Select 
              name="course"
              value={formData.course}
              onChange={handleChange}
              error={!!errors.course}
              className="white-border-select"
            >
              <MenuItem className='d-flex flex-column ' value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Biology">Biology</MenuItem>
              <MenuItem value="Computer Science">Computer Science</MenuItem>
              <MenuItem value="Commerce">Commerce</MenuItem>
              <MenuItem value="Humanities">Humanities</MenuItem>
            </Select>
            {errors.course && <Typography color="error">{errors.course}</Typography>}
          </FormControl>
          
        </Grid>
        <Grid item xs={12} className='d-flex flex-row justify-content-between' style={{gap:'10px'}}>
          <Button variant="contained" className='btn btn-success text-dark' type="submit">
            Register
          </Button>
          <Button variant="outlined" className='bg-danger text-dark' color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegistrationForm;
