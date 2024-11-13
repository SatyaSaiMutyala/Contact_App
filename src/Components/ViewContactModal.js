import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Grid } from '@mui/material';

const ViewContactModal = ({ open, handleClose, contact }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{fontWeight:'bold', textAlign:'center',backgroundColor:'#87CEEB', color:'#FFFFFF'}}>Contact Details</DialogTitle>
      <DialogContent>
        {contact ? (
          <Grid container spacing={2} sx={{marginTop:'10px'}}> 
            <Grid item xs={12}>
              <Typography><strong>Name:</strong> {contact.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography><strong>Email:</strong> {contact.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography><strong>Phone:</strong> {contact.phone_number}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography><strong>Address:</strong> {contact.address}</Typography>
            </Grid>
          </Grid>
        ) : (
          <Typography>No contact selected</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" sx={{ textTransform: 'none', color: '#ffffff', backgroundColor: 'red' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewContactModal;
