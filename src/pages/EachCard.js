import { useLocation, Link } from 'react-router-dom'


const EachCard = () => {
  const location = useLocation()
  const { title, author, genre, rating, image, review } = location.state

  return (
    <div className='container'>
      <div className='review'>
        <img src={image} alt=''/>
        <h1>Title: {title}</h1>
        <h3>By: {author}</h3>
        <p>Rating: {rating},  Genre: {genre}</p>
        <p>Review: {review}</p>
      </div>
      <Link state={location.state} to='/admin' className='link-color'>...</Link>
    </div>
  )
}

export default EachCard
