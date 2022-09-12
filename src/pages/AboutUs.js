const AboutUs = () => {
  return (
    <div className='container-aboutus'>
      <h1>Welcome to tired mama book club!</h1>
      <div class='au-card'>
        <div class='au-inner-card'>
          <div class='au-flip-front'>
            <img
              src='https://i.imgur.com/9gn1ZZb.jpeg'
              alt='sisters'
              width={300}
            />
          </div>
          <div class='au-flip-back'>
            <br />
            <h3>Carolina and Stephanie</h3>
            <p>Ft. Lauderdale, FL</p>
            <p>2016</p>
          </div>
        </div>
      </div>
      <p>
        Hey! We're Carolina and Stephanie! We're sisters (we know, we look
        nothing alike!) and also mamas to 3 crazies 5 and under, collectively.
      </p>
      <p>
        We love a good book! We're also tired from wrangling littles so getting
        through a book quickly these days is unheard of. We wanted to make a
        space where all tired moms of young and old can come together and share
        their fave book selections, get recommendations and just be a supportive
        space overall. Happy mommin! And happy reading <a href="https://www.mymamasdania.com/">📖</a>!
      </p>
      <div>
        <h2 className="title">
          <span className="title-word title-word1">Want </span>
          <span className="title-word title-word2">to </span>
          <span className="title-word title-word3">contact </span>
          <span className="title-word title-word4">us?</span>
        </h2>
      </div>
      <p>Check out our social media pages:</p>
      <a href='https://www.instagram.com/tiredmamabookclub/'>
        tired mama I N S T A G R A M
      </a>
      <br />
      <a href='https://github.com/stephaniemlozano'>tired mama G I T H U B</a>
      <br />
      <a href='https://www.linkedin.com/in/stephanie-sadowski-3bb284241/'>
        tired mama L I N K E D I N
      </a>
    </div>
  )
}

export default AboutUs
