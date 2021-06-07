import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Graf2 from './graphs/grafRegijeStat.js'
import Graf3 from './graphs/grafRegijePreb.js'
import Graf4 from './graphs/grafObcineStat.js'
import Graf5 from './graphs/grafObcinePreb.js'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, 'Maribor, Maribor', '', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, 'Hoče, Hoče-Slivnica', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, 'Ptuj, Ptuj', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, 'Pesnica, Pesnica', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, 'Izola, Izola', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Multigrafs() {
  const classes = useStyles();
  return (
    <React.Fragment>
     

    


     <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="Občine" title="Občine">
    

  <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Indeks
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Graf4 leto={2020} kaz="Indeks delovne migracije"></Graf4>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        2019
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Graf4 leto={2019} kaz="Indeks delovne migracije"></Graf4>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        2018
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <Graf4 leto={2018} kaz="Indeks delovne migracije"></Graf4>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        2017
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <Graf4 leto={2017} kaz="Indeks delovne migracije"></Graf4>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        2016
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <Graf4 leto={2016} kaz="Indeks delovne migracije"></Graf4>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        2015
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <Graf4 leto={2015} kaz="Indeks delovne migracije"></Graf4>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Migranti
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        
      <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Graf5 leto={2020} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></Graf5>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        2019
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Graf5 leto={2019} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></Graf5>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        2018
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <Graf5 leto={2018} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></Graf5>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        2017
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <Graf5 leto={2017} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></Graf5>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        2016
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <Graf5 leto={2016} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></Graf5>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        2015
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <Graf5 leto={2015} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></Graf5>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>





  </Tab>
  <Tab eventKey="Regije" title="Regije">

  <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Indeks
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Graf2 leto={2020} kaz="Indeks delovne migracije"></Graf2>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        2019
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Graf2 leto={2019} kaz="Indeks delovne migracije"></Graf2>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        2018
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <Graf2 leto={2018} kaz="Indeks delovne migracije"></Graf2>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        2017
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <Graf2 leto={2017} kaz="Indeks delovne migracije"></Graf2>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        2016
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <Graf2 leto={2016} kaz="Indeks delovne migracije"></Graf2>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        2015
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <Graf2 leto={2015} kaz="Indeks delovne migracije"></Graf2>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Migranti
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        
      <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Graf3 leto={2020} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></Graf3>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        2019
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Graf3 leto={2019} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></Graf3>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        2018
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <Graf3 leto={2018} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></Graf3>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        2017
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <Graf3 leto={2017} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></Graf3>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        2016
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <Graf3 leto={2016} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></Graf3>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        2015
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <Graf3 leto={2015} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></Graf3>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

  </Tab>
  </Tabs>
    </React.Fragment>
  );
}