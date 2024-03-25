import * as React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalImmo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = event => {
        const element = document.getElementById('servOptInfoErb');
        element.classList.add('visible');
      };

    return (
        <div>

            <a onClick={handleOpen} className='servOptLink'>
                <div className='servItemBackground' id="opt3"></div>
                <div className='serviceLayer'></div>
                <div className='servOptTextWrapper'>
                    <p className='servOptText'>Erbrecht</p>
                </div>
            </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modalInnerBox' sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalTitle'>
                        Erbrecht
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='modalText'>
                        Welche Art Service benötigen Sie?
                    </Typography>

                    <Grid container justifyContent="center" spacing={2} className='modalServiceGrid'>
                        <Grid item xs={12} sm={12}>
                            <span className='servOptTextModal' onClick={handleClick}>
                                <p className='servOptTextBox'>Testamente & Erbverträge</p>
                            </span>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            {/* <a href="https://dialog.holland-kreusslein.de/inherit" className='servOptTextModal'>
                                <p className='servOptTextBox'>Erbscheinsanträge </p>
                            </a> */}
                            <span className='servOptTextModal' onClick={handleClick}>
                                <p className='servOptTextBox'>Erbscheinsanträge</p>
                            </span>
                        </Grid>
                        <Grid item xs={12} sm={12} className='servOptInfo' id="servOptInfoErb">
                            <p>Dieser Service ist bisher noch nicht online verfügbar. Nutzen sie hierfür ganz einfach unser <a href="/#kontakt" onClick={handleClose}>Kontaktformular</a>.</p>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>
        </div>
    );
}