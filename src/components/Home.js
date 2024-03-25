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

                            <div className='imagesource'> <a href="https://commons.wikimedia.org/wiki/User:Radler59">Radler59</a>, <a href="https://commons.wikimedia.org/wiki/File:Neuruppin_St._Trinitatis-01.jpg">Neuruppin St. Trinitatis-01</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" rel="license">CC BY-SA 4.0</a></div>

                        </Box>



                        <Box className="mainWrapper">



                            <Container maxWidth="md" className="container subheroContainer">
                                <Box className="textBox">
                                    <Box className="textBoxInner">
                                        <Typography variant='h3' className='subtitleH3'>Mein Team und ich heißen Sie herzlich willkommen</Typography>
                                        <Typography variant='body1'>Der Notar bekleidet ein öffentliches Amt und ist zur Neutralität und Verschwiegenheit verpflichtet. Er ist Teil der vorsorgenden Rechtspflege, unabhängig, unparteiisch und sorgt durch sichere Vertragsgestaltung dafür, dass spätere Rechtsstreitigkeiten vermieden werden. Der Notar hat dafür Sorge zu tragen, dass unerfahrene Vertragsbeteiligte geschützt werden.<br /><br />
                                            Gern unterstütze ich Sie bei der Ausgestaltung und Umsetzung Ihrer Rechtsangelegenheiten.</Typography>
                                    </Box>
                                </Box>
                            </Container>




                            <Box className="bannerSection section" id="quote">
                                
                            <Container maxWidth="md" className="container bannerContainer">

                                    <Box className="quoteInnerBox">
                                        <img src="quote-white.svg" className='quoteIcon' />
                                        <Box>
                                            <Typography variant='body1' className='quoteText'>
                                                Der Notar soll den Willen der Beteiligten erforschen, den Sachverhalt klären, die Beteiligten über die rechtliche Tragweite des Geschäfts belehren und ihre Erklärungen klar und unzweideutig in der Niederschrift wiedergeben. Dabei soll er darauf achten, daß Irrtümer und Zweifel vermieden sowie unerfahrene und ungewandte Beteiligte nicht benachteiligt werden.<span className='quoteSource'> - (§ 17 Abs. 1 BeurkG)</span>
                                            </Typography>
                                        </Box>
                                        <img src="quote-white.svg" className='quoteIcon end' />
                                    </Box>

                                </Container>
                            </Box>



                            <Box className="section" id="info">
                                <Container maxWidth="md" className="leistungenContainer section" id="leistungen">
                                    <Typography variant='h2' className='sectionTitle fadeInOpac'>Meine Tätigkeitsfelder</Typography>
                                    <Typography variant='h3' className='sectionTitle3 fadeInOpac'>Hier gelangen Sie zur Digitalen Notarplattform (DiNo)</Typography>
                                    <Typography variant='body1'>
                                    Mein Team und ich bieten Ihnen notarielle Leistungen in den verschiedensten Bereichen wie beispielsweise Immobilien, Erbe, Unternehmen, Vorsorge, Schenkungen, Familie und vieles mehr. Kontaktieren Sie uns gern.
                                    </Typography>
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
                                    <Typography variant='body1'>Haben Sie Fragen? Nehmen Sie <a href="#kontakt">Kontakt</a> zu mir auf!</Typography>
                                    <Typography variant='h3' className='sectionTitle3 marginTop'>Notarkosten</Typography>
                                    <Typography variant='body1'>Die Notarinnen und Notare sind gemäß § 17 Abs. 1 Satz 1 der Bundesnotarordnung verpflichtet, für ihre Tätigkeit die im Gerichts- und Notarkostengesetz (GNotKG) gesetzlich vorgeschriebenen Gebühren und Auslagen zu erheben. Gebührenvereinbarungen jeder Art sind unzulässig. Die ordnungsgemäße Gebührenerhebung und Kostenvollstreckung wird durch den Präsidenten des Landgerichts bzw. die Notarkasse geprüft.</Typography>
                                </Container>
                            </Box>

                            <Container maxWidth="md" className="container section" id="notare">
                                <Typography variant='h2' className='sectionTitle'>
                                    Ihr Notar
                                </Typography>

                                <Grid container justifyContent="center" spacing={2} className="notareGrid">

                                    <Grid item xs={12} sm={12} className='notarElement'>

                                        <Box className="notarInnerBox">
                                            <Box className="notarImgWrapper">
                                                <img src='Thomas-Bensch_thumbnail.jpg' className='notarImg' />
                                            </Box>
                                            <Box>
                                                <Typography variant='h3' className='subtitleH3'>Notar Thomas Bensch</Typography>
                                                <Typography variant='body1' paragraph>Herr Bensch ist der Amtsnachfolger des Notars a.D. Bodo Bartsch, dessen Akten er auch verwahrt.</Typography>
                                                <Button className='btnSecondary' onClick={() => toggleVisibility('elementToToggle1')}>{`${isVisible5 ? 'Einklappen' : 'Mehr zur Person'}`}</Button>
                                            </Box>

                                        </Box>

                                        <Box id="elementToToggle1" className={`notarBodyTextWrapper ${isVisible5 ? 'visible' : ''}`}>
                                            <Typography variant='body1' paragraph className='notarBodyText'>
                                            Nach einem Studium für Verwaltungsmanagement und Recht an der Brandenburgischen Kommunalakademie in Potsdam und an der Technischen Fachhochschule Wildau arbeitete er für kurze Zeit im Bauordnungsamt des Landkreises Märkisch-Oderland. Danach folgte das Studium der Rechtswissenschaft an der Europa-Universität Viadrina in Frankfurt (Oder). Herr Bensch absolvierte das Rechtsreferendariat am Landgericht Potsdam, u.a. mit Stationen bei der Industrie- und Handelskammer Potsdam,  DOMBERT Rechtsanwälte Partnerschaftsgesellschaft mbB  und Gleiss Lutz Hootz Hirsch PartmbB Rechtsanwälte, Steuerberater am Standort Hamburg. Von 2015 bis 2017 war er Stipendiat des Deutschland Stipendiums.<br /><br />
                                            2021 wurde Herr Bensch in den Notarassessorendienst des Landes Brandenburg aufgenommen und war dort zunächst der Notarin Dorit Pajunk in Wittstock/Dosse zur Ausbildung zugewiesen. 2022 erfolgte ein Ausbilderwechsel zum Notar Thomas Woinar in Frankfurt (Oder). Zwischenzeitlich wurde Herr Bensch als Notariatsverwalter in Falkenberg/Elster eingesetzt, bevor kurz vor der Ernennung zum Notar in Neuruppin eine Zuweisung nach Potsdam in das Notarbüro Damke und Damke erfolgte.<br /><br /></Typography>
                                        </Box>


                                    </Grid>


                                </Grid>
                            </Container>


                            <Container maxWidth="md" className="container section" id="kontakt">
                                <Typography variant='h2' className='sectionTitle'>
                                    Kontaktieren Sie mich!
                                </Typography>
                                <Contactform />
                                <br /><br />
                                <Typography variant='body1' paragraph>
                                    Hier finden Sie mich:
                                </Typography>
                                <Box className="contactMap">
                                <iframe width="100%" height="400px" frameBorder="0" allowFullScreen allow="geolocation" src="//umap.openstreetmap.de/de/map/notar-thomas-bensch-karte_55438?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false&captionMenus=false"></iframe>

                             
                                </Box>
                                <Typography variant='body1' paragraph className="contactMapRouteLink">Einen Routenplaner finden sie <a href="https://www.google.com/maps/dir//Pr%C3%A4sidentenstra%C3%9Fe+47,+Neuruppin/@52.9228135,12.7635872,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47a93daef2b5288f:0x8b0754e2b416faa6!2m2!1d12.8047865!2d52.9228206!3e0?hl=en&entry=ttu" target="_blank">hier</a>.</Typography>

                            </Container>

                        </Box>

                    </div>
                </main >
            </div >

        </Box>
    );
};

export default ScrollAnimation;