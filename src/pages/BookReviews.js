import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const BookReviews = ({reviewCard}) => {
  const [book, setBook] = useState([])
  const [form, setForm] = useState({})
  const navigate = useNavigate('')

  useEffect(() => {
    fetch('http://localhost:4002/')
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error(error))
  }, [])

  const addForm = (event) => {
    setForm({...form, [event.target.name]: event.target.value})    
  }

  const addReview = (event) => {
    event.preventDefault()

    fetch('http://localhost:4002/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    .then(response => response.json())
    .then(data => setForm(data))
    .catch(error => console.error(error))
  }

  const goToReview = () => {
    navigate('/review')
  }

  return (
    <div className='all-books'>
      {book.map((eachBook) => {
        return (
          <Link state={reviewCard} to='/review'>
            <Card className='each-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src='https://picsum.photos/200/' />
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
      <div>
        <Card className='each-card' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
              <h2>Add a Book Review!</h2>
            </Card.Title>
              <form className="add-review">
                <label htmlFor="">Book Title: </label>
                <input 
                  onChange={(event) => addForm(event)}
                  type="text" 
                  placeholder="ex: Ted and Ann"
                  name="title"
                  id="title"
                />
                <label htmlFor="">Author: </label>
                <input 
                  onChange={(event) => addForm(event)}
                  type="text" 
                  placeholder="ex: Rebecca Morris"
                  name="author"
                  id="author"
                />
                <label htmlFor="">Rating: </label>
                <input 
                  onChange={(event) => addForm(event)}
                  type="text" 
                  placeholder="ex: 4 stars"
                  name="rating"
                  id="rating"
                />
                <label htmlFor="">Genre: </label>
                <input 
                  onChange={(event) => addForm(event)}
                  type="text" 
                  placeholder="ex: True Crime"
                  name="genre"
                  id="genre"
                />
                <button onClick={addReview}>Add Review</button>
              </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default BookReviews
