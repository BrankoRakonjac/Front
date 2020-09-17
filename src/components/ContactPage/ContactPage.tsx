import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card, Col } from 'react-bootstrap';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import RoledMainMenu from '../RoledMainMenu/RoledMainMenu';

export class ContactPage extends React.Component{
    render(){
        return(
            
        <Container>
            <RoledMainMenu role='user'/>
            <Card>
                    <Card.Body>
                        <Card.Title>
                            <p className="text-center"><FontAwesomeIcon icon={ faPhone} />Contact details</p>
                        </Card.Title>
                        <Card.Text>
                            <Col >
                        <strong> Call Centar</strong>     <br/><br/>

Telefon: 011/3-713-713 (važi za pozive iz svih mreža) <br/>
- Pozivanjem broja telefona 011/3-713-713 biće vam ponuđeno nekoliko opcija za dalju navigaciju kroz razgovor sa operaterom korisničke podrške.<br/>
- Kroz odabir jedne od opcija moći ćete da se informišete u vezi sa kupovinom određenog proizvoda, detaljima
 isporuke poručenih proizvoda ili da uložite reklamaciju odnosno sugestiju.<br/><br/>

<strong>Email adresa:</strong>
<br/>
- Fizička lica:prodaja@br.rs<br/>
- Pravna lica:corporate@br.rs<br/><br/>

Radno vreme Call Centra: ponedeljak - petak od 8 do 20h; subota od 9 do 16h; nedelja neradni dan<br/>
Putem Call Centra Br možete da:<br/>
- izvršite naručivanje robe<br/>
- informišete se o načinima plaćanja, radnom vremenu i uslovima isporuke<br/>
- dobijete ostale informacije u vezi kupovine u Br<br/><br/>

<strong>Spisak servisa</strong><br/><br/>

Spisak svih servisera za sve robne marke i vrste uređaja možete pogledati na linku.<br/><br/>

<strong>Ponude</strong><br/><br/>

Ukoliko ste zainteresovani za poslovnu saradnju sa nama ili nudite određenu robu ili usluge, molimo Vas kontaktirajte nas
 na sledeći email: ponude@br.rs <br/><br/>

 <strong>Zaposlenje</strong><br/><br/>

Ukoliko želite da se pridružite timu Br prijavite se za posao na email posao@br.rs<br/>
                            </Col>
                        </Card.Text>
                    </Card.Body>
            </Card>
         
      </Container>
     
      
      )
    }
}