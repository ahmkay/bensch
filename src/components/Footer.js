import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CookieConsent from "react-cookie-consent";
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
    return (
        <Box className="Footer">
            <Container maxWidth="md" className="container FooterContainer">
                <Box className="FooterLeft">
                    <img src="Embem.png" className='brandLogoFooter' />
                </Box>
                <Box className="FooterMLeft">
                    <Typography align='center' className='FooterSubTitle'>Informationen</Typography>
                    <HashLink className='FooterLink' style={{ textDecoration: 'none' }} smooth to="/#kontakt">Kontakt</HashLink>        
                    <HashLink className='FooterLink' style={{ textDecoration: 'none' }} smooth to="/#notare">Notare</HashLink>        
                    <HashLink className='FooterLink' style={{ textDecoration: 'none' }} smooth to="/#leistungen">Leistungen</HashLink>        
                    <HashLink className='FooterLink' style={{ textDecoration: 'none' }} smooth to="/Impressum#">Impressum</HashLink>        
                    <HashLink className='FooterLink' style={{ textDecoration: 'none' }} smooth to="/Datenschutz#">Datenschutz</HashLink>        
                </Box>
                <Box className="FooterMRight">
                    <Typography align='center' className='FooterSubTitle'>Öffnungszeiten</Typography>
                    <Typography className="FooterText">Mo 9 - 18 Uhr</Typography>          
                    <Typography className="FooterText">Di 9 - 18 Uhr</Typography>          
                    <Typography className="FooterText">Mi 9 - 18 Uhr</Typography>          
                    <Typography className="FooterText">Do 9 - 18 Uhr</Typography>          
                    <Typography className="FooterText">Fr 9 - 15 Uhr</Typography>          
                </Box>
                <Box className="FooterRight">
                    <Typography align='center' className='FooterSubTitle'>Kontakt</Typography>
                    <Typography className="FooterText">Notare Holland & Kreußlein</Typography>  
                    <Typography className="FooterText">Präsidentenstraße 47</Typography>  
                    <Typography className="FooterText">16816 Neuruppin</Typography>  
                    <Typography className="FooterText">info@bensch-notar.de</Typography>  
                    <Typography className="FooterText">Tel: 03391-458445</Typography>  
                    <Typography className="FooterText">Fax: 03391-458446</Typography>  

                </Box>
            </Container>

            <CookieConsent
                location="bottom"
                buttonText="Verstanden"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#9AAFB7" }}
                buttonStyle={{ color: "#ffffff", fontSize: "16px" }}
                expires={150}
            >
                <Typography variant='body1'>Diese Website verwendet nur technisch notwendige Cookies, um die Funktionalität zu gewährleisten. Es werden keine persönlichen Daten gesammelt.{" "}</Typography> 
            </CookieConsent>

        </Box>
    );
}