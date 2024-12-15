import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
              <h1 className='title'>Find Real Estate & Get Your Dream Home</h1>
              <p> find your dream home in our website, we have a wide range of properties for you to choose from and our team of experts will help you find the perfect home for your budget and lifestyle preferences.
              </p>
              <SearchBar/>
              <div className="boxes">
                <div className="box">
                  <h2>16+</h2> 
                  <h3>Years of Experience</h3>
                </div>
                <div className="box">
                  <h2>200</h2> 
                  <h3>Award Gained</h3>
                </div>
                <div className="box">
                  <h2>1200+</h2> 
                  <h3>Properties Sold</h3>
                </div>
              </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg2.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage
