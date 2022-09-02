import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Admin = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const addForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const addReview = (event) => {
    event.preventDefault()

    fetch('http://localhost:4002/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((error) => console.error(error))

      navigate('/books-reviews')
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

      navigate('/books-reviews')
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
    <div className='admin-cards'>
      <div>
        <Card className='each-card' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
              <h2>Add a Book Review!</h2>
            </Card.Title>
            <form className='add-review'>
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
              <button onClick={addReview}>Add Review</button>
            </form>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className='each-card' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
              <h2>Update or Edit Book Review</h2>
              <small>
                Enter the information of the book you want to update or delete
                below.
              </small>
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

export default Admin
