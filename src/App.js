
import './App.css';
import Name from './Components/Name';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Description from './Components/Description';
import Url from './Components/Url';
import Price from './Components/Price';
import Product from './Components/Product';
import Welcome from './Components/Welcome';



function App() {
  const pop = prompt("write heer")
  return (   
    <div className="App">
      <div>
        <Welcome name= "Riadh"/>
      {pop?<div><p>Hello, {pop}! </p><Name /> </div>:<p>{Product.Description}</p>}
      </div>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Url />
            <Card.Body>
              <Card.Title><Name /></Card.Title>
              
              <Card.Text>
                <Price />
              </Card.Text>
              <Card.Text>
                <Description />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default App;
