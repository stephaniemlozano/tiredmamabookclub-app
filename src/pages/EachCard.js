import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Card } from 'react-bootstrap'

const EachCard = () => {
  const location = useLocation()
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  //const { title, author, genre, rating } = location.state
  console.log(location)

  const addForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const updateReview = (event) => {
    event.preventDefault()

    fetch('http://localhost:4002/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((error) => console.error(error))
  }

  const deleteReview = (event) => {
    event.preventDefault()
    fetch('http://localhost:4002/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => navigate('/books-reviews'))
      .catch((error) => console.error(error))
  }

  return (
    <div className='container'>
      <div className='each-card-review'>
        <img src='https://picsum.photos/200/' alt='' />
        <h1>Title: </h1>
        <h3>By: </h3>
        <p>Rating: </p>
        <p>Genre: </p>
      </div>
      <div>
        <Card className='each-card' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
              <h2>Update or Edit Book Review</h2>
              <small>Enter the information of the book you want to update or delete below.</small>
            </Card.Title>
            <form className='add-review'>
              <p>Edit a Review!</p>
              <label htmlFor=''>Book Title: </label>
              <input
                onChange={(event) => addForm(event)}
                type='text'
                placeholder='ex: Ted and Ann'
                name='title'
                id='title'
              />
              <label htmlFor=''>Author: </label>
              <input
                onChange={(event) => addForm(event)}
                type='text'
                placeholder='ex: Rebecca Morris'
                name='author'
                id='author'
              />
              <label htmlFor=''>Rating: </label>
              <input
                onChange={(event) => addForm(event)}
                type='text'
                placeholder='ex: 4 stars'
                name='rating'
                id='rating'
              />
              <label htmlFor=''>Genre: </label>
              <input
                onChange={(event) => addForm(event)}
                type='text'
                placeholder='ex: True Crime'
                name='genre'
                id='genre'
              />
              <button onClick={updateReview}>Update Review</button>
              <button onClick={deleteReview}>Delete Review</button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default EachCard
