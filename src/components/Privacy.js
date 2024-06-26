import logo from '../logo.svg';
import { Typography, List, ListItem, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ResponsiveAppBar from './ResponsiveAppBar';
import Contactform from './Contactform';
import '../App.css';

const Privacy = () => {
  return (
    <div className="App">

      <main>

      <Container maxWidth="md" className="container serviceContainer">
          <Typography variant='h1' className='sectionTitle'>Daten­schutz</Typography>
          <Typography variant='h2' className='sectionTitle3 marginTop'>1. Datenschutz auf einen Blick</Typography>
          <Typography variant='body1' className='sectionText'>
          <b>Allgemeine Hinweise</b><br /><br />
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </Typography><br />
          <Typography variant='body1' className='sectionText'>
          <b>Datenerfassung auf dieser Website</b><br /><br />
Wer ist verantwortlich für die Datenerfassung auf dieser Website?<br />
Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </Typography><br />
          <Typography variant='body1' className='sectionText'>
          <b>Wie erfassen wir Ihre Daten?</b><br /><br />
Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </Typography>
          <Typography variant='body1' className='sectionText'>
          Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </Typography><br />
          <Typography variant='body1' className='sectionText'>
          <b>Wofür nutzen wir Ihre Daten?</b><br /><br />
Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </Typography><br />
          <Typography variant='body1' className='sectionText'>
          <b>Welche Rechte haben Sie bezüglich Ihrer Daten?</b><br /><br />
Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
          </Typography>

          <Typography variant='h2' className='sectionTitle3 marginTop'>2. Hosting</Typography>
          <Typography variant='body1' className='sectionText'>
          <b>Personenbezogenen Daten</b><br /><br />
Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</Typography>
          <Typography variant='body1' className='sectionText'>
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</Typography>
          <Typography variant='body1' className='sectionText'><br/>
          <b>Abschluss eines Vertrages über die Auftragsverarbeitung</b><br/><br/>
Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über die Auftragsverarbeitung mit unserem Hoster geschlossen.</Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>3. Allgemeine Hinweise und Pflichtinformationen</Typography>
          <Typography variant='body1' className='sectionText'>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</Typography>
          <Typography variant='body1' className='sectionText'>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</Typography>
          <Typography variant='body1' className='sectionText'>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</Typography><br />

          <Typography variant='body1' className='sectionText'>
          <b>Hinweis zur verantwortlichen Stelle</b><br /><br />
Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/>
Notar Thomas Bensch<br />
          Präsidentenstraße 47 16816 Neuruppin<br />

          Tel 03391 - 458445<br />
          Fax 03391 - 458446<br />
          E-Mail info@bensch-notar.de<br /></Typography><br />
          <Typography variant='body1' className='sectionText'>
          <b>Gesetzlich vorgeschriebener Datenschutzbeauftragter</b><br /><br />
Der bestellte Datenschutzbeauftragte ist die Gesellschaft für notariellen Datenschutz mit beschränkter Haftung (GNotDS)<br/>
Ehrensteinstraße 33,<br/>04105 Leipzig,<br/>E-Mail: datenschutz@gnotds.de</Typography><br />


          <Typography variant='body1' className='sectionText'>
          <b>Widerruf Ihrer Einwilligung zur Datenverarbeitung</b><br /><br />
Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt. Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
<br /><br />
Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
<br /><br />
Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</Typography>

<br />
          <Typography variant='body1' className='sectionText'>
          <b>Beschwerderecht bei der zuständigen Aufsichtsbehörde</b><br /><br />
Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
<br /><br /><br />
<b>Recht auf Datenübertragbarkeit</b><br /><br />
Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
<br /><br /><br />
<b>SSL- bzw. TLS-Verschlüsselung</b><br /><br />
Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
<br /><br /><br />
<b>Auskunft, Löschung und Berichtigung</b><br /><br />
Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
<br /><br /><br />
<b>Recht auf Einschränkung der Verarbeitung</b><br /><br />
Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:<br /><br />


Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.<br />
Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.<br />
Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.<br />
Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.<br />
<br />
Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</Typography>


<Typography variant='h2' className='sectionTitle3 marginTop'>4. Datenerfassung auf dieser Website</Typography>
          <Typography variant='body1' className='sectionText'>
          <b>Cookies</b><br /><br />
Die Internetseiten verwenden teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Es gibt technisch notwendige Cookies, die bei jedem Aufruf der Webseite gesetzt werden.<br />
Falls Sie Ihre Zustimmung gegeben haben, werden soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, diese in der Datenschutzerklärung unter Punkt 5 "Inhalte Dritter auf dieser Webseite" gesondert behandelt.<br />Zum erneuten Aufrufen des Cookie-Banners löschen Sie über Ihren Browser "Cookies und Websitedaten".
<br /><br /><br />
<b>Server-Log-Dateien</b><br /><br />
Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
<br /><br /><br />
<b>Browsertyp und Browserversion</b><br /><br />
verwendetes Betriebssystem<br />
Referrer URL<br />
Hostname des zugreifenden Rechners<br />
Uhrzeit der Serveranfrage<br />
IP-Adresse
<br /><br />
Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
<br /><br /><br />
<b>Kontaktformular</b><br /><br />
Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
<br /><br />
<b>Anfrage per E-Mail, Telefon oder Telefax</b><br /><br />
Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.
Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
<br /><br />
<b>Registrierung auf dieser Website</b><br /><br />
Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.
Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.
Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt zum Zwecke der Durchführung des durch die Registrierung begründeten Nutzungsverhältnisses und ggf. zur Anbahnung weiterer Verträge (Art. 6 Abs. 1 lit. b DSGVO).<br />
Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf dieser Website registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
<br /><br /><br />
<b>Verarbeiten von Daten (Kunden- und Vertragsdaten)</b><br /><br />
Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.
Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
<br /><br />
<b>Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte</b><br /><br />
Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.
Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.<br />
Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
          </Typography>


          <Typography variant='h2' className='sectionTitle3 marginTop'>5. Inhalte Dritter auf der Webseite</Typography>
          <Typography variant='body1' className='sectionText'>
          Unser Internetauftritt integriert Inhalte anderer Anbieter. Dies können reine Content-Elemente (z.B. Nachrichten, Neuigkeiten), aber auch Widgets (Funktionen, wie z.B. Buchungssysteme) oder z.B. Schriften und technische Bibliotheken sein. Dazu gehören auch Google Fonts. Aus technischen Gründen erfolgt dies, indem diese Inhalte vom Browser von anderen Servern geladen werden. In diesem Zusammenhang werden die aktuell von Ihrem Browser verwendete IP und der verwendete Browser des anfragenden Systems übermittelt. Bitte beachten Sie diesbezüglich die jeweiligen Datenschutzerklärungen der Drittanbieter.          
          </Typography>

          
          <Typography variant='h2' className='sectionTitle3 marginTop'>6. Datenschutz im Notarbüro</Typography>
          <Typography variant='body1' className='sectionText'>
          Die Vertraulichkeit und der Schutz der Privatsphäre der Mandanten haben im Notarbüro einen besonders hohen Stellenwert. Wir möchten Sie im Folgenden darüber in Kenntnis setzen, welche personenbezogenen Daten wir nach der EU-Datenschutz-Grundverordnung (DSGVO) verarbeiten. Der Information können Sie auch entnehmen, welche Rechte Sie bezüglich Ihrer Daten haben.        <br /><br />
          </Typography>

          








          <Typography variant='body1' className='sectionText'><b>Verantwortlichkleit für die Datenverarbeitung</b></Typography>
          <Typography variant='body1' className='sectionText'>Verantwortlicher im Sinne der DSGVO für die Verarbeitung der personenbezogenen Daten ist:<br/><br/>
          Notar Thomas Bensch, Präsidentenstraße 47, 16816 Neuruppin<br/>
Tel.: 03391-458445, Fax: 03391-458446, E-Mail: info@bensch-notar.de<br/><br/>
Der bestellte Datenschutzbeauftragte ist die GNotDS Gesellschaft für notariellen Datenschutz mit beschränkter Haftung (GNotDS), Ehrensteinstraße 33, 04105 Leipzig, E-Mail: datenschutz@gnotds.de. <br /><br /></Typography>

          <Typography variant='body1' className='sectionText'><b>Zweck der Datenverarbeitung</b></Typography>
          <Typography variant='body1' className='sectionText'>Wir verarbeiten bei der Wahrnehmung der uns gesetzlich übertragenen Aufgaben personenbezogene Daten. Diese Datenverarbeitung erfolgt auf Ihre Anfrage hin und ist für die angemessene Bearbeitung Ihres Anliegens sowie zur Erfüllung von Informations- und Antragspflichten erforderlich. <br /><br /></Typography>

          <Typography variant='body1' className='sectionText'><b>Kategorien personenbezogener Daten und Rechtsgrundlagen für deren Verarbeitung</b></Typography>
          <Typography variant='body1' className='sectionText'>Personenbezogene Daten, die von uns verarbeitet werden, sind alle Daten, die auf Sie persönlich 
beziehbar sind. Dazu zählen unter anderem:<br />
</Typography>

<ul className='sectionText'>
  <li>allgemeine Personendaten: Name, Geburtsdatum und Alter, Geschlecht, Geburtsort, Familienstand, Anschrift, Staatsangehörigkeit, E-Mail-Adresse, Telefonnummer etc.;</li>
  <li>Kennnummern: Personalausweis- und Passnummer, Steueridentifikationsnummer, Führerschein, Kfz-Kennzeichen etc.;</li>
  <li>Bankdaten: Kreditinstitut, Bankverbindung, Kreditinformationen etc.;</li>
  <li>Vermögensverhältnisse: Immobilieneigentum, sonstige Rechte an Grundstücken, Gesellschaftsbeteiligungen, Versicherungen, Einkommen, Renteninformationen, sonstiges bewegliches Vermögen etc.</li>
</ul>

<Typography variant='body1' className='sectionText'>Für die Verarbeitung personenbezogener Daten ist die Rechtsgrundlage Art. 6 Abs. 1 lit. c) und e) DSGVO, § 5 Abs. 1 BbgDSG i.V.m. dem notariellen Berufsrecht (insbesondere BNotO, BeurkG und DONot).</Typography>

<Typography variant='body1' className='sectionText'>Art. 6 Abs. 1 lit. c) DSGVO erlaubt die Datenverarbeitung, wenn diese zur Erfüllung rechtlicher Verpflichtungen des Verantwortlichen erforderlich ist. Art. 6 Abs. 1 lit. e) DSGVO gestattet die Datenverarbeitung zur Wahrnehmung einer Aufgabe im öffentlichen Interesse und die Verarbeitung in Ausübung öffentlicher Gewalt. </Typography>

