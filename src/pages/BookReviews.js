import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const BookReviews = () => {
  const [book, setBook] = useState([])
  const navigate = useNavigate('')

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error(error))
  }, [])

  const goToReview = () => {
    navigate('/review')
  }

  return (
    <div className='all-books'>
      {book.map((eachBook, index) => {
        return (
          <Link state={eachBook} to='/review'>
            <Card key={index} className='each-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={eachBook.image} />
              <Card.Body>
                <Card.Title>
                  <h2>{eachBook.title}</h2>
                </Card.Title>
                <Card.Text>
                  <p>Author: {eachBook.author}</p>
                  <p>Rating: {eachBook.rating}</p>
                  <p>Genre: {eachBook.genre}</p>
                </Card.Text>
                <Button
                  className='card-button'
                  variant='dark'
                  onClick={goToReview}>Read Review
                </Button>
              </Card.Body>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

export default BookReviews
