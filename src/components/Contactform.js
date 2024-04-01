import * as React from 'react';
import { Box, TextField, Grid, FormControlLabel, Checkbox, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contactform() {

    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById("submitBtn").innerHTML = "senden ..."
        emailjs
            .sendForm('service_ynzzblu', 'template_vqdmph4', form.current, {
                publicKey: 'TUGAxP2BuuAojqnq3',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    document.getElementById("submitBtn").innerHTML = "Gesendet"
                    document.getElementById("formMessageBox").style.display = "block";
                    document.getElementById("formSuccess").style.display = "block";
                    document.getElementById("formFail").style.display = "none";
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    document.getElementById("submitBtn").innerHTML = "Absenden"
                    document.getElementById("formMessageBox").style.display = "none";
                    document.getElementById("formSuccess").style.display = "none";
                    document.getElementById("formFail").style.display = "block";
                },
            );
    };



    return (
        <Box className="contactWrapper">
            <Box className="contactFormTop">
                <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid'>

                    <Grid item xs={12} sm={4}>
                        <Box className="contactTopItem">
                            <a href="mailto:info@bensch-notar.de">
                                <MailOutlineIcon className='contactTopIcon' />
                                <p className='contactTopText'>info@bensch-notar.de</p>
                            </a>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box className="contactTopItem">
                            <a href="https://maps.app.goo.gl/qMocKrXuwTDsk9Zi7" target="_blank">
                                <LocationOnOutlinedIcon className='contactTopIcon' />
                                <p className='contactTopText'>Präsidentenstraße 47<br />16816 Neuruppin</p>
                            </a>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box className="contactTopItem">
                            <a href="tel:+493391458445">
                                <LocalPhoneOutlinedIcon className='contactTopIcon' />
                                <p className='contactTopText'>03391 - 458445</p>
                            </a>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Box className='contactBottomWrapper'>
                {/* <form action="contact.php"> */}
                <form ref={form} onSubmit={sendEmail}>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid'>
                        <Grid item xs={12} sm={6}>
                            <TextField type="text" required id="vorname" name="vorname" label="Vorname" variant="filled" className='contactInput' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField type="text" required id="nachname" name="nachname" label="Nachname" variant="filled" className='contactInput' />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid'>
                        <Grid item xs={12} sm={6}>
                            <TextField type="email" required id="email" name="email" label="E-Mail" variant="filled" className='contactInput' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField type="tel" id="telefon" name="phone" label="Telefon" variant="filled" className='contactInput' />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid'>
                        <Grid item xs={12} sm={12}>
                            <TextField id="nachricht" required name="message" label="Ihre Nachricht an mich" multiline rows={4} variant="filled" className='contactInput' />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" alignContent="center" wrap="wrap" className='contactFormTopGrid' id="contactFormBottomControls">
                        <Grid item xs={12} sm={8}>
                            <FormControlLabel control={<Checkbox required sx={{ color: '#9AAFB7', '&.Mui-checked': { color: '#9AAFB7', }, }} />} label="Ich bin mit der Verarbeitung der eingegebenen Daten sowie der Datenschutzerklärung einverstanden.*" id="contactCheckbox" />                           
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button variant='contained' color='primary' className='contactFormBtn' type="submit" id="submitBtn">Absenden</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>

            <Box>
                <Grid container spacing={2} id="formMessageBox">
                    <Grid item xs={12} sm={12}>
                        <p id="formSuccess">Ihre Daten wurden erfolgeich gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                        <p id="formFail">Es gab einen Fehler beim Senden der Daten. Bitte versuchen Sie es noch einmal oder erreichen Sie uns Telefonisch.</p>
                    </Grid>
                </Grid>

            </Box>

        </Box >

    );
}