<Typography variant='body1' className='sectionText'>Darüber hinaus können für ein ordnungsgemäßes Verfahren nach dem BeurkG besondere Kategorien 
von personenbezogenen Daten verarbeitet werden, z.B. Angaben zu Behinderungen (Seh-, Hör-, Schreibbehinderungen), sexueller Orientierung und Gesundheitsdaten. Rechtsgrundlage für die Verarbeitung dieser besonderen Kategorien von Daten ist Art. 9 Abs. 2 lit. g) DSGVO, § 22 Abs. 1 Nr. 2 lit. a) BDSG i.V.m. §§ 11, 17, 22 ff., 28 BeurkG.</Typography>

<Typography variant='body1' className='sectionText'>Weiterhin erheben wir auch bei öffentlich zugänglichen Quellen personenbezogene Daten, z.B. Grundstücksdaten vom Grundbuchamt und Registerdaten vom Handelsregister. Ferner erheben wir Daten aus sonstigen Quellen z.B. bei Gläubigern. Dies geschieht jedoch nur auf Grund vorheriger Veranlassung durch Sie und zur Bearbeitung Ihres konkreten Anliegens bzw. zur Erfüllung von gesetzlichen Pflichten.<br /><br /></Typography>


<Typography variant='body1' className='sectionText'><b>Empfänger Ihrer Daten</b></Typography>
          <Typography variant='body1' className='sectionText'>Wir übermitteln Ihre personenbezogenen Daten nur dann an Dritte, wenn dies gesetzlich erlaubt und erforderlich ist oder Sie hierin eingewilligt haben. <br /> <br />
          Empfänger Ihrer personenbezogenen Daten können vor allem sein: das Grundbuchamt, das Handelsregister, das Zentrale Testamentsregister, das Zentrale Vorsorgeregister, das Finanzamt, die Ländernotarkasse, andere Notare, Kreditinstitute und sonstige private Dritte. Die Übermittlung an private Dritte geschieht nur zur Erfüllung Ihres konkreten Anliegens und nur auf Ihre Veranlassung. <br /> <br />
          Weiterhin erfolgt die Übermittlung von Daten an weitere berechtigte Empfänger. Dazu gehören insbesondere von uns eingesetzte Dienstleister, wenn diese als Auftragsverarbeiter nach Art. 28 DSGVO beauftragt werden. Auftragsverarbeiter in diesem Sinne sind z.B. der IT-Systembetreuer, die Notarsoftwareanbieter, die Finanzbuchhaltung. <br /><br /></Typography>


