import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
  return (
    <div className='carousel'>
      <h1>tired mama book club</h1>
      <p>
        we're mama's. we're tired. we're trying to read more than 5 sentences at
        a time.
      </p>
      <Carousel className='carousel'>
        <Carousel.Item className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://cdn.shopify.com/s/files/1/0559/3658/1686/products/1655500476_luvbooks_580x.jpg?v=1655501450'
            alt='The Unhoneymooners cover'
          />
          <Carousel.Caption className='carousel-caption'>
            <h3>The Unhoneymooners - 5 stars!</h3>
            <p>
              One of our T O P recommendations if you like a fun, easy read!
              Check out the review on the Books and Reviews page!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://media.istockphoto.com/vectors/join-us-invitation-lettering-isolated-on-white-vector-id812936342?k=20&m=812936342&s=170667a&w=0&h=KyfSMwlb5Qrc0EhKJrVewLEDPwurANy0zSjuB2QTaIU='
            alt='Join Us'
          />

          <Carousel.Caption>
            <h3>Join our club!</h3>
            <p>
              We're mama's. We're tired. We're trying to read more than 5
              sentences at a time.
            </p>
            <p>Visit our About Us page to learn more!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbLOq_WxAmDvFWrnkK-gDegbAwRChluGqtfy6Ubi_XvHafECoXW1x0X_33ataDCGXxLo&usqp=CAU'
            alt='Coming soon'
          />

          <Carousel.Caption>
            <h3>Coming Soon!</h3>
            <p>
              New M E R C H coming soon! Get ahold of your fave tired mama
              designs!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home
