import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Grid } from "@mui/material";

const AddContactModal = ({ open, handleClose, formData, handleInputChange, handleSubmit, isEditMode }) => {
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        let tempErrors = {};
    
        if (!formData.name) {
            tempErrors.name = "Name is required";
        } else if (!/^[A-Z]/.test(formData.name)) {
            tempErrors.name = "Name must start with a capital letter";
        }

        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
    
        if (!formData.phone_number) {
            tempErrors.phone_number = "Phone number is required";
        } else if (!/^[6-9]\d{9}$/.test(formData.phone_number)) {
            tempErrors.phone_number = "Phone number must be 10 digits and start with 6, 7, 8, or 9";
        }
    
        if (!formData.address) {
            tempErrors.address = "Address is required";
        } else if (!/^[A-Z]/.test(formData.address)) {
            tempErrors.address = "Address must start with a capital letter";
        }
    
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    

    const handleSave = () => {
        if (validateFields()) {
            handleSubmit();
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#87CEEB', color: '#FFFFFF' }}>
                {isEditMode ? 'Edit Contact' : 'Add New Contact'}
            </DialogTitle>
            <DialogContent>
                <Grid container gap={2} sx={{ padding: '10px', marginTop: { xs: '10px', sm: '20px' } }}>
                    <Grid item xs={12} md={5.8}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            size="small"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                    </Grid>
                    <Grid item xs={12} md={5.8}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            size="small"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={12} md={5.8}>
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            size="small"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                            error={!!errors.phone_number}
                            helperText={errors.phone_number}
                        />
                    </Grid>
                    <Grid item xs={12} md={5.8}>
                        <TextField
                            label="Address"
                            variant="outlined"
                            fullWidth
                            size="small"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            error={!!errors.address}
                            helperText={errors.address}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Grid container sx={{ justifyContent: 'space-between', padding: '5px 15px' }}>
                    <Button onClick={handleSave} variant="contained" sx={{ textTransform: 'none', color: '#ffffff', backgroundColor: 'green' }}>
                        Save
                    </Button>
                    <Button onClick={handleClose} variant="contained" sx={{ textTransform: 'none', color: '#ffffff', backgroundColor: 'red' }}>
                        Cancel
                    </Button>
                </Grid>
            </DialogActions>
        </Dialog>
    );
};

export default AddContactModal;
