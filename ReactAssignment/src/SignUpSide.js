import "./index.css"
import React, { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Typography,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    Checkbox,
    FormGroup,
    MenuItem,
    Select,
    InputLabel,
    Grid,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignInSide from './SignInSide';
const SignUpSide = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        hobbies: [],
        profilePicture: null,
        country: '',
        bio: '',
        agree: false,
    });
    // showing value in console
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
            if (name === 'hobbies') {
                const newHobbies = checked ? [...formData.hobbies, value] : [];
                setFormData({ ...formData, hobbies: newHobbies });
            }
        } else if (type === 'file') {
            setFormData({ ...formData, profilePicture: e.target.files[0] }); //array of objects that's why accessing [0]
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    // for switching between components
    const [showSignIn, setShowSignIn] = useState(false);
    const handleSignInClick = () => {
        setShowSignIn(true);
    };
    if (showSignIn) {
        return <SignInSide />;
    }
    //for Font Family
    const theme3 = createTheme({
        typography: {
            allVariants: {
                fontFamily: "Ubuntu"
            }
        }
    });
    //for Font Family
    const theme4 = createTheme({
        typography: {
            fontFamily: "Playwrite ES"
        }
    });
    return (
        <ThemeProvider theme={theme3}>
            <Box maxWidth="100%" >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5} md={4}>
                        <Box
                            sx={{
                                height: '100%',
                                backgroundImage: 'url(./stars.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: { xs: 'top', md: 'center' },
                                marginBottom: { xs: '2rem', md: 0 },
                                minHeight: '300px',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={7} md={8}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                padding: 2,
                                boxShadow: 3,
                                borderRadius: 2,
                                backgroundColor: '#fff',
                            }}
                        >
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h4" component="h1">
                                    <img src="star.svg" alt="Logo" style={{ marginRight: 2, marginBottom: 2, width: '32px', verticalAlign: "middle" }} />
                                    MiDer
                                </Typography>
                            </Box>
                            <Typography variant="h6">Sign up your account</Typography>
                            <ThemeProvider theme={theme4}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Full Name"
                                            variant="outlined"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Username"
                                            variant="outlined"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Confirm Password"
                                            variant="outlined"
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Email Address"
                                            variant="outlined"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Phone Number"
                                            variant="outlined"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Date of Birth"
                                            variant="outlined"
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth required>
                                            <InputLabel id="country-label">Select your Country</InputLabel>
                                            <Select
                                                labelId="country-label"
                                                id="country"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="usa">United States</MenuItem>
                                                <MenuItem value="canada">Canada</MenuItem>
                                                <MenuItem value="uk">United Kingdom</MenuItem>
                                                <MenuItem value="australia">Australia</MenuItem>
                                                <MenuItem value="other">Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl required>
                                            <FormLabel>Gender</FormLabel>
                                            <RadioGroup
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                row
                                            >
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl>
                                            <FormLabel>Hobbies</FormLabel>
                                            <FormGroup row>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="hobbies"
                                                            value="reading"
                                                            checked={formData.hobbies.includes('reading')}
                                                            onChange={handleChange}
                                                        />
                                                    }
                                                    label="Reading"
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="hobbies"
                                                            value="traveling"
                                                            checked={formData.hobbies.includes('traveling')}
                                                            onChange={handleChange}
                                                        />
                                                    }
                                                    label="Traveling"
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="hobbies"
                                                            value="cooking"
                                                            checked={formData.hobbies.includes('cooking')}
                                                            onChange={handleChange}
                                                        />
                                                    }
                                                    label="Cooking"
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="hobbies"
                                                            value="other"
                                                            checked={formData.hobbies.includes('other')}
                                                            onChange={handleChange}
                                                        />
                                                    }
                                                    label="Other"
                                                />
                                            </FormGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Profile Picture"
                                            variant="outlined"
                                            type="file"
                                            name="profilePicture"
                                            onChange={handleChange}
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Bio"
                                            variant="outlined"
                                            name="bio"
                                            value={formData.bio}
                                            onChange={handleChange}
                                            multiline
                                            rows={4}
                                            fullWidth
                                            InputLabelProps={{ shrink: true }}
                                            placeholder="Write something..."
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="agree"
                                                    checked={formData.agree}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            }
                                            label="I agree to the Terms and Conditions"
                                        />
                                    </Grid>
                                </Grid>
                                <Box sx={{ display: 'flex', mt: 1 }}>
                                    <Button variant="outlined" color="error" type="reset">
                                        Reset
                                    </Button>
                                    <Button variant="contained" color="success" type="submit" sx={{ ml: 2 }}>
                                        Submit
                                    </Button>
                                </Box>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    Have an account? <a href="#" onClick={handleSignInClick}>Login here</a>
                                </Typography>
                            </ThemeProvider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};
export default SignUpSide;
