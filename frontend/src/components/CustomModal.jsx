import React from 'react'
import { Box, Modal, Button } from '@mui/material';
import CustomForm from './CustomForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const CustomModal = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button onClick={handleOpen}>{props.title}</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <CustomForm values={props.values} />
                </Box>
            </Modal>
        </>
    )
}

export default CustomModal