import { Button, Grid, Input, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadContactAction from "../redux/action/LoadContactAction";
import AddContactModal from "./AddContactModal";
import CreateContactAction from "../redux/action/CreateContactAction";
import ViewContactModal from "./ViewContactModal";
import UpdateContactAction from "../redux/action/UpdateContactAction";
import DeleteContactAction from "../redux/action/DeleteContactAction";

const FirstComponent = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchRecord, setSearchRecord ] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        address: "",
    });

    const AllContactData = useSelector((state) => state.AllContacts?.data || []);

    useEffect(() => {
        dispatch(LoadContactAction());
    }, [dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIsEditMode(false);
        setFormData({
            name: '',
            email: '',
            phone_number: '',
            address: ''
        });
    };

    const handleViewModalOpen = () => {
        setViewOpen(true);
    };

    const handleViewModalClose = () => {
        setViewOpen(false);
        setSelectedContact(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        if (isEditMode) {
            if (selectedContact && selectedContact.id) {
                dispatch(UpdateContactAction(selectedContact.id, formData));
                setTimeout(() => {
                    dispatch(LoadContactAction())
                },2000);
            } else {
                console.log("Error: No contact selected for update.");
            }
        } else {
            dispatch(CreateContactAction(formData));
            setTimeout(() => {
                dispatch(LoadContactAction())
            },2000);
        }
        setFormData({}); 
        handleClose();
    };

    const handleEditClick = (contact) => {
        setFormData({
            name: contact.name,
            email: contact.email,
            phone_number: contact.phone_number,
            address: contact.address,
        });
        setSelectedContact(contact)
        setIsEditMode(true);  
        setOpen(true);  
    };

    const handleDeleteClick = (id) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            dispatch(DeleteContactAction(id));
        }
        setTimeout(() => {
            dispatch(LoadContactAction())
        }, 2000);
        
    };

    const filteredContacts = AllContactData.filter((contact) => 
        contact.name.toLowerCase().includes(searchRecord.toLowerCase()) || 
        contact.phone_number.includes(searchRecord)
    );

    return (
        <>
            <Grid container item xs={12} sx={{ justifyContent: 'center', marginTop: { xs: '0px', sm: '20px', md: '30px' } }}>
                <Grid item xs={12} sm={10} md={8} lg={6} sx={{ border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', }}>
                    <Grid sx={{ justifyContent: 'center', alignItems: 'center', padding: '10px', backgroundColor: '#87CEEB', display: 'flex' }} >
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#FFFFFF', fontFamily: 'Roboto' }}>All Contacts</Typography>
                    </Grid>
                    <Grid sx={{ margin: '20px 20px', justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
                        <Input placeholder="Search" onChange={(e) => setSearchRecord(e.target.value)} />
                        <Button variant="contained" sx={{ textTransform: 'none', backgroundColor: '#87CEEB' }} onClick={handleClickOpen}>
                            Add
                        </Button>
                    </Grid>

                    {filteredContacts.length > 0 ? (
                        filteredContacts.map((item, index) => (
                            <Grid key={item.id} gap={2} sx={{ display: 'flex', alignItems: 'center', border: '2px solid black', margin: '10px', borderRadius: '5px', padding: '5px', }}>
                                <Grid item xs={1} sx={{ paddingLeft: { xs: '10px', sm: '20px' } }}><Typography>{index + 1}</Typography></Grid>
                                <Grid item xs={1}>
                                    <AccountCircleIcon sx={{ fontSize: { xs: '25px', sm: '45px' } }} />
                                </Grid>
                                <Grid item xs={6} sx={{ flexDirection: 'row' }}>
                                    <Typography sx={{ fontSize: { xs: '12px', sm: '16px' } }}>{item.name}</Typography>
                                    <Typography sx={{ fontSize: { xs: '10px', sm: '13px' } }}>{item.phone_number}</Typography>
                                </Grid>
                                <Grid item xs={4} sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', padding: { xs: '0px', sm: '0px 10px' } }}>
                                    <RemoveRedEyeIcon
                                        sx={{
                                            cursor: 'pointer',
                                            padding: '3px',
                                            fontSize: { xs: '15px', sm: '25px' },
                                            backgroundColor: 'green',
                                            borderRadius: 1,
                                            color: '#FFFFFF',
                                            transition: 'transform 0.3s',
                                            '&:hover': { transform: 'translateY(-5px)' }
                                        }}
                                        onClick={() => {
                                            setSelectedContact(item);
                                            handleViewModalOpen();
                                        }}
                                    />
                                    <EditIcon
                                        sx={{
                                            cursor: 'pointer',
                                            padding: '3px',
                                            fontSize: { xs: '15px', sm: '25px' },
                                            backgroundColor: 'blue',
                                            borderRadius: 1,
                                            color: '#FFFFFF',
                                            transition: 'transform 0.3s',
                                            '&:hover': { transform: 'translateY(-5px)' }
                                        }}
                                        onClick={() => handleEditClick(item)}
                                    />
                                    <DeleteIcon
                                        sx={{
                                            cursor: 'pointer',
                                            padding: '3px',
                                            fontSize: { xs: '15px', sm: '25px' },
                                            backgroundColor: 'red',
                                            borderRadius: 1,
                                            color: '#FFFFFF',
                                            transition: 'transform 0.3s',
                                            '&:hover': { transform: 'translateY(-5px)' }
                                        }}
                                        onClick={() => handleDeleteClick(item.id)}
                                    />
                                </Grid>
                            </Grid>
                        ))
                    ) : (
                        <Typography sx={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', marginBottom:'20px' }}>No Data Found</Typography>
                    )}

                </Grid>
            </Grid>

            <AddContactModal
                open={open}
                handleClose={handleClose}
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isEditMode={isEditMode}
            />

            <ViewContactModal
                open={viewOpen}
                handleClose={handleViewModalClose}
                contact={selectedContact}
            />
        </>
    );
};

export default FirstComponent;
