import { Typography, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import '../App.css';

const Imprint = () => {
  return (
    <div className="App">

      <main>

        <Container maxWidth="md" className="container serviceContainer">
          <Typography variant='h1' className='sectionTitle'>Karriere</Typography>

          <Typography variant='body1' className='sectionText'>
          Zum Auf- und Ausbau eines neues Teams suchen wir für das Notarbüro ab dem 01. April 2024 zuverlässige, kommunikative und freundliche Mitarbeiter*innen (m/w/d) in Voll- oder Teilzeit.
          </Typography>
          <Typography variant='body1' className='sectionText'>
          Zu Ihren Aufgaben gehört die Erstellung, der Vollzug und die Abwicklung von notariellen Urkunden sowie die Kommunikation mit Mandanten, Dritten und Behörden sowie die Übernahme von organisatorischen Tätigkeiten.
          </Typography>
          <Typography variant='body1' className='sectionText'>
          Sie verfügen über eine abgeschlossene Berufsausbildung als Notarfachangestellte/r oder Rechtsanwalts- und Notarfachangestellte/r (bzw. eine ähnliche Qualifikation) oder praktische Erfahrungen in einem Notarbüro. Kenntnisse mit der Notarsoftware ARNOtop sind wünschenswert.
          </Typography>
          <Typography variant='body1' className='sectionText'>
          Sie erwartet:
          </Typography>

          <List>
          <ListItem disablePadding>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="ein neu aufzustellendes Team mit abwechslungsreichen Tätigkeiten und Übernahme fachlicher Verantwortung," />

          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="eine der Tätigkeit angemessene und attraktive Vergütung," />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="die Möglichkeit zur Erweiterung vorhandener Erfahrungen und Fähigkeiten durch Fort- und Weiterbildungen." />
          </ListItem>
        </List>

        <Typography variant='body1' className='sectionText'>
        Das Notarbüro liegt im Zentrum Neuruppins und ist gut mit öffentlichen Verkehrsmitteln erreichbar.
          </Typography>

        <Typography variant='body1' className='sectionText'>
        Ihre Bewerbung richten Sie bitte per E-Mail an <a href="mailto:info@bensch-notar.de">info@bensch-notar.de</a> oder postalisch an das Notarbüro Präsidentenstraße 47 in 16816 Neuruppin.
          </Typography>
        
        </Container>

      </main >
    </div >
  );
}

export default Imprint;