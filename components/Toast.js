import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Toast = ({msg, handleShow, bgColor}) => {
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        handleShow()
      };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={bgColor}>
                {msg.title}: {msg.msg}
            </MuiAlert>
        </Snackbar>
    )
}

export default Toast;