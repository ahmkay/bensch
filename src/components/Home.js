
import { Typography, Button, Box, Grid, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Contactform from './Contactform';
import ModalImmo from './ModalImmo';
import ModalUntern from './ModalUntern';
import ModalErbrecht from './ModalErbrecht';
import ModalFamilie from './ModalFamilie';
import '../App.css';


const ScrollAnimation = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const screenHeight = window.innerHeight;

            // Element 1
            const boxPosition1 = animatedBoxRef1.current.getBoundingClientRect().top;
            if (boxPosition1 < screenHeight * 0.8) {
                setIsVisible1(true);
            }

            // Element 2
            const boxPosition2 = animatedBoxRef2.current.getBoundingClientRect().top;
            if (boxPosition2 < screenHeight * 0.8) {
                setIsVisible2(true);
            }

            // Element 3
            const boxPosition3 = animatedBoxRef3.current.getBoundingClientRect().top;
            if (boxPosition3 < screenHeight * 0.8) {
                setIsVisible3(true);
            }

            // Element 3
            const boxPosition4 = animatedBoxRef4.current.getBoundingClientRect().top;
            if (boxPosition4 < screenHeight * 0.8) {
                setIsVisible4(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const animatedBoxRef1 = React.useRef(null);
    const animatedBoxRef2 = React.useRef(null);
    const animatedBoxRef3 = React.useRef(null);
    const animatedBoxRef4 = React.useRef(null);


    // Visibility Notarinfo
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
  
    const toggleVisibility = (elementId) => {
      if (elementId === 'elementToToggle1') {

        setIsVisible5(!isVisible5);
      } else if (elementId === 'elementToToggle2') {
        setIsVisible6(!isVisible6);
      }
    };

    return (
        <Box className="containerMain">

            <div className="App">
                <main>
                    <div>
                        <Box className="heroWrapper section" id="start">
                            <Box className='heroWrapperLayer'></Box>
                            <Container maxWidth="md" className="containerHero" /*sx={{width: 300,backgroundColor: 'success.main',}}*/>
                                <Box className="HeroBox">
                                    {/* <img src="Embem.png" className='HeroLogo' /> */}
                                    <Typography variant="h2" align='center' color="textSecondary">NOTAR</Typography>
                                    <Typography variant='h1' align='center' color="textPrimary" gutterBottom>THOMAS BENSCH</Typography>                                    
                                    <div>
                                        <Button href="/#kontakt" variant='contained' className='heroCTA'>
                                            Kontakt
                                        </Button>
                                    </div>
                                </Box>


                            </Container>
                        </Box>



                        <Box className="mainWrapper">

                            <Container maxWidth="md" className="container subheroContainer">
                                <Box className="textBox">
                                    <Grid container justifyContent="center" spacing={2}>

                                        {/* <Grid container item xs={12} sm={4} spacing={0}>
                                        <Box className="textBoxImageInner">
                                            <img src="siegel.jpg" className='textboxImage' />
                                        </Box>
                                    </Grid> */}

                                        <Grid container item xs={12} sm={12} spacing={0}>
                                            <Box className="textBoxInner">
                                                <Typography variant='h3' className='subtitleH3'>Wir heißen Sie herzlich willkommen in unserem Notarbüro</Typography>
                                                <Typography variant='body1'>Als Notare bekleiden wir ein öffentliches Amt und sind zur Neutralität verpflichtet. Wir sind Ihre unparteiischen Berater, auch in kom­plizierten und folgenreichen Rechtsangelegenheiten. Wir sorgen dafür, dass Sie die Tragweite Ihrer Erklärungen und Ihres Handelns verstehen, und unterstützen Sie dabei, Ihre Anliegen rechtlich angemessen umzusetzen.</Typography>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Box>
                            </Container>




                            <Box className="bannerSection section" id="info">
                                <Container maxWidth="md" className="leistungenContainer section" id="leistungen">
                                    <Typography variant='h2' className='sectionTitle fadeInOpac'>Unsere Leistungen</Typography>
                                    <Typography variant='h3' className='sectionTitle3 fadeInOpac'>Hier gelangen Sie zur Digitalen Notarplattform (DiNo)</Typography>
                                    <Grid container justifyContent="center" spacing={2} className="leistungenGrid">
                                        <Grid item xs={6} sm={3}>

                                            <Box className={`servOptItem ${isVisible1 ? 'visible' : ''}`} ref={animatedBoxRef1} id="soi1">
                                                <ModalImmo />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Box className={`servOptItem ${isVisible1 ? 'visible' : ''}`} ref={animatedBoxRef2} id="soi2">
                                                <ModalFamilie />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Box className={`servOptItem ${isVisible1 ? 'visible' : ''}`} ref={animatedBoxRef3} id="soi3">
                                                <ModalUntern />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Box className={`servOptItem ${isVisible1 ? 'visible' : ''}`} ref={animatedBoxRef4} id="soi4">
                                                <ModalErbrecht />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Typography variant='body1'>Haben Sie Fragen? Nehmen Sie <a href="#kontakt">Kontakt</a> zu uns auf!</Typography>
                                </Container>
                            </Box>

                            <Container maxWidth="md" className="container section" id="notare">
                                <Typography variant='h2' className='sectionTitle'>
                                    Ihre Notare
                                </Typography>

                                <Grid container justifyContent="center" spacing={2} className="notareGrid">
                                    
                                    <Grid item xs={12} sm={12} className='notarElement'>

                                    <Box className="notarInnerBox">
                                    <Box className="notarImgWrapper">
                                            <img src='Thomas-Bensch_thumbnail.jpg' className='notarImg' />
                                        </Box> 
                                        <Box>
                                            <Typography variant='h3' className='subtitleH3'>Notar Thomas Bensch</Typography>
                                            <Typography variant='body1' paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</Typography>
                                            <Button className='btnSecondary' onClick={() => toggleVisibility('elementToToggle1')}>{`${isVisible5 ? 'Einklappen' : 'Mehr zur Person'}`}</Button>
                                        </Box>
                                        
                                    </Box>
                                        
                                        <Box id="elementToToggle1" className={`notarBodyTextWrapper ${isVisible5 ? 'visible' : ''}`}>
                                        <Typography variant='body1' paragraph className='notarBodyText'>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br /><br />
                                        
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br /> </Typography>
                                        </Box>
                                    

                                    </Grid>                                       


                                </Grid>
                            </Container>


                            <Container maxWidth="md" className="container section" id="kontakt">
                                <Typography variant='h2' className='sectionTitle'>
                                    Kontaktieren Sie uns!
                                </Typography>
                                <Contactform />
                                <br /><br />
                                <Typography variant='body1' paragraph>
                                    Hier finden Sie uns:
                                </Typography>
                                <Box className="contactMap">
                                <iframe width="100%" height="400px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.de/de/map/notar-thomas-bensch-karte_55438?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"></iframe>
                                </Box>
                                <Typography variant='body1' paragraph className="contactMapRouteLink">Einen Routenplaner finden sie <a href="https://www.google.com/maps/dir//Pr%C3%A4sidentenstra%C3%9Fe+47,+16816+Neuruppin,+Germany/@52.9228206,12.8022116,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47a93daef2b5288f:0x8b0754e2b416faa6!2m2!1d12.8047865!2d52.9228206!3e0?entry=ttu" target="_blank">hier</a>.</Typography>

                            </Container>

                        </Box>

                    </div>
                </main >
            </div >

        </Box>
    );
};

export default ScrollAnimation;