import { useLocation } from 'react-router-dom'


const EachCard = () => {
  const location = useLocation()
  const { title, author, genre, rating } = location.state

  return (
    <div className='container'>
      <div className='review'>
        <img src='https://picsum.photos/200/' alt='' />
        <h1>Title: {title}</h1>
        <h3>By: {author}</h3>
        <p>Rating: {rating}</p>
        <p>Genre: {genre}</p>
      </div>
    </div>
  )
}

export default EachCard