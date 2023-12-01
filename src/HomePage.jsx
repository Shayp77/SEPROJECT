import React from 'react'

import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Button, Card } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

import CardGroup from 'react-bootstrap/CardGroup';

export const HomePage = () => {
  return (
    <>
      <Carousel> 
          <Carousel.Item interval={1500}> 
              <img 
                  className="d-block w-100"
                  src="https://lifestylewithsarah.files.wordpress.com/2023/07/banner.jpg?w=900"
                  alt="Image One"
              /> 
              <Carousel.Caption> 
                  <h3>Label for first slide</h3> 
                  <p>Sample Text for Image One</p> 
              </Carousel.Caption> 
          </Carousel.Item> 
          <Carousel.Item interval={1500}> 
              <img 
                  className="d-block w-100"
                  src="https://lifestylewithsarah.files.wordpress.com/2023/07/banner.jpg?w=900"
                  alt="Image Two"
              /> 
              <Carousel.Caption> 
                  <h3>Label for second slide</h3> 
                  <p>Sample Text for Image Two</p> 
              </Carousel.Caption> 
          </Carousel.Item> 
      </Carousel>

      <Container className='py-5'>
        <Row className='py-4'>
          <h1>Now Playing</h1>
        </Row>
        <Row>
          <Col>
            <Card className='bg-secondary text-light' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://dummyimage.com/200x320/858585/ffffff" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-secondary text-light' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://dummyimage.com/200x320/858585/ffffff" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button  variant="warning">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-secondary text-light' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://dummyimage.com/200x320/858585/ffffff" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-secondary text-light' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://dummyimage.com/200x320/858585/ffffff" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className='py-4'></div>
        <Row className="py-4"><h1>Coming Soon</h1></Row>
        <Row>
          <Col>
            <Card className='bg-secondary text-light' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://dummyimage.com/200x320/858585/ffffff" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-secondary text-light' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://dummyimage.com/200x320/858585/ffffff" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-secondary text-light'd style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://dummyimage.com/200x320/858585/ffffff" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-secondary text-light' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://dummyimage.com/200x320/858585/ffffff" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className='py-4'></div>
      </Container>
    </>
  )
}

