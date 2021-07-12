import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bestBooks: [],
      show: false
    }
  }
  componentDidMount = async () => {

    const { user } = this.props.auth0;

    let bestBooks = await axios.get(`${process.env.REACT_APP_BOOK_DATA}/books?userEmail=${user.email}`)
    await this.setState({
      bestBooks: bestBooks.data,
      show: true
    })
    console.log(bestBooks.data);
  }
  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.show &&
          this.state.bestBooks.map(book => {
            return (
              <Container>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.name}</Card.Title>
                      <Card.Text>
                        {book.description}
                      </Card.Text>
                      <Card.Text>
                        {book.status}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              </Container>
            )
          })
        }
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);

