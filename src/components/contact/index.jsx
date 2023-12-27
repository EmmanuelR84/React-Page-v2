import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Banner from '../banner'

import './contact.css';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        < Banner title={'Contact Us'} />
      </div>

      <form name="contact" method="post" className='form-container'>
        <h1><span className='dualColor'>Send us</span> a message</h1>
        <div className='container__inputs'>
          {/*el siguiente inpuet es solo para netlify*/}
          <input type="hidden" name="form-name" value="contact" />

          <TextField
            required
            name='name'
            id="standard-required"
            label="Name"
            // defaultValue="Your name"
            variant="standard"
          />
          <TextField
            required
            name='email'
            id="standard-email"
            label="email"
            // defaultValue="Your name"
            variant="standard"
            // helperText="Incorrect entry."
          />
          <TextField
            required
            name='phone'
            id="standard-phone"
            label="phone"
            // defaultValue="Your name"
            variant="standard"
          />
          <TextField
          name='message'
            id="standard-helperText"
            label="Your message"
            // defaultValue="Default Value"
            helperText="How we can help you"
            variant="standard"
          />
          <Stack direction="row" spacing={2}>
            <Button 
              type='submit'
              variant="contained"
              endIcon={<SendIcon />} 
              onClick={() => {
                alert('Gracias por contactarnos, a la brevedad nos pondremos en contacto!')
              }}>
              Send
            </Button>
          </Stack>         

        </div>

      </form>
      
    </Box>
  );
}