<Typography variant='body1' className='sectionText'><b>Speicherung Ihrer Daten</b></Typography>
          <Typography variant='body1' className='sectionText'>Wir bewahren Ihre Daten entsprechend den gesetzlichen Aufbewahrungsfristen auf. Die Aufbewahrungsfristen richten sich primär nach der DONot sowie der AO und sind von dem Verarbeitungszweck abhängig. So beträgt z.B. die Aufbewahrungsfrist für Buchungsbelege zehn Jahre ab Empfang bzw. Versand der Korrespondenz und Erfassung in der Finanzbuchhaltung, (§ 257 HGB i.V.m. § 147 AO) oder 100 Jahre bei einem Vermerk über Verfügungen von Todes wegen gemäß § 20 Abs. 1 DONot.<br /><br /></Typography>


<Typography variant='body1' className='sectionText'><b>Ihre Rechte</b></Typography>
          <Typography variant='body1' className='sectionText'>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</Typography>


<ul className='sectionText'>
  <li>Auskunft über Sie betreffende personenbezogene Daten (Art. 15 DSGVO);</li>
  <li>Berichtigung Sie betreffende unrichtige personenbezogene Daten (Art. 16 DSGVO);</li>
  <li>Löschung personenbezogener Daten (Art. 17 DSGVO);</li>
  <li>Einschränkung der Verarbeitung personenbezogener Daten (Art. 18 DSGVO);</li>
  <li>Widerspruch gegen die Verarbeitung personenbezogener Daten (Art. 21 DSGVO).</li>
</ul>


<Typography variant='body1' className='sectionText'>Die vorstehenden Rechte gelten nur insoweit, als das diesen nicht die notarielle Verschwiegenheitsverpflichtung gemäß § 18 BNotO entgegensteht. Die Verarbeitung Ihrer Daten erfolgt auf der Basis von gesetzlichen Regelungen.</Typography>

<Typography variant='body1' className='sectionText'>Nur in Ausnahmefällen benötigen wir Ihre Einwilligung. In diesen Fällen haben Sie zusätzlich das Recht, die Einwilligung für die zukünftige Verarbeitung zu widerrufen (Art. 7 Abs. 3 DSGVO). Die bisherige Rechtmäßigkeit der Verarbeitung wird durch diesen Widerruf nicht berührt.</Typography>

<Typography variant='body1' className='sectionText'>Sie haben ferner das Recht, sich an eine Aufsichtsbehörde für den Datenschutz zu wenden, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.</Typography>

<Typography variant='body1' className='sectionText'>Die Anschrift der für uns zuständigen Aufsichtsbehörde lautet: Landesbeauftragte für den Datenschutz und für das Recht auf Akteneinsicht, Stahnsdorfer Damm 77, 14532 Kleinmachnow.</Typography>

<Typography variant='body1' className='sectionText'>Bei Fragen zur Verarbeitung Ihrer Daten stehen wir Ihnen gerne zur Verfügung.<br/><br/>
Ihr Notarbüro</Typography>

        </Container>

      </main >
    </div >
  );
}

export default Privacy;