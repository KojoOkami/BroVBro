import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <Box>
            <TextField 
                label="Username"
                autoComplete='username'
                variant='outlined'
            />
            <TextField 
                label="Password"
                type="password"
                autoComplete='current-password'
                variant='outlined'
            />
            <Button
                variant='contained'
            >
                Login
            </Button>
        </Box>
    )
}

export default Login;
